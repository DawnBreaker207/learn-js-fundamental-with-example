const input = document.getElementById("input-text");
const submit = document.getElementById("submit-button");
const list = document.getElementById("list-show");
const clear = document.getElementById("clear-button");

submit.addEventListener("click", () => {
  const block = document.createElement("div");
  const content = document.createElement("p");
  const check = document.createElement("input");
  const clear = document.createElement("button");

  content.innerText = input.value;
  check.innerText = "";
  clear.innerText = "delete";

  check.setAttribute("type", "checkbox");

  block.classList = "block-style";
  content.classList = "text-style";
  check.classList = "checked-style";
  clear.classList = "button-style";

  if (input.value != "") {
    block.appendChild(check);
    block.appendChild(content);
    list.appendChild(block);
    block.appendChild(clear);
  }

  input.value = "";

  check.addEventListener("change", () => {
    if (check.checked) {
      content.style.textDecoration = "line-through";
      content.style.color = "black";
    } else {
      content.style.textDecoration = "";
      content.style.color = "red";
    }
  });
  clear.addEventListener("click", () => {
    block.remove();
  });
});

clear.addEventListener("click", () => {
  list.innerHTML = "";
});
