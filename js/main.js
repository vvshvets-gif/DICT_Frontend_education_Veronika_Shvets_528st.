const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const storageKey = "theme";

function readTheme() {
    try {
        return localStorage.getItem(storageKey);
    } catch {
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem(storageKey, theme);
    } catch {
        return;
    }
}

function applyTheme(theme) {
    const isLight = theme === "light";

    if (isLight) {
        root.setAttribute("data-theme", "light");
    } else {
        root.removeAttribute("data-theme");
    }

    toggle.setAttribute("aria-pressed", String(isLight));
}

toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";

    applyTheme(next);
    saveTheme(next);
});

applyTheme(readTheme());
