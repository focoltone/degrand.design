//https://www.movable-type.co.uk/scripts/sha1.html
var expirationDays = 200;
var users = [
 'd510f7e89c2d9044f3688e9db64937e800c38831',
 '3423719350add8f3b572083baed03b8c479b8375',
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