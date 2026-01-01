const scrollBtn = document.getElementById("scrollBtn");
const langBtn = document.getElementById('language-change');

const translations = {
    'cz': {
        themeBtnLight: "Světlý Režim",
        themeBtnDark: "Tmavý Režim",
        heroBtn: "Více o mně ↓",
        aboutTitle: "O mně",
        aboutP1: "Jsem začínající IT developer se zaměřením na hry a aplikace. Pracuji s HTML, CSS, JavaScriptem, Pythonem, Javou a Unity.",
        aboutP2: "Momentálně studuji na střední škole Creative Hill College ve Zlíně.",
        projectTitle: "Projekty",
        project1Title: "3D JavaScript Hra",
        project1Desc: "Jednoduchá 3D hra za pomocí frameworku Three.js.",
        project2Title: "The Shimmer - 2D Unity hra",
        project2Desc: "V průběhu tvorby...",
        learnMore: "Zjistit více -->",
        contactTitle: "Kontakt",
        emailLabel: "Váš email:",
        messageLabel: "Vaše zpráva:",
        sendBtn: "Odeslat",
        orSpan: "--------nebo--------",
        emailPlaceholder: "vas@email.cz",
        messagePlaceholder: "Zde napište zprávu..."
    },
    'en': {
        themeBtnLight: "Light Mode",
        themeBtnDark: "Dark Mode",
        heroBtn: "More about me ↓",
        aboutTitle: "About Me",
        aboutP1: "I am an aspiring IT developer focusing on games and applications. I work with HTML, CSS, JavaScript, Python, Java, and Unity.",
        aboutP2: "Currently studying at Creative Hill College in Zlín.",
        projectTitle: "Projects",
        project1Title: "3D JavaScript Game",
        project1Desc: "A simple 3D game built with the Three.js framework.",
        project2Title: "The Shimmer - 2D Unity Game",
        project2Desc: "Currently in development...",
        learnMore: "Learn more -->",
        contactTitle: "Contact",
        emailLabel: "Your email:",
        messageLabel: "Your message:",
        sendBtn: "Send",
        orSpan: "--------or--------",
        messagePlaceholder: "Write your message here...",
        emailPlaceholder: "your@email.com"
    }
};

let currentLang = localStorage.getItem('language') || 'cz';

function updateText() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const translation = translations[currentLang][key];

        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translation);
            } else {
                el.textContent = translation;
            }
        }
    });
    langBtn.textContent = currentLang.toUpperCase();
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        toggleBtn.textContent = translations[currentLang]['themeBtnLight'];
    } else {
        toggleBtn.textContent = translations[currentLang]['themeBtnDark'];
    }
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'cz' ? 'en' : 'cz';
    localStorage.setItem('language', currentLang);
    updateText();
});

const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
updateText();

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
toggleBtn.textContent = savedTheme === 'light' ? translations[currentLang]['themeBtnLight'] : translations[currentLang]['themeBtnDark'];

toggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  toggleBtn.textContent = newTheme === 'light'  ? translations[currentLang]['themeBtnLight'] : translations[currentLang]['themeBtnDark'];

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

