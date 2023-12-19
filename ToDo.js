const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const option = dropdown.querySelectorAll('.option');
    const selected = dropdown.querySelector('.selected');
    select.addEventListener('click',() =>{
        select.classlist.toggle('select-clicked');
        caret.classlist.toggle('caret-rotate');
        menu.classlist.toggle('menu-open');
    })
    option.forEach(option =>{
        option.addEventListener('click',() => {
            selected.innerText = option.innerText;
            selected.classlist.remove('select-clicked');
            caret.classlist.remove('caret-rotate');
            menu.classList.remove('menu-open');
            option.forEach(option =>{
                option.classlist.remove('active');
            })
            option.classList.add('active');
        })
    })
})
const inputbox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please add the task!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.parentElement.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();
    




