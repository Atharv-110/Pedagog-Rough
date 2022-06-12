let profile_btn = document.getElementById("profile-btn");
let account_btn = document.getElementById("account-btn");

let profile_div = document.querySelector('.profile-container');
let account_div = document.querySelector('.account-container');

account_btn.addEventListener('click', () =>{
       profile_div.style.display = 'none'; 
       account_div.style.display = 'block'; 
       account_btn.style.backgroundColor = "#4A3FC8";
       account_btn.style.color = "#fff";
       profile_btn.style.backgroundColor= "#fff";
       profile_btn.style.color= "#4A3FC8";
});
profile_btn.addEventListener('click', () =>{
       account_div.style.display = 'none';
       profile_div.style.display = 'block'; 
        profile_btn.style.backgroundColor = "#4A3FC8";
       profile_btn.style.color = "#fff";
       account_btn.style.backgroundColor= "#fff";
       account_btn.style.color= "#4A3FC8";
});
