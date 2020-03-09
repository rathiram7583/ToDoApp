var activeList=document.querySelector('ul');
var completedList=document.querySelector('ul:last-of-type');
var newTask=document.querySelector('[name="new-task"]');



var form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    activeList.innerHTML +=`
    <li>
    <input type="checkbox">
    `+newTask.value+`
    </li>`;

});


