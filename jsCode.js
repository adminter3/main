var kakan=new XMLHttpRequest();       kakan.open("GET","http://api.fredagskakan.se/veckanskaka",false);
kakan.send(null);

var r =JSON.parse(kakan.response);
var date=r.date;
var kaknamn=r.kaka;
var pic=r.pic;
        
var img = new Image();
img.src = pic
pic_.appendChild(img);

document.getElementById("date").innerHTML=date;
document.getElementById("kaka").innerHTML=kaknamn;
