const translations = {
    en: {
        title: "Aurora Bot",
        subtitle: "Powerful, modern Discord bot to enhance your server",
        invite: "Invite Bot",
        tos: "Terms of Service",
        privacy: "Privacy Policy",
        home: "← Home",
        lastUpdated: "Last Updated: March 9, 2026",

        features: [
            ["⚡ Fast Commands", "Lightning-fast response time"],
            ["🛡️ Moderation", "Keep your server safe"],
            ["🎵 Music", "High-quality audio"],
            ["⚙️ Customization", "Fully customizable"]
        ]
    },

    pl: {
        title: "Aurora Bot",
        subtitle: "Nowoczesny bot Discord do ulepszania serwera",
        invite: "Dodaj bota",
        tos: "Regulamin",
        privacy: "Polityka prywatności",
        home: "← Strona główna",
        lastUpdated: "Ostatnia aktualizacja: 9 marca 2026",

        features: [
            ["⚡ Szybkie komendy", "Błyskawiczne działanie"],
            ["🛡️ Moderacja", "Zadbaj o bezpieczeństwo"],
            ["🎵 Muzyka", "Wysoka jakość audio"],
            ["⚙️ Personalizacja", "Pełna konfiguracja"]
        ]
    }
};

// 🔥 automatyczne wykrycie języka
function getLanguage() {
    return localStorage.getItem("lang") || (navigator.language.startsWith("pl") ? "pl" : "en");
}

// 🔥 zmiana języka
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
}

// 🔥 toggle
function toggleLanguage() {
    const newLang = getLanguage() === "en" ? "pl" : "en";
    setLanguage(newLang);
}

// 🔥 główna funkcja tłumaczenia
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

// 🔥 init
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(getLanguage());
});
