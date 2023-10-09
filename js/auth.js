//https://www.movable-type.co.uk/scripts/sha1.html
var expirationDays = 200;
var users = [
 'cbf8221492fadd4bfd7cd49c79edca21c53e8375',
 'ab0b2d3131715348e93e811998226e46a5adbda3'
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