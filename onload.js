window.addEventListener("DOMContentLoaded", (event) => {
    const userLang = navigator.language || navigator.userLanguage;
    console.log("User language:", userLang);
    if (userLang.startsWith("de")) {
        switchLanguage("de");
    }
    else {
        switchLanguage("en");
    }
});