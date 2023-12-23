document.addEventListener("DOMContentLoaded", function() {
    setInterval(toggleLights, 800);
});

function toggleLights() {
    const lights = document.querySelectorAll('.lights');
    lights.forEach(light => {
        light.classList.toggle('lights-on');
    });
}
