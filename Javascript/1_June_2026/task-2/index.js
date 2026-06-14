const nameInput = document.getElementById("name-input");
const addBtn = document.getElementById("add-btn");
const resDiv = document.getElementById("filtered-div");
const diplayDiv = document.getElementById("display-div");
const filter = document.getElementById("filter-input");


addBtn.addEventListener("click", () => {
    let inp = nameInput.value;

    const new_element = document.createElement("p");
    new_element.innerHTML = inp;

    diplayDiv.appendChild(new_element);
    nameInput.value = "";
});

filter.addEventListener("input", () => {
    resDiv.innerHTML = "";

    const to_search = filter.value;
    let filtered = Array.from(diplayDiv.children).map(item => item.innerHTML).filter(item => (item.indexOf(to_search) != -1));

    for (let i = 0; i < filtered.length; i++) {
        const new_entry = document.createElement("p");
        new_entry.innerHTML = filtered[i];

        resDiv.appendChild(new_entry);
    }
});