"use strict";
const url = new URL(window.location.href);
const n = url.searchParams.get("n");
if (n === null || n === undefined) {
    document.getElementById("sequence").style.display = "block";
} else {
    document.getElementById("sequence").style.display = "none";
}

function redo() {
    window.location.href = "/";
}

const t = url.searchParams.get("t");
if (t === "3am" || t === "tech") {
    window.localStorage.setItem("searchingPieTheme", t);
    redo();
}
const theme = window.localStorage.getItem("searchingPieTheme", "tech");
if (theme === "3am" || theme === "tech") {
    if (theme === "3am") {
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = `url("background.png")`;
    } else if (theme === "tech") {
        document.body.style.backgroundColor = "var(--colorBackground)";
        document.body.style.backgroundImage = "none";
    }
}