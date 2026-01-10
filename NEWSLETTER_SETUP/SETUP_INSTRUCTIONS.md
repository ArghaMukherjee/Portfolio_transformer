# 📧 Newsletter Setup Guide

This guide will help you set up the free Google Sheets newsletter system for your portfolio.

## ⏱️ Time Required: 5-10 minutes

---

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Rename it to **"Newsletter Subscribers"** (click on "Untitled spreadsheet")
4. In **Row 1**, add these headers:
   - A1: `Email`
   - B1: `Subscribed At`
   - C1: `Source`
5. Optional: Bold the header row and freeze it (View > Freeze > 1 row)

Your sheet should look like this:

| Email | Subscribed At | Source |
|-------|---------------|--------|
|       |               |        |

---

## Step 2: Add the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. This opens the Apps Script editor in a new tab
3. **Delete all the default code** in the editor (the `myFunction` code)
4. Open the file `google-apps-script.js` in this folder
5. **Copy the entire contents** and paste it into the Apps Script editor
6. Click **💾 Save** (or Ctrl/Cmd + S)
7. Rename the project to "Newsletter Script" (click on "Untitled project")

---

## Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the ⚙️ gear icon next to "Select type" and choose **Web app**
3. Fill in:
   - **Description**: Newsletter Subscription API
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize the script** when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - If you see "Google hasn't verified this app", click "Advanced" → "Go to Newsletter Script (unsafe)"
   - Click "Allow"
6. **Copy the Web app URL** that appears (it starts with `https://script.google.com/...`)

---

## Step 4: Configure Your Website

1. Open `/src/components/Newsletter.jsx` in your code editor
2. Find this line near the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your copied URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_UNIQUE_ID/exec';
   ```
4. Save the file

---

## Step 5: Test It!

1. Run your website locally: `npm run dev`
2. Navigate to the Newsletter section
3. Enter a test email and click Subscribe
4. Check your Google Sheet - the email should appear! 🎉

---

## 📊 Managing Subscribers

### Viewing Subscribers
Simply open your Google Sheet to see all subscribers with their signup dates.

### Sending Newsletters
You have several options:

1. **Manual (Free)**: Export emails from the sheet, paste into your email client's BCC field
2. **Google Groups**: Create a Google Group and add subscribers for easy group emails
3. **Mail Merge**: Use Google Sheets add-ons like "Yet Another Mail Merge" for personalized emails

### Exporting Emails
1. In Google Sheets, select the Email column
2. Copy all emails (Ctrl/Cmd + C)
3. Paste wherever you need them

---

## 🔧 Troubleshooting

### "The script doesn't seem to work"
- Make sure you deployed as a **Web app** (not API executable)
- Ensure "Who has access" is set to **Anyone**
- Check browser console for errors (F12 → Console tab)

### "Emails aren't appearing in the sheet"
- Verify the Web app URL is correctly copied
- Try the test function in Apps Script (Run → testScript)
- Make sure your sheet is named "Sheet1" or update `SHEET_NAME` in the script

### "CORS errors in console"
- This is expected with `no-cors` mode. The request still works - check your sheet!

---

## 🔒 Privacy Notes

- Emails are stored only in YOUR Google Sheet
- No third parties have access to the data
- You control who can see the spreadsheet
- Subscribers can request removal by emailing you

---

## 📁 Files in This Folder

- `google-apps-script.js` - The script to paste into Google Apps Script
- `SETUP_INSTRUCTIONS.md` - This file

---

Happy emailing! 🚀
