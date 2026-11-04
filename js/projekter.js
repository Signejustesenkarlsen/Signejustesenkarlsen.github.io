const projekter = [
    {   titel: "Syhjemmeside",
        beskrivelse: "En hjemmeside med syprojekter, lavet på programmeringskursus 1. semester",
        link: "#"
    },
    {
        titel: "Opskriftshjemmeside",
        beskrivelse: "En hjemmeside med mad- og kageopskrifter",
        link: "#"
    }
];

const boks = document.getElementById("projekter");

for (const projekt of projekter){
    boks.innerHTML+=`
    <article class="projekt">
        <h2>${projekt.titel}</h2>
        <p>${projekt.beskrivelse}</p>
        <a href="${projekt.link}">Se projektet</a>
    </article>
    `;
}