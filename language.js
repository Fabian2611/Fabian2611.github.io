const translations = {
    en: {
        heading: "Fabian2611's Homepage",
        heading_info: "About me",
        heading_projects: "Latest Projects",
        heading_contact: "Contact",

        text_introduction: "Well, hello there! It seems you have landed on my page. This is still under construction, so you won't see a lot of interesting stuff. Still, feel free to stay and have a look around!",
        text_info: "I am a student from Germany, programming professionally. I'm always excited about new coding projects to work on and ocassionaly upload them <a href='https://github.com/Fabian2611/'>here on Github</a>.",
        text_contact_0: 'You can reach me best via Discord at @FabianButHere, or by mail at <a href="mailto:fabian.schwarz2010@gmail.com">fabian.schwarz2010@gmail.com</a>.',
        text_contact_1: 'Other Socials can be found at <a href="https://linktr.ee/halfheartde">linktr.ee/halfheartde</a>.',
        text_footer: "Made with ❤️ by Fabian2611"
    },
    de: {
        heading: "Fabian2611s Homepage",
        heading_info: "Über mich",
        heading_projects: "Aktuelle Projekte",
        heading_contact: "Kontakt",

        text_introduction: "Hallo! Scheinbar bist du auf meiner Seite gelandet. Diese ist noch im Aufbau, also wirst du hier nicht viel Interessantes finden. Trotzdem, fühl dich frei, ein wenig herumzustöbern!",
        text_info: "Ich bin ein Student aus Deutschland und professioneller Softwareentwickler. Ich bin immer auf der Suche nach neuen Projekten, an denen ich arbeiten kann, und lade sie manchmal <a href='https://github.com/Fabian2611/'>hier auf Github</a> hoch.",
        text_contact_0: 'Am besten erreichst du mich über Discord an @FabianButHere, oder per Email an <a href="mailto:fabian.schwarz2010@gmail.com">fabian.schwarz2010@gmail.com</a>.',
        text_contact_1: 'Andere Sozialen Medien gibt es auf <a href="https://linktr.ee/halfheartde">linktr.ee/halfheartde</a>.',
        text_footer: "Mit ❤️ von Fabian2611 gemacht"
    }
};

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (key) {
            if (translations[language][key]){
                element.innerHTML = translations[language][key];
            }
            else if (translations["en"[key]]){
                element.innerHTML = translations["en"][key];
            }
            else {
                console.error(`Translation for key ${key} not found.`);
            }
        }
    });
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-de').addEventListener('click', () => switchLanguage('de'));
