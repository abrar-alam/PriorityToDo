const add_btn = document.querySelector("button#add_task");
const form_data = document.querySelector("form#task-form");
const to_do_section = document.querySelector("section.to_dos");
// let element_to_create = null;
// let 

add_btn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(form_data.querySelector("#task_name_field").value);
    let li_to_create = document.createElement("li");
    let date_span = document.createElement("span");
    let priority_span = document.createElement("span");
    li_to_create.innerText = form_data.querySelector("#task_name_field").value;
    date_span.innerText = form_data.querySelector("#completionDate").value;
    date_span.className = "list_dates";
    li_to_create.append(date_span);
    to_do_section.querySelector("#tasks_to_do_list").append(li_to_create);
    
});
