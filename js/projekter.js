const boks = document.getElementById("projekter");

for (const projekt of projekter){
    boks.innerHTML+=`
    <article class="projekt">
        <h2>${projekt.titel}</h2>
        <p>${projekt.beskrivelse}</p>
        <a href="projekt.html?id=${projekt.id}">Se projektet</a>
    </article>
    `;
}