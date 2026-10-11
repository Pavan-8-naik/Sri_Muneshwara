// ---- Images, banner and photo viewer ----
var IMG={
  "r1": "images/rock-1.jpg",
  "r2": "images/rock-2.jpg",
  "r3": "images/rock-3.jpg",
  "r4": "images/rock-4.jpg",
  "c1": "images/crusher-1.jpg",
  "c2": "images/crusher-2.jpg",
  "bg": "images/crusher-plant.jpg",
  "hero": "images/hero-truck.jpg"
};
document.querySelectorAll("img[data-k]").forEach(function(i){i.src=IMG[i.dataset.k]});
document.addEventListener("click",function(e){var lb=document.getElementById("lb");if(e.target.closest(".gal img")){lb.firstChild.src=e.target.src;lb.classList.add("on")}else if(e.target.closest("#lb")){lb.classList.remove("on")}});

// ---- Phone number, language switch and page navigation ----

// Replace with your real number: country code + number, no + or spaces
var PHONE="918088361379";
var DISPLAY="+91 80883 61379";
var base="https://wa.me/"+PHONE;
var p=document.getElementById("phoneTxt");p.textContent=DISPLAY;p.href="tel:+"+PHONE;
document.getElementById("hdrCall").href="tel:+"+PHONE;
document.querySelectorAll(".telbtn").forEach(function(a){a.href="tel:+"+PHONE});
var lang="en";
try{lang=localStorage.getItem("lang")||"en"}catch(e){}
function setLang(l){
  lang=l;try{localStorage.setItem("lang",l)}catch(e){}
  document.documentElement.lang=l;
  document.querySelectorAll("[data-t]").forEach(function(e){if(!e.dataset.en)e.dataset.en=e.innerHTML;e.innerHTML=(l==="kn"&&KN[e.dataset.t])?KN[e.dataset.t]:e.dataset.en});
  document.querySelectorAll("[data-tp]").forEach(function(e){if(!e.dataset.en)e.dataset.en=e.placeholder;e.placeholder=(l==="kn"&&KN[e.dataset.tp])?KN[e.dataset.tp]:e.dataset.en});
  document.getElementById("lang").textContent=l==="kn"?"English":"ಕನ್ನಡ";
  var m=l==="kn"?"ನಮಸ್ಕಾರ ಶ್ರೀ ಮುನೇಶ್ವರ ಗ್ರೂಪ್, ನನಗೆ ಬೆಲೆ ತಿಳಿಯಬೇಕು.":"Hello Sri Muneshwara Group, I would like to know the price.";
  document.getElementById("heroWa").href=base+"?text="+encodeURIComponent(m);
}
document.getElementById("lang").onclick=function(){setLang(lang==="kn"?"en":"kn")};
function route(){
  var id=(location.hash||"#home").slice(1);
  if(!document.getElementById(id)||!document.getElementById(id).classList.contains("page"))id="home";
  document.querySelectorAll(".page").forEach(function(e){e.classList.toggle("active",e.id===id)});
  document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+((id==="rock"||id==="crusher")?"materials":id))});
  document.body.classList.toggle("onhome",id==="home");
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);route();setLang(lang);
