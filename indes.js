let button = document.getElementById("btn");
let input = document.getElementById("input");
let ul = document.getElementById("ul");
let myleads = [];
// myleads=JSON.stringify(myleads)

// myleads= JSON.parse(myleads)
// myleads.push("senai")
// console.log(myleads)
let listitem= ""
button.addEventListener("click", function() {
  myleads.push(input.value);
  
  input.value = ""; 

  localStorage.setItem("myleads", JSON.stringify(myleads))
  renderlead()
});
let leadfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))
console.log(leadfromlocalstorage)
function renderlead(){
    for (let i = 0; i < leadfromlocalstorage.length; i++) {
        listitem += `<li> <a target="_blank "href=${leadfromlocalstorage[i]}>` + leadfromlocalstorage[i] +"</a></li>";
      
      }
      ul.innerHTML= listitem
      listitem= ""
      
}
 