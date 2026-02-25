document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const code = btn.nextElementSibling.innerText;
        navigator.clipboard.writeText(code);
        btn.textContent = "コピー済み";
        setTimeout(() => btn.textContent = "コピー", 1500);
    });
});