"use strict";
const url = new URL(window.location.href);
const n = url.searchParams.get("n");
if (n === null || n === undefined || n === "" || typeof(n) === "string") {
    //add code here
}