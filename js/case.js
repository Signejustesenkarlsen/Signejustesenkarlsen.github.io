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


let galleri = "";

for (const billede of projekt.billeder) {
    galleri += `<img src="${billede}" alt="${projekt.titel}" class="case-billede">`;
}

caseBoks.innerHTML += `
    <h2>Billeder</h2>
    <div class="galleri">${galleri}</div>
`;

const lightbox = document.getElementById("lightbox");
const lightboxBillede = document.getElementById("lightbox-billede");

for (const billede of document.querySelectorAll(".case-billede")) {
    billede.addEventListener("click", function () {
        lightboxBillede.src = billede.src;
        lightbox.classList.add("vis");
    });
}

lightbox.addEventListener("click", function () {
    lightbox.classList.remove("vis");
});