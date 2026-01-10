/**
 * ============================================================
 * NEWSLETTER SUBSCRIBER GOOGLE APPS SCRIPT
 * ============================================================
 * 
 * This script receives newsletter subscription requests and
 * stores them in the connected Google Sheet.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Add headers in Row 1: Email | Subscribed At | Source
 * 3. Go to Extensions > Apps Script
 * 4. Delete all existing code and paste this entire script
 * 5. Click Deploy > New deployment
 * 6. Select type: Web app
 * 7. Set "Execute as": Me
 * 8. Set "Who has access": Anyone
 * 9. Click Deploy and copy the Web app URL
 * 10. Paste the URL in your Newsletter.jsx file
 * 
 * ============================================================
 */

// Configuration
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

/**
 * Handle POST requests from the website
 */
function doPost(e) {
    try {
        // Parse the incoming data
        const data = JSON.parse(e.postData.contents);
        const email = data.email;
        const source = data.source || 'unknown';
        const timestamp = data.timestamp || new Date().toISOString();

        // Validate email
        if (!email || !isValidEmail(email)) {
            return createResponse(false, 'Invalid email address');
        }

        // Get the active spreadsheet and sheet
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

        if (!sheet) {
            return createResponse(false, 'Sheet not found');
        }

        // Check for duplicate email
        const emailColumn = sheet.getRange('A:A').getValues();
        const normalizedEmail = email.toLowerCase().trim();

        for (let i = 1; i < emailColumn.length; i++) {
            if (emailColumn[i][0] && emailColumn[i][0].toString().toLowerCase().trim() === normalizedEmail) {
                return createResponse(false, 'Email already subscribed', 'duplicate');
            }
        }

        // Add the new subscriber
        sheet.appendRow([normalizedEmail, timestamp, source]);

        // Return success response
        return createResponse(true, 'Successfully subscribed');

    } catch (error) {
        console.error('Error processing subscription:', error);
        return createResponse(false, 'Server error: ' + error.message);
    }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
    return ContentService.createTextOutput(JSON.stringify({
        status: 'ok',
        message: 'Newsletter API is running. Use POST to subscribe.'
    })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Create a JSON response
 */
function createResponse(success, message, errorType = null) {
    const response = {
        success: success,
        message: message
    };

    if (errorType) {
        response.errorType = errorType;
    }

    return ContentService.createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Test function - run this to verify the script is working
 */
function testScript() {
    const testData = {
        postData: {
            contents: JSON.stringify({
                email: 'test@example.com',
                source: 'test',
                timestamp: new Date().toISOString()
            })
        }
    };

    const result = doPost(testData);
    console.log('Test result:', result.getContent());
}
