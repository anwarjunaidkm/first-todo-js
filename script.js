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
   li.innerText = kitchenData;
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
   
    


}
 //---------------..----- deleteee function---------------

function deleteItem(event){
    console.log(event.target.classList[0]);
     if(event.target.classList[0] === "fas"){
        let item = event.target.parentElement;
        item.remove();
        
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