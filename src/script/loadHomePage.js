function loadHomePage() {
    //select content 
    const content = document.querySelector(".content")
    
    // header
    const header = document.createElement("header");
    header.textContent = "To-Do List"

    //left sidebar
    const leftSidebar = document.createElement("div");
    leftSidebar.className = "left";

    const leftHeading = document.createElement("div");
    leftHeading.className = "leftHeading";
    leftHeading.textContent = "Add a new item to your To-Do List:";
    
    const newButton = document.createElement("button");
    newButton.className = "newBtn";

    leftSidebar.appendChild(leftHeading);
    leftSidebar.appendChild(newButton);

    //right sidebar
    const rightSidebar = document.createElement("div");
    rightSidebar.className = "right";

    content.appendChild(header);
    content.appendChild(leftSidebar);
    content.appendChild(rightSidebar);
}

export { loadHomePage }