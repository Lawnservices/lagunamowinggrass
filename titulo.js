const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("You want an excellent garden, you are in the right place"); }, 6000);
});

myPromise.then(function(value) {
  document.getElementById("place").innerHTML = value;
  document.getElementById("llamar").innerHTML= "240-883-8479";
});

document.getElementById('video').addEventListener('click',function(){
document.getElementById('video').style.display = 'none';
document.getElementById('videoss').style.display = 'block';
document.getElementById('videos').style.display = 'block';
document.getElementById('titulo').style.display = 'none';
 
});

document.getElementById('videoss').addEventListener('click',function(){
document.getElementById('videoss').style.display = 'none';
document.getElementById('video').style.display = 'block';
document.getElementById('videos').style.display = 'none';
document.getElementById('titulo').style.display = 'block';
});