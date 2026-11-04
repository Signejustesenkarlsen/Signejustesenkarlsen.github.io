const boks = document.getElementById("projekter");

for (const projekt of projekter){
    boks.innerHTML+=`
    <article class="projekt">
    <img src="${projekt.billeder[0]}" alt="${projekt.titel}" class="projekt-billede">
    <h2>${projekt.titel}</h2>
    <p>${projekt.beskrivelse}</p>
    <a href="projekt.html?id=${projekt.id}">Se projektet</a>
</article>
    `;
}