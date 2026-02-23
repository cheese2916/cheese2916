const itemsPerPage = 6;
let currentPage = 1;

const items = document.querySelectorAll(".item");
const pager = document.getElementById("pager");

// 表示切り替え
function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    items.forEach((item, index) => {
        item.style.display = (index >= start && index < end) ? "block" : "none";
    });

    const pageButtons = document.querySelectorAll(".page-btn");
    pageButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.disabled = false;
    });

    if (pageButtons[page - 1]) {
        pageButtons[page - 1].classList.add("active");
        pageButtons[page - 1].disabled = true; // 初期1ページ目も無効化
    }
}

function nextPage() {
    if (currentPage * itemsPerPage < items.length) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.classList.add("page-btn");

        btn.onclick = () => {
            currentPage = i;
            showPage(i);
        };

        pager.insertBefore(btn, pager.lastElementChild);
    }
}

// 初期化
createPageButtons();
showPage(currentPage);