const langBtn = document.getElementById('language-change');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (langBtn) {
    langBtn.addEventListener('click', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            let path = window.location.pathname;
            // Get the last part of the path and remove trailing slashes
            let currentPage = path.split("/").pop().replace(/\/$/, "") || "index.html";
            let newPage = "";

            // 1. Handle English landing page (matches "en" or "en.html")
            if (currentPage === "en.html" || currentPage === "en") {
                newPage = "index.html";
            } 
            // 2. Handle Czech landing page (matches "index", "index.html", or empty)
            else if (currentPage === "index.html" || currentPage === "index" || currentPage === "") {
                newPage = "en.html";
            } 
            // 3. Handle project sub-pages with _en
            else if (currentPage.includes("_en")) {
                newPage = currentPage.replace("_en", "");
                // Ensure it still ends in .html if the original didn't have it
                if (!newPage.endsWith(".html")) newPage += ".html";
            } 
            // 4. Fallback for Czech project pages
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