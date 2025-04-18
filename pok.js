async function loadTranslations(language) {
    const response = await fetch("pok.json"); // Оновлено назву файлу
    const translations = await response.json();
    return translations[language];
}

async function changeLanguage() {
    const language = document.getElementById("language").value;
    const translations = await loadTranslations(language);

    document.querySelector(".h1").innerText = translations.title;
    document.getElementById("menu1").innerText = translations.home;
    document.getElementById("menu2").innerText = translations.menu;
    document.getElementById("menu3").innerText = translations.about;

    document.querySelector(".textr").innerText = translations.story_header;
    document.querySelector(".textr1").innerText = translations.story_header1;
    document.querySelector(".dosta").innerText = translations.delivery_header;

    document.querySelector(".lpow").innerText = translations.title;
    document.querySelector(".kinec:nth-child(2)").innerText = translations.footer_address;
    document.querySelector(".kinec:nth-child(3)").innerText = translations.footer_phone;
}

// Додайте слухач для зміни мови
document.getElementById("language").addEventListener("change", changeLanguage);

// Ініціалізація початкової мови
changeLanguage();

