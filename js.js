var Bool = true;
const Ob = document.getElementsByClassName("navbar-przyciski-SLIM")[0]
const variableToString = varObj => Object.keys(varObj)[0]

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


var A1_SB = new Array;
A1_SB[1] = "A1 Sportback";
A1_SB[2] = "105 100";
A1_SB[3] = "132-123g/km";
A1_SB[4] = "5,8 - 5,41/100";
A1_SB[5] = "81kw(110km)";
A1_SB[6] = "6 biegowa";
A1_SB[7] = "Advanced 30 TFSI";

var A3_SB = new Array;
A3_SB[1] = "A3 Sportback";
A3_SB[2] = "110 500";
A3_SB[3] = "136-125 g/km";
A3_SB[4] = "6.0 5.51/100km";
A3_SB[5] = "81kw(110km)";
A3_SB[6] = "6 biegowa";
A3_SB[7] = "30 TFSI";

var S3_SB = new Array;
S3_SB[1] = "S3 Sportback";
S3_SB[2] = "207 000";
S3_SB[3] = "188-183g/km";
S3_SB[4] = "8.3-8.01/100km";
S3_SB[5] = "228kw(310km)";
S3_SB[6] = "automatyczna S-tronic";
S3_SB[7] = "TFSI quattro";

var RS3_SB = new Array;
RS3_SB[1] = "RS3 Sportback";
RS3_SB[2] = "291 900";
RS3_SB[3] = "216-205g/km";
RS3_SB[4] = "9.5 - 9.0l/100km";
RS3_SB[5] = "294kw(400km)";
RS3_SB[6] = "automatyczna S-tronic";
RS3_SB[7] = "TFSI quattro";

var A4_AV = new Array;
A4_AV[1] = "A4 Avant";
A4_AV[2] = "163 200";
A4_AV[3] = "167-142g/km";
A4_AV[4] = "7.4-6.3l/100km";
A4_AV[5] = "110kw(150km)";
A4_AV[6] = "automatyczna S-tronic";
A4_AV[7] = "35 TFSI";

var S4_AV = new Array;
S4_AV[1] = "S4 Avant";
S4_AV[2] = "356 100";
S4_AV[3] = "197-188g/km";
S4_AV[4] = "7.5-7.2l/100km";
S4_AV[5] = "251kw(341km)";
S4_AV[6] = "automatyczna Tiptronic";
S4_AV[7] = "TDI quattro";

var RS4_AV = new Array;
RS4_AV[1] = "RS4 Avant";
RS4_AV[2] = "443 800";
RS4_AV[3] = "229-220g/km";
RS4_AV[4] = "10.1l-9.7l/km";
RS4_AV[5] = "331kw(450km)";
RS4_AV[6] = "automatyczna Tiptronic";
RS4_AV[7] = "TFSI quattro";

var A5_CO = new Array;
A5_CO[1] = "A5 Coupé";
A5_CO[2] = "228 600";
A5_CO[3] = "175-164 g/km";
A5_CO[4] = "7,7-7,3l/100km";
A5_CO[5] = "195kw(265km)";
A5_CO[6] = "automatyczna S-tronic";
A5_CO[7] = "S line 45 TFSI quattro";

var S5_CO = new Array;
S5_CO[1] = "S5 Coupé";
S5_CO[2] = "351 400";
S5_CO[3] = "191-183 g/km";
S5_CO[4] = "7,3-7,0 l/100km";
S5_CO[5] = "251kw(341km)";
S5_CO[6] = "automatyczna Tiptronic";
S5_CO[7] = "TDI quattro";

var RS5_CO = new Array;
RS5_CO[1] = "RS5 Coupé";
RS5_CO[2] = "443 100";
RS5_CO[3] = "223–213 g/km";
RS5_CO[4] = "9,8–9,4 l/100km";
RS5_CO[5] = "331kw(450km)";
RS5_CO[6] = "automatyczna Tiptronic";
RS5_CO[7] = "TFSI quattro";

var A6_AV = new Array;
A6_AV[1] = "A6 Avant";
A6_AV[2] = "272 200";
A6_AV[3] = "186–165 g/km";
A6_AV[4] = "8,2–7,3 l/100km";
A6_AV[5] = "195kw(265km)";
A6_AV[6] = "automatyczna S-tronic";
A6_AV[7] = "Sport 45 TFSI quattro";

var A7_SB = new Array;
A7_SB[1] = "A7 Sportback";
A7_SB[2] = "365 500";
A7_SB[3] = "204–181 g/km";
A7_SB[4] = "9,0–8,0 l/100km";
A7_SB[5] = "250kw(340km)";
A7_SB[6] = "automatyczna S-tronic";
A7_SB[7] = "55 TFSI quattro";

var RS7_SB_P = new Array;
RS7_SB_P[1] = "RS7 Sportback performance";
RS7_SB_P[2] = "672 100";
RS7_SB_P[3] = "284–273 g/km";
RS7_SB_P[4] = "12,5–12,0 l/100km";
RS7_SB_P[5] = "463kw(630km)";
RS7_SB_P[6] = "automatyczna Tiptronic";
RS7_SB_P[7] = "quattro";

var A8 = new Array;
A8[1] = "A8";
A8[2] = "552 400";
A8[3] = "274–259 g/km";
A8[4] = "12,1–11,4 l/100km";
A8[5] = "338kw(460km)";
A8[6] = "automatyczna Tiptronic";
A8[7] = "60 TFSI quattro";

