let profile_btn = document.getElementById("profile-btn");
let account_btn = document.getElementById("account-btn");

let profile_div = document.querySelector('.profile-container');
let account_div = document.querySelector('.account-container');

account_btn.addEventListener('click', () =>{
       profile_div.style.display = 'none'; 
       account_div.style.display = 'block'; 
});
profile_btn.addEventListener('click', () =>{
       account_div.style.display = 'none';
       profile_div.style.display = 'block'; 
});