const translations = {
    en: {
        title: "Aurora Bot",
        subtitle: "Powerful, modern Discord bot to enhance your server",
        invite: "Invite Bot",
        tos: "Terms of Service",
        privacy: "Privacy Policy",

        "f1-title": "⚡ Fast Commands",
        "f1-text": "Lightning-fast response time",

        "f2-title": "🛡️ Moderation",
        "f2-text": "Keep your server safe",

        "f3-title": "🎵 Music",
        "f3-text": "High-quality audio",

        "f4-title": "⚙️ Customization",
        "f4-text": "Fully customizable"
    },

    pl: {
        title: "Aurora Bot",
        subtitle: "Nowoczesny bot Discord do ulepszania serwera",
        invite: "Dodaj bota",
        tos: "Regulamin",
        privacy: "Polityka prywatności",

        "f1-title": "⚡ Szybkie komendy",
        "f1-text": "Błyskawiczne działanie",

        "f2-title": "🛡️ Moderacja",
        "f2-text": "Zadbaj o bezpieczeństwo",

        "f3-title": "🎵 Muzyka",
        "f3-text": "Wysoka jakość audio",

        "f4-title": "⚙️ Personalizacja",
        "f4-text": "Pełna konfiguracja"
    }
};

// reszta BEZ zmian
function getLanguage() {
    return localStorage.getItem("lang") || (navigator.language.startsWith("pl") ? "pl" : "en");
}

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
}

function toggleLanguage() {
    const newLang = getLanguage() === "en" ? "pl" : "en";
    localStorage.setItem("lang", newLang);
    applyTranslations(newLang);
}

function applyTranslations(lang) {
    const t = translations[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");

        if (t[key]) {
            el.innerText = t[key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(getLanguage());
});
