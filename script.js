let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemList = document.getElementById("kitchen-item-list");
let dataArray=[];


//step two function---------

function additems()
{
    // e.preventDefault()
   let kitchenData = kitchenInput.value;
   //dom elemnt--------------
   let li = document.createElement('li');
   let spanEl =document.createElement('span');
   li.appendChild(spanEl);
   spanEl.innerText=kitchenData
  
   dataArray.push(kitchenData);
//    console.log(dataArray[1]);
   console.log(dataArray);
   kitchenItemList.appendChild(li);
   kitchenInput.value = '';
   kitchenInput.focus();
    // console.log(li);
    // ----------------------create trashhhhh------------------
    let trashBtn =document.createElement("i");
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn);
    console.log(trashBtn);

    //---------------crete editbtn----------
    let editbtn = document.createElement('i');
    editbtn.classList.add('fas','fa-edit');
    li.appendChild(editbtn);
    console.log(editbtn);

   
    


}
 //---------------..----- deleteee function---------------

function deleteItem(event){
    console.log(event.target.classList[1]);
     if(event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement;
        console.log(item);
        //animation for deleteeee
        item.classList.add("slideOut");
        item.addEventListener("transitionend",function(){
         console.log("animation completd");
          item.remove();
        });
         
        
     }

}
////////////////edit item--------fun-----
function editItem(event){
   console.log(event.target.classList[1]);
   if(event.target.classList[1] ==="fa-edit"){
      let editedValue =prompt("enter update");
      console.log(editedValue);
      let item=event.target.parentElement;
      let spanEl=item.querySelector('span');
      // console.log(spanEl);
      spanEl.innerText=editedValue;


      
   }

}





// ------------step one------------

// aadd evenmt listeeerrrrr
// addBtn.addEventListener('click',additems);
document.querySelector("form").addEventListener("submit", function(event){
      event.preventDefault()
    additems()
  });
  kitchenItemList.addEventListener('click',deleteItem);
  kitchenItemList.addEventListener('click',editItem);

