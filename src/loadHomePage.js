function loadHomePage() {
    //select content 
    const content = document.querySelector(".content")
    
    // header
    const header = document.createElement("header");

    //left sidebar
    const leftSidebar = document.createElement("div");
    leftSidebar.className = "left";

    //right sidebar
    const rightSidebar = document.createElement("div");
    rightSidebar.className = "right";

    content.appendChild(header);
    content.appendChild(leftSidebar);
    content.appendChild(rightSidebar);
}

export { loadHomePage }