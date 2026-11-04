const kopierKnap = document.getElementById("kopier-mail");

kopierKnap.addEventListener("click", function () {
    navigator.clipboard.writeText("signejkarlsen@gmail.com");
    kopierKnap.textContent = "Kopieret ✓";

    setTimeout(function () {
        kopierKnap.textContent = "Kopiér mail";
    }, 2000);
});