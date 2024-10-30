// No need for english translations, as the site is in english by default
const translations = {
    de: {
        heading: "Fabian2611s Homepage",
        heading_info: "Über mich",
        heading_projects: "Aktuelle Projekte",
        heading_contact: "Kontakt",

        text_introduction: "Hallo! Scheinbar bist du auf meiner Seite gelandet. Diese ist noch im Aufbau, also wirst du hier nicht viel Interessantes finden. Trotzdem, fühl dich frei, ein wenig herumzustöbern!",
        text_info: "Ich bin ein Student aus Deutschland und professioneller Softwareentwickler. Ich bin immer auf der Suche nach neuen Projekten, an denen ich arbeiten kann, und lade sie manchmal <a href='https://github.com/Fabian2611/'>hier auf Github</a> hoch.",
        text_info_1: "Ich war schon immer an Programmierung interessiert und habe mit 9 Jahren angefangen, mir selbst Python beizubringen. Programmieren ist mein größtes Hobby, aber ich spiele auch gerne Instrumente und mache Musik.",
        text_social_0: "Hier kannst du mich finden:",
        text_contact_0: 'Am besten erreichst du mich über Discord an @FabianButHere, oder per Email an <a href="mailto:fabian.schwarz2010@gmail.com">fabian.schwarz2010@gmail.com</a>.',
        text_footer: "Mit ❤️ von Fabian2611"
    }
};

var default_translation = {

}

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (key) {
            if (!default_translation[key]){
                default_translation[key] = element.innerHTML;
            }
            if (language === "en") {
                element.innerHTML = default_translation[key];
            }
            else if (translations[language][key]){
                element.innerHTML = translations[language][key];
            }
        }
    });
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-de').addEventListener('click', () => switchLanguage('de'));
