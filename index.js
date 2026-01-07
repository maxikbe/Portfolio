const langBtn = document.getElementById('language-change');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (langBtn) {
    langBtn.addEventListener('click', () => {
        let currentPage = window.location.pathname.split("/").pop() || "index.html";
        let newPage = "";

        if (currentPage.includes("_en.html")) {
            newPage = currentPage.replace("_en.html", ".html");
        } else if (currentPage === "en.html") {
            newPage = "index.html";
        } else if (currentPage === "index.html" || currentPage === "") {
            newPage = "en.html";
        } else {
            newPage = currentPage.replace(".html", "_en.html");
        }
        window.location.href = newPage;
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