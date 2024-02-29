
const inputBox = document.getElementById("input");
const inputBox2 = document.getElementById("input2");
const listContainer = document.getElementById("list-container");
const listContainer2 = document.getElementById("list-container2");

//To add personal tab
function add() {
    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const img = document.createElement("img");
        span.innerHTML = inputBox.value;
        li.appendChild(span);
        img.setAttribute('src', 'delet.png')
        li.appendChild(img);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();

}

//for personal tab checked & un-checked list
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        saveData();
    }

    //for reomve listed data
    else if (e.target.tagName === "IMG") {

        e.target.parentElement.remove();
        saveData();
    }
}, false);

// data save locally in personal tab 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

}
//Savedata show in list
showTask();

//Second Tab
//To add professional tab

function add2() {
    if (inputBox2.value === '') {
        alert("You must write something");
    }
    else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const img = document.createElement("img");
        span.innerHTML = inputBox2.value;
        li.appendChild(span);
        img.setAttribute('src', 'delet.png')
        li.appendChild(img);
        listContainer2.appendChild(li);
    }
    inputBox2.value = "";
    saveData2();

}

//for professional tab checked & un-checked list
listContainer2.addEventListener("click", function (e) {
    console.log(e)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        saveData2();
    }
    else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        console.log(e)
        saveData2();
    }
}, false);




//function for locallysave data in professional
function saveData2() {
    localStorage.setItem("data2", listContainer2.innerHTML);

}

function showTask2() {
    listContainer2.innerHTML = localStorage.getItem("data2");
}
//Savedata show in list
showTask2();

//move the tab button
const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".item");
const all_content2 = document.querySelectorAll(".search");

tabs.forEach((value, index) => {
    value.addEventListener('click', (e) => {
        tabs.forEach(item => {
            item.classList.remove('active')
        });
        value.classList.add('active');

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach((content, idx) => {

            if (index == idx) {
                content.classList.remove('hide')
                content.classList.add('show')
            } else {
                content.classList.remove('show')
                content.classList.add('hide')
            }
        })

        all_content2.forEach((value1, indx) => {

            if (index == indx) {
                value1.classList.remove('hide')
                value1.classList.add('show')
            } else {
                value1.classList.remove('show')
                value1.classList.add('hide')
            }
        })
    });
});
