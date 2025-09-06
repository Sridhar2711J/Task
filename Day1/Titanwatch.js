const menBtn = document.getElementById("men-btn");
const womenBtn = document.getElementById("women-btn");
const men = document.getElementById("men");
const women = document.getElementById("women");

const login = document.getElementById("login");
const main  = document.getElementById("main-contaniner");
const Account = document.getElementById("Account");
const Home = document.getElementById("Home");

const UserId = document.getElementById("user-id");
const UserPassword = document.getElementById("user-password");
const Msg = document.getElementById("msg");



const ShowPassword = document.getElementById("show-password");

const WishList = document.getElementById("wishlist");
const NonWishList = document.getElementById("non-wishlist");

function manchage(){
   if(men.style.display == "flex"){
      men.style.display = "flex"
   }
   else{
        men.style.display = "flex"
        women.style.display = "none"
   }
}

function womenchage(){
   if(women.style.display == "none"){
      women.style.display = "flex"
      men.style.display = "none"
   }
   else{
        women.style.display = "flex"
   }
}

function pass(){
     if(ShowPassword.value == "on"){
      UserPassword.type = "text"
      ShowPassword.value = "off"
     }else{
      UserPassword.type = "password"
      ShowPassword.value = "on"
     }    
}


function Login(){
 
   if(UserId.value != "" && UserPassword.value != ""){
      login.style.display = "none"
      main.style.display = "block"
      Home.style.display = "none"
      Account.style.display = 'block'
   }
   else{
      Msg.innerHTML = "Pls Enter Your UserId & Password"
   }
  
}

function MainPage(){
      login.style.display = "none"
      main.style.display = "block"
      Home.style.display = "none"
      Account.style.display = 'block'
}

function logPage(){
      login.style.display = "flex"
      main.style.display = "none"
      Home.style.display = "block"
      Account.style.display = 'none'
}

function heart(){
    WishList.style.display = "block"  
}

function nonheart(){
    WishList.style.display = "none"
}