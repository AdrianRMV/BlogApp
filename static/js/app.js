const mode = localStorage.getItem("mode") || "";
const toggleContainer = document.querySelector(".toggle-container");
const body = document.querySelector("body");

document.body.className = mode;

toggleContainer.addEventListener("click", () => {
    localStorage.setItem("mode", mode === "light" ? "" : "night");
    body.classList.toggle("light");
    
    toggleContainer.style.marginLeft = mode === "light" ? "20px" : "0";
});
