/* myLi = document.querySelectorAll(".listItem");
list = document.querySelector(".mainList");
btn = document.querySelector(".addItem");

function toggle() {
    console.log(this);
    for (let i = 0; i < myLi.length; i++){
        console.log(myLi[i]);
        myLi[i].classList.toggle("newBg");
        myLi[i].classList.toggle("checked");
    }
}

[].forEach.call(myLi, (e)=>{
    console.log(e);
    e.addEventListener("click", toggle());
});

btn.onclick = function() {
    list.innerHTML += "<li class=\"listItem\"><span class=\"right15\">Item " + myLi.length + "</span> <span class=\"red\">&#x2716;</span></li>";
}; */