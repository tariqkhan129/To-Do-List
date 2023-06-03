let input = document.getElementById('inputText');
let ul = document.getElementById("ul");


function myFunction() {

    if (input.value == "") {
        input.setAttribute("placeholder", "Please add some items to add")
    }
    else {
        // li create
        let li = document.createElement("li");
        li.setAttribute('class', 'arrangeList')

        // delete button 
        let deleteButton = document.createElement('button');
        let deleteIcon = document.createElement('i');
        deleteIcon.setAttribute("Class", "fa-solid fa-trash");

        // Delete Function 
        deleteButton.addEventListener('click', () => {
            ul.removeChild(li);
        });

        // Edit Button
        let editButton = document.createElement('button');
        let editIcon = document.createElement('i');
        editIcon.setAttribute("Class", "fa-solid fa-pen-to-square");

        // GET INPUT VALUE
        let input_text = document.createTextNode(input.value);

        // editButton Function
        editButton.addEventListener('click', () => {
            input.value = li.textContent;
            ul.removeChild(li);
        });
        //create a div
        let testDiv = document.createElement('div');


        // Css for Edit And Delete Icons
        editButton.style.marginRight = "10px";
        deleteButton.style.marginRight = "5px";

        // Css for item Section
        var ItemSection= document.getElementById("itemSection");
        ItemSection.style.backgroundColor ="#d7dbdb";
        ItemSection.style.marginTop ="30px";
        ItemSection.style.boxShadow ="2px 8px 20px";
   
    //  this is another way to do same work instead of creating text div
    //     li.appendChild(deleteButton)
    //     li.appendChild(editButton)


        // appendChild        
        testDiv.appendChild(deleteButton)
        testDiv.appendChild(editButton)
        ul.appendChild(li);
        li.appendChild(input_text);
        li.appendChild(testDiv);
        editButton.appendChild(editIcon);
        deleteButton.appendChild(deleteIcon);
        input.value = "";

        // INPUT PLACEHOLDER
        input.removeAttribute("placeholder")
    };
};
