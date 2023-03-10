const counter = document.querySelector("#count") as HTMLButtonElement;
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
  i++;
  const span = counter?.querySelector("span");
  if (span) {
    span.innerText = i.toString();
  }
};

counter?.addEventListener("click", increment);
