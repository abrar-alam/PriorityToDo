const add_btn = document.querySelector("button#add_task");
const form_data = document.querySelector("form#task-form");
const to_do_section = document.querySelector("section.to_dos");
const to_do_ul = to_do_section.querySelector("ul");
// let element_to_create = null;
// let 

function return_priority(){
    if (document.getElementById('essential').checked) {
        return '&#128681;';
      }
    else if (document.getElementById('important').checked){
        return '&#128314;';
    }
    return '&#127793;';
};



add_btn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(form_data.querySelector("#task_name_field").value);
    let li_to_create = document.createElement("li");
    let date_span = document.createElement("span");
    let priority_span = document.createElement("span");
    li_to_create.innerText = form_data.querySelector("#task_name_field").value;
    date_span.innerText = form_data.querySelector("#completionDate").value;
    date_span.className = "list_dates";
    priority_span.innerHTML = return_priority();
    btn_finished = document.createElement("button");
    btn_finished.className = 'finshedButton';
    btn_finished.innerText = 'finished';

    btn_remove = document.createElement("button");
    btn_remove.className = 'removeButton';
    btn_remove.innerText = 'remove';

    li_to_create.append(date_span);
    li_to_create.append(priority_span);
    li_to_create.append(btn_finished);
    li_to_create.append(btn_remove);
    to_do_section.querySelector("#tasks_to_do_list").prepend(li_to_create);

    let entry = {'section': 'to_dos', 'task_name':form_data.querySelector("#task_name_field").value,
                    'due_date':date_span.innerText, 'done': 'no',
                    'removed':'no', 'priority': priority_span.innerText};

    // set the local storage logic
    if (! localStorage.getItem("user_data")){
        

        console.log(entry);

        localStorage.setItem("user_data", JSON.stringify([entry]));
    }
    else {
        let user_data_arr = JSON.parse(localStorage.getItem("user_data"));
        user_data_arr.unshift(entry);
        localStorage.setItem("user_data", JSON.stringify(user_data_arr));
    }
    
});

to_do_ul.addEventListener("click", function(e){
    if (e.target.className ==='removeButton'){
        console.dir(e.target);
        e.target.parentElement.remove();
        //resume from here
    }
})
