function lavKort(projekt) {
    return `
        <article class="projekt">
            <img src="${projekt.billeder[0]}" alt="${projekt.titel}" class="projekt-billede">
            <h2>${projekt.titel}</h2>
            <p>${projekt.beskrivelse}</p>
            <a href="projekt.html?id=${projekt.id}">Se projektet</a>
        </article>
    `;
}

const senesteBoks = document.getElementById("seneste");
const nyeste = [...projekter].reverse().slice(0, 4);

for (const projekt of nyeste) {
    senesteBoks.innerHTML += lavKort(projekt);
}

const alleBoks = document.getElementById("projekter");

for (const projekt of projekter) {
    alleBoks.innerHTML += lavKort(projekt);
}