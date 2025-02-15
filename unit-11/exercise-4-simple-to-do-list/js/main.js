// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const toDoList = document.querySelector(".component-simple-to-do-list");
  const toDoListForm = toDoList.querySelector("#to-do-list-form");
  const toDoListSubmit = toDoList.querySelector("#submit");

  let toDoListFormData = new FormData(toDoListForm, toDoListSubmit);

  function getFormData() {
    // using FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
    toDoListFormData = new FormData(toDoListForm, toDoListSubmit); // update with latest from data
    let toDoListLocalFormData = {};
    for (let [key, value] of toDoListFormData) {
      if (toDoListLocalFormData.hasOwnProperty(key)) {
        value += "," + toDoListLocalFormData[key];
      }
      toDoListLocalFormData[key] = value;
    }
    console.log(toDoListLocalFormData);
    return toDoListLocalFormData;
  }

  function renderToDoListContainer(toDoItem) {
    const itemsContainer = toDoList.querySelector("#to-do-items-container");

    if (toDoItem) {
      let outputHtml = `<tr class="to-do-item">
              <td>${toDoItem["title"]}</td>
              <td>${toDoItem["description"]}</td>
              <td>${toDoItem["priority"]}</td>
              <td><button class="btn btn-delete">Delete</button></td>
            </tr>`;
      itemsContainer.innerHTML += outputHtml;
    }
  }

  function init() {
    renderToDoListContainer();
    // submit event handler
    toDoListForm.addEventListener("submit", (event) => {
      console.log("submit");
      event.preventDefault();
      const newToDoItem = getFormData();
      renderToDoListContainer(newToDoItem);
    });

    // reset event handler
    toDoListForm.addEventListener("reset", (event) => {
      console.log("reset");
    });

    // delete event handler
    const toDoLists = toDoList.querySelector(
      ".component-simple-to-do-list__items"
    );
    toDoLists.addEventListener("click", (event) => {
      console.log("deleting item");
      event.target.closest("tr").remove(); // delete item/row from table
    });
  }

  window.addEventListener("load", (event) => {
    init();
  });
})();
