function todoList(todos) {
  // Write your code here...
  let parentContent = document.getElementById("content");
  let fieldsetEl = document.createElement("fieldset");
  let legendEl = document.createElement("legend");
  legendEl.innerText = "To do list";
  fieldsetEl.appendChild(legendEl);
  todos.forEach((element) => {
    let todoItemDiv = document.createElement("div");
    todoItemDiv.innerHTML = `<input type="checkbox" id="${element.todo}" name="${element.todo}"> <label for="${element.todo}">${element.todo}</label>`;
    fieldsetEl.appendChild(todoItemDiv);
  });
  parentContent.appendChild(fieldsetEl);
  // let inputElements = document.querySelectorAll("input");

  parentContent.addEventListener("click", (event) => {
    const isLabelTag = event.target.tagName === "LABEL";
    const isInputTag = event.target.tagName === "INPUT";
    if (isInputTag) {
      const isChecked = event.target.checked === true;
      if (isChecked) {
        event.target.nextElementSibling.style.textDecoration = "line-through";
      } else {
        event.target.nextElementSibling.style.textDecoration = "none";
      }
    } else if (isLabelTag) {
      const isDoneLabel = event.target.style.textDecoration === "line-through";
      if (!isDoneLabel) {
        event.target.style.textDecoration = "line-through";
      } else if (isDoneLabel) {
        event.target.style.textDecoration = "none";
      }
    }

    // else if (isInputTag) {
    //   console.log(event.target.checked);
    //   const isChecked = event.target.checked === "true";
    //   if (!isChecked) {
    //     event.target.checked = "true";
    //     // console.dir(event.target.nextElementSibling);
    //     event.target.nextElementSibling.style.textDecoration = "line-through";
    //   } else if (isChecked) {
    //     event.target.checked = "false";
    //     event.target.nextElementSibling.style.textDecoration = "none";
    //   }
    // }
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
