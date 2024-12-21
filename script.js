
// Defining the input elements
let employeeArray = [];
let index = 0;
const addBtn = document.getElementById("addEmployeeButton")

document.getElementById("failure").style.display = "none";
document.getElementById("success").style.display = "none";

const addEmployee = () =>{
    return new Promise((Resolve, Reject) =>{
        var id = employeeArray.length+1;
        var name = document.getElementById("inputName").value;
        var profession = document.getElementById("inputProfession").value;
        var age = document.getElementById("inputAge").value;
        
        if(name=="" || profession=="" || age==""){
            Reject("Rejected");
        }
        else{
            let employeeEntry = {Id:id , Name:name , Profession: profession , Age:age};
            employeeArray.push(employeeEntry);
            Resolve(employeeArray);
        } 
    }); 
}

const displayList = (arr) =>{
    console.log(employeeArray.length);
    let list = document.getElementById("list");
    let li = document.createElement('li');
    li.setAttribute("class","employeeAddedDiv");
    li.setAttribute("id",`${arr.length}`);
    li.innerHTML = `<div class="employeeInfoDiv">
                        <p class="Eid">${arr.length}</p>
                        <p class="Ename">Name : ${arr[arr.length-1].Name}</p>
                        <p class="Eprofession">Profession : ${arr[arr.length-1].Profession} </p>
                        <p class="Eage">Age : ${arr[arr.length-1].Age} </p>
                    </div>
                    <button class="deleteEmployeeButton" onclick="remove(${arr.length})">Delete User</button>`
    list.appendChild(li);
}

const remove = (id) => {
    let li = document.getElementById(id);
    li.remove();
    removeFromArray(employeeArray, id-1);
    let list = document.getElementById("list");
    if(list.innerHTML===""){
        document.getElementById("placeholder").style.display = "block";
    }
}

const removeFromArray = (arr,index) => {
    arr.splice(index-1,1);
    return arr;
}


let success = document.getElementById("success"); 

addBtn.addEventListener('click', function(employeeArray){
    addEmployee(employeeArray).then(res=>{
        document.getElementById("success").style.display = "block";
        document.getElementById("failure").style.display = "none";
        document.getElementById("placeholder").style.display = "none";
        console.log(res);
        displayList(res);
    }).catch(err => {
        document.getElementById("success").style.display = "none";
        document.getElementById("failure").style.display = "block";
        console.log(err);
        console.log(employeeArray);
    });
});