var S8 = new Array;
S8[1] = "S8";
S8[2] = "647 600";
S8[3] = "266–259 g/km";
S8[4] = "11,7–11,4 l/100km";
S8[5] = "420kw(571km)";
S8[6] = "automatyczna Tiptronic";
S8[7] = "TFSI quattro";

var A_TT_CO = new Array;
A_TT_CO[1] = "Audi TT Coupé";
A_TT_CO[2] = "241 500";
A_TT_CO[3] = "185 - 179g/km";
A_TT_CO[4] = "8,2-7,9l/100km";
A_TT_CO[5] = "180kw(245km)";
A_TT_CO[6] = "automatyczna S-tronic";
A_TT_CO[7] = "45 TFSI quattro";

var Q2 = new Array;
Q2[1] = "Q2";
Q2[2] = "173 400";
Q2[3] = "178–165 g/km";
Q2[4] = "7,9–7,2 l/100km";
Q2[5] = "140kw(190km)";
Q2[6] = "automatyczna S-tronic";
Q2[7] = "S line 40 TFSI quattro";

var Q3 = new Array;
Q3[1] = "Q3";
Q3[2] = "214 800";
Q3[3] = "201–186 g/km";
Q3[4] = "8,8–8,2 l/100km";
Q3[5] = "180kw(245km)";
Q3[6] = "automatyczna Stronic";
Q3[7] = "S line 45 TFSI quattro";

var Q4_e = new Array;
Q4_e[1] = "Q4 e-tron";
Q4_e[2] = "244 200";
Q4_e[3] = "0–0 g/km";
Q4_e[4] = "20,2–17,2kWh/100km";
Q4_e[5] = "220 kW";
Q4_e[6] = "automatyczna S-tronic";
Q4_e[7] = "50 e-tron quattro";

var Q5 = new Array;
Q5[1] = "Q5";
Q5[2] = "249 700";
Q5[3] = "208–190 g/km";
Q5[4] = "9,1–8,4 l/100km";
Q5[5] = "195kw(265km)";
Q5[6] = "automatyczna S-tronic";
Q5[7] = "S line 45 TFSI quattro";

var Q7 = new Array;
Q7[1] = "Q5";
Q7[2] = "323 300";
Q7[3] = "255-228g/km";
Q7[4] = "11,2 - 10l/100km";
Q7[5] = "250kw(340km)";
Q7[6] = "automatyczna Tiptronic";
Q7[7] = "S line 55TFSI quattro";

var Q8 = new Array;
Q8[1] = "Q8";
Q8[2] = "391 600";
Q8[3] = "256-231g/km";
Q8[4] = "11,2 - 10,2l/100km";
Q8[5] = "250kw(340km)";
Q8[6] = "automatyczna Tiptronic";
Q8[7] = "55TFSI quattro";

var global = new Array;
global[variableToString({ A1_SB })] = A1_SB;
global[variableToString({ A3_SB })] = A3_SB;
global[variableToString({ S3_SB })] = S3_SB;
global[variableToString({ RS3_SB })] = RS3_SB;
global[variableToString({ A4_AV })] = A4_AV;
global[variableToString({ S4_AV })] = S4_AV;
global[variableToString({ RS4_AV })] = RS4_AV;
global[variableToString({ A5_CO })] = A5_CO;
global[variableToString({ S5_CO })] = S5_CO;
global[variableToString({ RS5_CO })] = RS5_CO;
global[variableToString({ A6_AV })] = A6_AV;
global[variableToString({ A7_SB })] = A7_SB;
global[variableToString({ RS7_SB_P })] = RS7_SB_P;
global[variableToString({ A8 })] = A8;
global[variableToString({ S8 })] = S8;
global[variableToString({ A_TT_CO })] = A_TT_CO;
global[variableToString({ Q2 })] = Q2;
global[variableToString({ Q3 })] = Q3;
global[variableToString({ Q4_e })] = Q4_e;
global[variableToString({ Q5 })] = Q5;
global[variableToString({ Q7 })] = Q7;
global[variableToString({ Q8 })] = Q8;




function CarPreview(Caller){
  document.getElementById('Nazwa').innerHTML = "Model: ";   document.getElementById('Nazwa').innerHTML += global[Caller.id][1];
  document.getElementById('Cena').innerHTML = "Cena: ";   document.getElementById('Cena').innerHTML += global[Caller.id][2];
  document.getElementById('Emisja').innerHTML = "Emisja: ";   document.getElementById('Emisja').innerHTML += global[Caller.id][3];
  document.getElementById('Spalanie').innerHTML = "Spalanie: ";   document.getElementById('Spalanie').innerHTML += global[Caller.id][4];
  document.getElementById('Moc').innerHTML = "Moc: ";   document.getElementById('Moc').innerHTML += global[Caller.id][5];
  document.getElementById('Silnik').innerHTML = "Silnik: ";   document.getElementById('Silnik').innerHTML += global[Caller.id][7];
  document.getElementById('Skrzynia').innerHTML = "Skrzynia biegów: ";   document.getElementById('Skrzynia').innerHTML += global[Caller.id][6];
    if (document.getElementById('PreviewN')){
  document.getElementById('PreviewN').id  = "Preview";
   }
  document.getElementById('Preview').scrollIntoView();
}
