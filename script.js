async function loadTranslations(language) {
    const response = await fetch("translations.json");
    const translations = await response.json();
    return translations[language];
}
async function changeLanguage() {
    const language = document.getElementById("language").value;
    const translations = await loadTranslations(language);
    document.querySelector(".h1").innerText = translations.title;

    document.querySelector(".maiin h2").innerText = translations.welcome_header;
    document.querySelector(".maiin .text").innerText = translations.welcome_text;
    document.querySelector(".hert1").innerText = translations.menu_description;
    document.querySelector(".hert").innerText = translations.cozy_place;
    document.querySelector(".hert2").innerText = translations.special_events;
    document.querySelector(".hert3").innerText = translations.event_description;
    document.querySelector(".lpow").innerText = translations.title;
    document.querySelector(".kinec:nth-child(2)").innerText = translations.footer_address;
    document.querySelector(".kinec:nth-child(3)").innerText = translations.footer_phone;

    document.getElementById("menu1").innerText = translations.home;
    document.getElementById("menu2").innerText = translations.menu;
    document.getElementById("menu3").innerText = translations.about;
}

// Додайте слухач для зміни мови
document.getElementById("language").addEventListener("change", changeLanguage);

// Ініціалізація початкової мови
changeLanguage();



