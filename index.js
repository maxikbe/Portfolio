const langBtn = document.getElementById('language-change');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (langBtn) {
    langBtn.addEventListener('click', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            let path = window.location.pathname;
            
            // Clean the path: remove trailing slashes and get the last part
            let segments = path.split("/").filter(s => s.length > 0);
            let currentPage = segments.pop() || "index.html";
            let newPage = "";

            // 1. If we are on the English landing page (/en or /en.html)
            if (currentPage === "en" || currentPage === "en.html") {
                newPage = "index.html";
            } 
            // 2. If we are on the Czech landing page (/ or /index.html)
            else if (currentPage === "index.html" || currentPage === "index") {
                newPage = "en.html";
            } 
            // 3. Handle project sub-pages (e.g., TheShimmerUnity2D_en)
            else if (currentPage.includes("_en")) {
                // Go from English project back to Czech
                newPage = currentPage.replace("_en", "");
                if (!newPage.endsWith(".html")) newPage += ".html";
            } 
            // 4. Fallback: Go from Czech project to English
            else {
                newPage = currentPage.replace(".html", "") + "_en.html";
            }

            window.location.href = newPage;
        }, 300);
    });
}

const updateThemeButtonText = (theme, lang) => {
    if (lang === 'en') {
        themeToggle.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    } else {
        themeToggle.textContent = theme === 'light' ? 'Tmavý Režim' : 'Světlý Režim';
    }
};

const savedTheme = localStorage.getItem('theme') || 'dark';
const currentLang = htmlElement.lang;
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeButtonText(savedTheme === 'light' ? 'dark' : 'light', currentLang);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButtonText(currentTheme, currentLang);
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll('.project-grid img').forEach(img => {
    img.addEventListener('click', () => {
        if(modal) {
            modal.style.display = "block";
            modalImg.src = img.src;
        }
    });
});

if(modal) {
    modal.onclick = (e) => { if (e.target === modal || e.target === closeBtn) modal.style.display = "none"; };
}