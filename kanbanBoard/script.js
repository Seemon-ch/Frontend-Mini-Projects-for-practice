let tasksData={};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done =document.querySelector("#done");

let dragElement =null;


function addTask(title , desc ,column ){
    const div = document.createElement("div");

    div.classList.add("task");
    div.setAttribute("draggable" , "true");
    div.innerHTML = `
                    <h2>${title}</h2>
                    <p>${desc}</p>
                    <button class="delete-btn">Delete</button>`;

            column.appendChild(div);

            //drag event
            div.addEventListener("drag",(e)=>{
                dragElement=div;
            });

            // Delete event
            const deleteBtn = div.querySelector(".delete-btn");

            deleteBtn.addEventListener("click", () => {
                div.remove();
                updateTaskCount();
            });

    return div;
}

function updateTaskCount(){
        [todo , progress , done].forEach( col =>{
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        //working on local storage.
        tasksData[col.id] = Array.from(tasks).map(t =>{
            return {
                title : t.querySelector("h2").innerText,
                desc : t.querySelector("p").innerText

            };
        });

        // saving to local storage,
        localStorage.setItem("tasks" , JSON.stringify(tasksData));
        count.innerText = tasks.length ;

    });

}

if(localStorage.getItem("tasks")){
    const data = JSON.parse(localStorage.getItem("tasks"));

    for(const col in data){
        const column =document.querySelector(`#${col}`);
        data[col].forEach(task =>{
            addTask(task.title , task.des , column);
        });
    }

    updateTaskCount();
};

const tasks=document.querySelectorAll(".task");
tasks.forEach(task =>{
    task.addEventListener("drag" , (e)=>{
        dragElement = task;
    });


});


function addDragEventsOnColumn(column){
    column.addEventListener("dragenter" , (e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    });
    
    column.addEventListener("dragleave" , (e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    });
    column.addEventListener("dragover" , (e)=>{
        e.preventDefault();
    });
    column.addEventListener("drop" , (e)=>{
        e.preventDefault();
        column.appendChild(dragElement);
        column.classList.remove("hover-over");

        updateTaskCount();
    });

}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);


// modal related logic
const toggleModalButton = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");

const addTaskButton =document.querySelector("#add-new-task");


toggleModalButton.addEventListener("click" , ()=>{
    modal.classList.toggle("active");
});
modalBg.addEventListener("click" , ()=>{
    modal.classList.remove("active");
});

addTaskButton.addEventListener("click" , ()=>{

    // extracting their values
    const taskTitle =document.querySelector("#task-title-input").value;
    const taskDes = document.querySelector("#task-description-input").value;
    addTask(taskTitle , taskDes , todo);
    updateTaskCount();
    modal.classList.remove("active");

    document.querySelector("#task-title-input").value="";
    document.querySelector("#task-description-input").value="";
});
