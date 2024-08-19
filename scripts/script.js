document.addEventListener("DOMContentLoaded", function() {
    const text1 = document.getElementById('welcomeText1');
    const text2 = document.getElementById('welcomeText2');

    // Función para mostrar y ocultar el texto
    function toggleText() {
        setTimeout(() => {
            text1.style.opacity = 1;
            text2.style.opacity = 1;
        }, 500); // Aparece después de 1 segundo

        setTimeout(() => {
            text1.style.opacity = 0;
            text2.style.opacity = 0;
        }, 3000); // Desaparece después de 5 segundos
    }

    // Llama a la función cuando la página ha cargado
    toggleText();

    // Repite el proceso indefinidamente
    setInterval(toggleText, 5000); // Intervalo de 7 segundos para repetir
});
