const dragArea = document.querySelector(".drag-area");
const fileName = document.querySelector(".drag-msg");
const submitButton = document.querySelector("#submitButton");
const result = document.querySelector(".result");
console.log("running ...");
// file hovering over drag area
dragArea.addEventListener("dragover" , (event)=>{
    event.preventDefault();
    console.log("file is hovering over drag area");
    dragArea.classList.add("active");
});

// file out of drag area
dragArea.addEventListener("dragleave" , ()=>{
    dragArea.classList.remove("active");
});

// file dropped on drag area
dragArea.addEventListener("drop" , (event)=>{
    event.preventDefault();
    console.log("file is in drag area");
    const file = event.dataTransfer.files[0];
    fileName.innerText = file.name ;

    
});

submitButton.addEventListener("click",()=>{
    console.log("In it");
    result.style.visibility = "visible";
    result.style.height = "80vh";
})