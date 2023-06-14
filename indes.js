let button = document.getElementById("btn");
let input = document.getElementById("input");
let ul = document.getElementById("ul");
let myleads = [];
// myleads=JSON.stringify(myleads)

// myleads= JSON.parse(myleads)
// myleads.push("senai")
// console.log(myleads)
let listitem= ""
let leadfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))


if(leadfromlocalstorage){
  myleads=leadfromlocalstorage
  renderlead()
}
button.addEventListener("click", function() {
  myleads.push(input.value);
  
  input.value = ""; 

  localStorage.setItem("myleads", JSON.stringify(myleads))
  renderlead()
});
function renderlead(){
    for (let i = 0; i < myleads.length; i++) {
        listitem += `<li> <a target="_blank "href=${myleads[i]}>` + myleads[i] +"</a></li>";
      
      }
      ul.innerHTML= listitem
      listitem= ""
      
}
 