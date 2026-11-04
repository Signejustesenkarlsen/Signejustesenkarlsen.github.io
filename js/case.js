const id = new URLSearchParams(window.location.search).get("id");

const projekt = projekter.find(function (p) {
    return p.id === id;
});

const caseBoks = document.getElementById("case");

caseBoks.innerHTML = `
    <h1>${projekt.titel}</h1>
    <p>${projekt.beskrivelse}</p>
    <h2>Proces</h2>
    <p>${projekt.proces}</p>
`;

caseBoks.innerHTML += `<h2>Billeder</h2>`;

for (const billede of projekt.billeder) {
    caseBoks.innerHTML += `<a href="${billede}" target="_blank"><img src="${billede}" alt="${projekt.titel}" class="case-billede"></a>`;
}