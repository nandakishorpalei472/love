var name= ["nanda","nandu","payal","nkp","pp","Nanda","Payal"];
var boy=prompt("what is your 👦 name ?");
var girl=prompt("what is your pertners 👧 name ?");
var total=Math.floor(Math.random()*90)+10;
var boyname=boy.slice(0,1).toUpperCase()+boy.slice(1,boy.length).toLowerCase();
var girlname=girl.slice(0,1).toUpperCase()+girl.slice(1,girl.length).toLowerCase();
var totalquote=[" Your True love stories never have endings."," you both together makes a perfect couple."," You're most alive when your partner is in your thoughts."," your Love is composed of a single soul inhabiting two bodies"," In your love the best thing  to hold onto in life is each other."," you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible." ," A loving heart is the truest wisdom."];
var quote=Math.floor(Math.random()*totalquote.length);
var quotetoshow=totalquote[quote];
  document.querySelectorAll("h1")[0].innerHTML="Your Name is " +boyname;
    document.querySelectorAll("h1")[1].innerHTML="Your Partners Name is " +girlname;
 if(name.includes(boy) && name.includes(girl)){
 document.querySelectorAll("h1")[2].innerHTML="wow " +boyname+" and " + girlname + quotetoshow + " your love percentage is 100 %";
    }
else if(total>=75){
  document.querySelectorAll("h1")[2].innerHTML="wowwwww "+boyname+" and " +girlname + quotetoshow+"  your ❤ 🥰  percentage  is " +total +"%";
}
else if (total >=50 && total <=74){
  document.querySelectorAll("h1")[2].innerHTML="that's quite impressive  "+boyname+ " and " + girlname +  ". your ❤ 🥰 percentage is " +total +"%";
}
else if( total >=25 && total <=49){
  document.querySelectorAll("h1")[2].innerHTML="Oops "+boyname+ " and " + girlname +  " your ❤ 🥰 percentage is " +total +"%";
}
else {
  document.querySelectorAll("h1")[2].innerHTML=boyname+ " and " + girlname +  " you have to face issues. your ❤ 🥰 percentage is " +total +"%";
}
