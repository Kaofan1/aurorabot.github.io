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
        "f4-text": "Fully customizable",

        "tos-1-title": "1. Introduction",
        "tos-1-text1": "These Terms of Service govern your use of the Aurora Discord Bot.",
        "tos-1-text2": "If you do not agree, you must not use the Bot.",
        "tos-2-title": "2. Eligibility",
        "tos-2-text": "By using Aurora, you confirm that:",
        "tos-2-li1": "You follow Discord Terms of Service",
        "tos-2-li2": "You have permission to add bots",
        "tos-2-li3": "You meet the minimum age requirement",
        "tos-3-title": "3. Use of the Bot",
        "tos-3-text1": "Aurora must be used in compliance with:",
        "tos-3-li1": "Discord Terms of Service",
        "tos-3-li2": "Discord Community Guidelines",
        "tos-3-li3": "These Terms",
        "tos-3-text2": "You agree NOT to:",
        "tos-3-li4": "Harass users",
        "tos-3-li5": "Share illegal content",
        "tos-3-li6": "Exploit the bot",
        "tos-3-li7": "Bypass security",
        "tos-3-li8": "Spam or abuse",
        "tos-4-title": "4. Availability",
        "tos-4-text": "Aurora is provided as-is with no guarantees.",
        "tos-5-title": "5. Restrictions",
        "tos-5-li1": "No reverse engineering",
        "tos-5-li2": "No unauthorized access",
        "tos-5-li3": "No illegal usage",
        "tos-5-li4": "No abuse",
        "tos-5-text": "Violations may result in restrictions.",
        "tos-6-title": "6. Data Usage",
        "tos-6-text": "Aurora may process limited data.",
        "tos-6-text2": "See Privacy Policy for details.",
        "tos-7-title": "7. Limitation of Liability",
        "tos-7-text": "The developer is not responsible for damages.",
        "tos-8-title": "8. Changes to the Terms",
        "tos-8-text": "Terms may change at any time.",
        "tos-9-title": "9. Termination",
        "tos-9-text": "Access may be revoked if misuse is detected.",
        "tos-10-title": "10. Contact",
        "tos-10-text": "Contact via Discord."
    },

    pl: {
        title: "Aurora Bot",
        subtitle: "Nowoczesny bot Discord do ulepszania serwera",
        invite: "Dodaj bota",
        tos: "Warunki Korzystania z Usługi",
        privacy: "Polityka prywatności",

        "f1-title": "⚡ Szybkie komendy",
        "f1-text": "Błyskawiczne działanie",
        "f2-title": "🛡️ Moderacja",
        "f2-text": "Zadbaj o bezpieczeństwo",
        "f3-title": "🎵 Muzyka",
        "f3-text": "Wysoka jakość audio",
        "f4-title": "⚙️ Personalizacja",
        "f4-text": "Pełna konfiguracja",

        "tos-1-title": "1. Wprowadzenie",
        "tos-1-text1": "Niniejszy regulamin określa zasady korzystania z Aurora Bot.",
        "tos-1-text2": "Jeśli się nie zgadzasz, nie używaj bota.",
        "tos-2-title": "2. Uprawnienia",
        "tos-2-text": "Korzystając z Aurora, potwierdzasz że:",
        "tos-2-li1": "Przestrzegasz zasad Discord",
        "tos-2-li2": "Masz uprawnienia do dodawania botów",
        "tos-2-li3": "Spełniasz wymagany wiek",
        "tos-3-title": "3. Użycie bota",
        "tos-3-text1": "Bot musi być używany zgodnie z:",
        "tos-3-li1": "Regulaminem Discord",
        "tos-3-li2": "Zasadami społeczności",
        "tos-3-li3": "Tym regulaminem",
        "tos-3-text2": "Zabrania się:",
        "tos-3-li4": "Nękania użytkowników",
        "tos-3-li5": "Udostępniania nielegalnych treści",
        "tos-3-li6": "Wykorzystywania bota",
        "tos-3-li7": "Omijania zabezpieczeń",
        "tos-3-li8": "Spamowania",
        "tos-4-title": "4. Dostępność",
        "tos-4-text": "Bot działa bez gwarancji dostępności.",
        "tos-5-title": "5. Ograniczenia",
        "tos-5-li1": "Zakaz reverse engineering",
        "tos-5-li2": "Zakaz nieautoryzowanego dostępu",
        "tos-5-li3": "Zakaz nielegalnych działań",
        "tos-5-li4": "Zakaz nadużyć",
        "tos-5-text": "Naruszenia mogą skutkować blokadą.",
        "tos-6-title": "6. Dane",
        "tos-6-text": "Bot przetwarza ograniczone dane.",
        "tos-6-text2": "Zobacz politykę prywatności.",
        "tos-7-title": "7. Odpowiedzialność",
        "tos-7-text": "Twórca nie ponosi odpowiedzialności.",
        "tos-8-title": "8. Zmiany",
        "tos-8-text": "Regulamin może się zmieniać.",
        "tos-9-title": "9. Zakończenie",
        "tos-9-text": "Dostęp może zostać cofnięty.",
        "tos-10-title": "10. Kontakt",
        "tos-10-text": "Kontakt przez Discord."
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
