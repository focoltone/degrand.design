//https://www.movable-type.co.uk/scripts/sha1.html
// var expirationDays = 3;
// var users = [
//   '576e1f9012b3a89d027020e77e3055f84c4a9f85',
// ];

// var setCookie = function(user, value, days) {
//   const date = new Date();
//   date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//   var expires = "expires="+date.toUTCString();
//   document.cookie = user + "=" + value + ";" + expires + ";path=/";
// }

// var getCookie = function(user) {
//   let name = user + "=";
//   let spli = document.cookie.split(';');
//   for(var j = 0; j < spli.length; j++) {
//     let char = spli[j];
//     while (char.charAt(0) == ' ') {
//       char = char.substring(1);
//     }
//     if (char.indexOf(name) == 0) {
//       return char.substring(name.length, char.length);
//     }
//   }  
// }

// var checkCookie = function() {
//   var user = getCookie("user");  
//   if(!user) {
//     window.location = './login.html';
//   } 
// }

// var login = function() {
//   //take input from user
//   var user = prompt("Please enter your password:", "");
//   //set cookie
//   if (user != "" && user != null && users.includes(Sha1.hash(user)) {
//     setCookie("user", Sha1.hash(user), expirationDays);
//   }
// }

console.log('hello world!');