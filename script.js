const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
    envelope.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    envelope.classList.remove("open");
});