import html2pdf from 'html2pdf.js';

export const generatePDF = () => {
    // Select the main content to be included in the PDF
    // Exclude elements that shouldn't be printed (like VideoBackground, CustomCursor)
    const element = document.querySelector('App') || document.body;
    
    // We can target specific elements instead if needed, to build a cleaner PDF
    // For now, let's grab the main structure
    const clone = document.createElement('div');
    
    // Helper to add sections we care about
    const addSection = (selector) => {
        const el = document.querySelector(selector);
        if (el) clone.appendChild(el.cloneNode(true));
    }
    
    // Add specifically Sections that make up the "resume" profile
    addSection('#hero');
    addSection('#about');
    addSection('#experience');
    addSection('#education');
    addSection('#certifications');
    
    // Style adjustments for the PDF specifically
    clone.style.background = '#0d0d0d'; // Set a dark background matching the theme
    clone.style.color = '#fff';
    clone.style.width = '800px'; // Give it a fixed width for consistent rendering A4 (approx 800px width is better than 1200px)
    clone.style.padding = '20px';
    clone.style.fontFamily = 'Inter, sans-serif';

    // Inject a <style> tag to override bad cinematic CSS and force simple block rendering
    const style = document.createElement('style');
    style.innerHTML = `
        * { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; visibility: visible !important; filter: none !important; }
        #hero, #about, #experience, #education, #certifications { display: block !important; margin-bottom: 30px !important; padding: 20px !important; border-bottom: 1px solid #333; }
        .hero-bg, .custom-cursor, .orb-1, .orb-2, .orb-3, .netflix-vignette { display: none !important; }
        h1, h2, h3 { color: #fff !important; margin-bottom: 15px !important; }
        p, li, span { color: #ccc !important; line-height: 1.5 !important; font-size: 14px !important; }
        .grid, .flex { display: block !important; }
        .experience-item, .education-item, .cert-card { margin-bottom: 20px !important; }
        .btn, button { display: none !important; }
    `;
    clone.appendChild(style);
    
    // Clean up interactive elements from clone
    const buttons = clone.querySelectorAll('.btn, button, nav, .custom-cursor, .chatbot-container, .scroll-progress');
    buttons.forEach(b => b.remove());

    const opt = {
        margin:       [10, 10, 10, 10],
        filename:     'Argha_Mukherjee_Profile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#0d0d0d' }, // Dark background
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().set(opt).from(clone).save();
};
