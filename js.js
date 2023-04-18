var Bool = true;
const Ob = document.getElementsByClassName("navbar-przyciski-SLIM")[0]

function PhoneOption(){
    if (Bool==true){
        Ob.style.display='flex';
        Bool=false;
    }else{
        Ob.style.display='none';
        Bool=true;
    }
}

const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  if (window.innerWidth>780){
    Ob.style.display='none';
    Bool=true;
  }
}

window.onresize = reportWindowSize;
