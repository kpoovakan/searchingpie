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