var myInput = document.getElementById("input"),
    clearBtn = document.getElementById("clear"),
    createBtn = document.getElementById("create"),
    taskList = document.getElementById("list-zone");
    

clearBtn.onclick = function () {
    myInput.value = "";
}    
/*
createBtn.onclick = function() {

    let myElement = document.createElement("li"),

        myText = document.createTextNode(myInput.value);
        
    myElement.appendChild(myText);    
    if(myElement.textContent !=="") {
        
        // taskList.appendChild(myElement);
        taskList.insertBefore(myElement,taskList.firstChild);
        myInput.value = "";
    }
   

}
*/
myInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      createBtn.click();
    }
  });
  

var myBox = document.getElementById("box");

createBtn.onclick = function () {

    var mainElement = document.createElement("div"),

        myTask = document.createElement("p"),
        
        tools = document.createElement("div"),

        deleteBtn = document.createElement("span"),
        deleteText = document.createTextNode("X"),

        doneBtn = document.createElement("span"),
        doneText = document.createTextNode("Done");    

    taskText = document.createTextNode(myInput.value);
    myTask.appendChild(taskText); 
    myTask.classList.add("mission");
    
    

    if (myTask.textContent != "") {
        
        mainElement.classList.add("section");
        mainElement.appendChild(myTask);

        myBox.appendChild(mainElement); 
        myBox.insertBefore(mainElement ,myBox.firstChild);

        mainElement.appendChild(tools);

        tools.classList.add("mainSection");

        tools.appendChild(deleteBtn);

        deleteBtn.appendChild(deleteText);
        deleteBtn.classList.add("delt-btn" , "btn");

        tools.appendChild(doneBtn);

        doneBtn.appendChild(doneText);
        doneBtn.classList.add("done-btn" , "btn");


        myInput.value = "";

        doneBtn.onclick = function () {
            myTask.classList.add ("doneTask");
        }
        deleteBtn.onclick = function () {
            myBox.removeChild(mainElement); 
        }
    }
}

 




