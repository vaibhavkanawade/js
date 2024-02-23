fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => ganarateCard(data, "data", console.log(data)))
    .catch((err) => {
        console.log(err, "error");
    })
function ganarateCard(list) {
    const createList = document.getElementById("list");
    list.forEach((val) => {
        const card = document.createElement("div");
        card.style = "border:2px solid black;width:200px;height:250px"

        const id = document.createElement("h1");
        id.innerText = val.id;

        const title = document.createElement("h3");
        title.innerText = val.title;
        // const input = document.createElement("input")
        // input.type="text";

        const completed = document.createElement("p");
        completed.innerText = val.completed ? "completed" : "incompleted";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = val.completed;

        checkbox.addEventListener('click', function () {
            if (this.checked) {
                title.style.textDecoration = 'line-through';
                completed.innerText = 'completed';

            } else {
                title.style.textDecoration = 'none';
                completed.innerText = 'incompleted';
            }
        });
        let editTitle = '';
        // const status = val.completed ? "complete":"incomplte";
        // status.innerText = val.status;
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.style = "background-color:blue;padding:5px;color:white";
        editBtn.addEventListener('click', function () {

            if (editBtn.innerText === "Edit") {
                const inputEdit = document.createElement("input");
                inputEdit.type = "text";
                inputEdit.value = val.title;
                card.insertBefore(inputEdit, title);
                editBtn.innerText = "save";

                editTitle = title;

            } else if (editBtn.innerText === "save") {
                editTitle.innerText =
                    card.querySelector('input[type="text"]').value;
                card.removeChild(card.querySelector('input[type="text"]'));
                editBtn.innerText = "Edit";
            }


        });



        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.style = "background-color:red;padding:5px;";
        deleteBtn.addEventListener("click", function () {
            createList.removeChild(card);
        });



        card.append(id, title, completed, deleteBtn, editBtn);
        card.appendChild(checkbox);
        createList.appendChild(card);
    })
}