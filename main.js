menuListArray = ["Pizza Vegetariana",
                 "Pizza de frango",
                 "Pizza portuguesa",
                 "Pizza quatro queijos",
                 "Pizza calabresa",
                 "Pizza extravegana"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;


}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}