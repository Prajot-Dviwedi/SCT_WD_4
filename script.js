let input_box = document.querySelector("#input-box")
let list_container = document.getElementById('lsit-container')

let btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    if(input_box.value === ""){
        document.querySelector("p").style.display = "block"
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input_box.value
        list_container.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input_box.value = ""
    save_data()
});

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        save_data()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data()
    }
})

function save_data(){
    localStorage.setItem("data" , list_container.innerHTML)
}
function show_task(){
    list_container.innerHTML = localStorage.getItem("data")
}
show_task()