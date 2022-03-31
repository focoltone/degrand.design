//https://www.movable-type.co.uk/scripts/sha1.html
var expirationDays = 3;
var users = [
  '35c6655c3f459a3932fc59fc059d2b241105dc15', 
  'ab0b2d3131715348e93e811998226e46a5adbda3', 
  'b5e06cc181f17e1859aec2d4c9ad0867479e39d6', 
  'f28340c94aa1d5568867c374a12aa7d86f778a7f',
  '7968979b63f30aff931148c94aa09a11615d5388',
  '3d22df945c183b681ef6dd154afe50d09e8c0a6d',


  ];

function setCookie(user, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = user + "=" + value + ";" + expires + ";path=/";
}

function getCookie(user) {
  let name = user + "=";
  let spli = document.cookie.split(';');
  for(var j = 0; j < spli.length; j++) {
    let char = spli[j];
    while (char.charAt(0) == ' ') {
      char = char.substring(1);
    }
    if (char.indexOf(name) == 0) {
      return char.substring(name.length, char.length);
    }
  }  
}

function checkCookie() {
  var user = getCookie("user");
  if(!user) {
    window.location = '/login.html';
  } 
}

function login () {
  while(!getCookie("user")) {
    var user = prompt("Please enter your password:", "");
    //set cookie
    if (user != "" && user != null && users.includes(Sha1.hash(user))) {
      setCookie("user", Sha1.hash(user), expirationDays);
    }
  }
  window.location = '/';
}