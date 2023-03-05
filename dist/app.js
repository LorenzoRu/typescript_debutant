"use strict";
const counter = document.querySelector("#count");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = counter?.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
counter?.addEventListener("click", increment);
