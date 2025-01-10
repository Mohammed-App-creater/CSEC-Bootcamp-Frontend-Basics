const closeBtn = document.getElementById("close-btn");
const notePopUp = document.getElementById("note-popup");
const applyNote = document.getElementById("add-note-btn");
const noteInput = document.getElementById("note-input");
const noteList = document.getElementById("list");
const addbtn = document.getElementById("add-btn");
const emptyNote = document.getElementById("detective");
const detective = document.getElementById("detective");
const visibleImg = detective.querySelector("img:not(.hide)");
const hiddenImg = detective.querySelector("img.hide");
const mode = document.getElementById("mode");
const visibleIcon = mode.querySelector("svg:not(.hide)");
const hiddenIcon = mode.querySelector("svg.hide");
const checkbox = document.querySelectorAll(".checkbox");
const filter = document.getElementById("filter");

const toggleDetective = () => {
  if (list.children.length === 0) {
    detective.style.display = "flex";
  } else {
    detective.style.display = "none";
  }
};

toggleDetective();

closeBtn.addEventListener("click", () => {
  notePopUp.classList.add("hide");
});

applyNote.addEventListener("click", () => {
  const note = noteInput.value.trim();
  if (note) {
    const listItemHTML = `
          <li class="list-item">
            <button class="checkbox">✓</button>
            <p class="text">${note}</p>
            <div class="menu-group">
              <button class="list-edit-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736M8.67272 5.99106L11.0654 3.59837L11.0669 3.59695C11.3962 3.26759 11.5612 3.10261 11.7514 3.04082C11.9189 2.98639 12.0993 2.98639 12.2669 3.04082C12.4569 3.10257 12.6217 3.26735 12.9506 3.59625L14.4018 5.04738C14.7321 5.37769 14.8973 5.54292 14.9592 5.73337C15.0136 5.90088 15.0136 6.08133 14.9592 6.24885C14.8974 6.43916 14.7324 6.60414 14.4025 6.93398L14.4018 6.93468L12.0091 9.32736M8.67272 5.99106L12.0091 9.32736" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="list-delete-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z" stroke="#CDCDCD"/>
                  <path d="M14.625 3.75H3.375" stroke="#CDCDCD" stroke-linecap="round"/>
                  <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"/>
                  <path d="M10.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
                  <path d="M7.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </li>`;
    noteList.insertAdjacentHTML("beforeend", listItemHTML);
    noteInput.value = "";
    notePopUp.classList.add("hide");
    toggleDetective();
  }
});

addbtn.addEventListener("click", () => {
  notePopUp.classList.remove("hide");
  noteInput.focus();
});

const toggleMode = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
  visibleIcon.classList.toggle("hide");
  hiddenIcon.classList.toggle("hide");
  visibleImg.classList.toggle("hide");
  hiddenImg.classList.toggle("hide");
};

mode.addEventListener("click", toggleMode);

noteList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("checkbox")) {
    const listItem = target.closest(".list-item");
    if (listItem) {
      const textElement = listItem.querySelector(".text");
      textElement.classList.toggle("completed");
      target.classList.toggle("checked");
    }
  }
  if (target.closest(".list-delete-btn")) {
    const listItem = target.closest(".list-item");
    if (listItem) {
      listItem.remove();
      toggleDetective();
    }
  }
  if (target.closest(".list-edit-btn")) {
    const listItem = target.closest(".list-item");
    if (listItem) {
      const textElement = listItem.querySelector(".text");
      notePopUp.classList.remove("hide");
      noteInput.value = textElement.textContent;
      listItem.remove();
      noteInput.focus();
      if (newText !== null) {
        textElement.textContent = newText;
      }
    }
  }
});


filter.addEventListener("click", () =>{
  
});

// filter.addEventListener("change", () => {
//   const filterValue = filter.value; 
//   const listItems = noteList.querySelectorAll(".list-item"); 

//   listItems.forEach((item) => {
//     const isCompleted = item
//       .querySelector(".checkbox")
//       .classList.contains("checked");

//     if (filterValue === "All") {
//       item.style.display = "flex"; 
//     } else if (filterValue === "completed") {
//       item.style.display = isCompleted ? "flex" : "none";  
//     } else if (filterValue === "Incomplete") {
//       item.style.display = isCompleted ? "none" : "flex"; 
//     }
//   });
// });
