let button = document.getElementById("btn");
let input = document.getElementById("input");
let ul = document.getElementById("ul");
let myleads = [];
let allleads=[];
let click=0;
let deletee = document.getElementById("delete");
let tab= document.getElementById("tab")



tab.addEventListener("click", ()=>{
  myleads.push(window.location.href);

  localStorage.setItem("myleads", JSON.stringify(myleads));

  input.value = "";
  render(myleads);
}) 

deletee.addEventListener("dblclick", function(){
  
 
  
    localStorage.clear()
    myleads=[]
    render(myleads)

  
})
// myleads=JSON.stringify(myleads)

// myleads= JSON.parse(myleads)
// myleads.push("senai")
// console.log(myleads)
let listitem= ""
const leadfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))


if(leadfromlocalstorage){
  myleads=leadfromlocalstorage
  render(myleads)
}

function render(leads){
  for (let i = 0; i < leads.length; i++) {
      listitem += `<li> <a target="_blank "href=${leads[i]}>` + leads[i] +"</a></li>";
    
    }
    ul.innerHTML= listitem
    listitem= ""
    
}

button.addEventListener("click", function() {
  myleads.push(input.value);

  localStorage.setItem("myleads", JSON.stringify(myleads));

  input.value = "";
  render(myleads);
});

  
