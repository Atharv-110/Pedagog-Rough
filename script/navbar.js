const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

// modeSwitch.addEventListener("click" , () =>{
// body.classList.toggle("dark");

// if(body.classList.contains("dark")){
//   modeText.innerText = "Light mode";
// }else{
//   modeText.innerText = "Dark mode";
// }
// });



function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");

  } else {
    body.classList.add('dark');
    localStorage.setItem("theme", "dark");

  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
}

modeSwitch.addEventListener('click', toggleDark);
