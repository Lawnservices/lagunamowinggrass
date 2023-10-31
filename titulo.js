const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("You want an excellent garden, you are in the right place"); }, 6000);
});

myPromise.then(function(value) {
  document.getElementById("place").innerHTML = value;
  document.getElementById("llamar").innerHTML= "240-883-8479";
});