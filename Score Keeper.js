var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var p1span=document.querySelector("#p1span");
var p2span=document.querySelector("#p2span");
var inputNum=document.querySelector("input");
var ScoreSpan=document.querySelector("p span");
var body=document.querySelector("body");
var score1=0;
var score2=0;
var winning=ScoreSpan;
var gameOver=false;

body.style.backgroundColor="#99ddff";
body.style.margin="200px 40px 200px 600px";

p1.addEventListener("click",function(){
    if(!gameOver) {
        score1++;
        if(score1===winning)
        {
            p1span.style.color="#d24dff";
            gameOver=true;
            body.style.backgroundColor="#ffffb3";
        }
        p1span.textContent = score1;
    }
});

p2.addEventListener("click",function(){
    if(!gameOver) {
        score2++;
        if(score2===winning)
        {
            p2span.style.color="#d24dff";
            gameOver=true;
            body.style.backgroundColor="#ffffb3";

        }
        p2span.textContent = score2;
    }
});

reset.addEventListener("click",function(){
    score1=0;
    score2=0;
    p1span.textContent=score1;
    p2span.textContent=score2;
    gameOver=false;
    p1span.style.color="black";
    p2span.style.color="black";
    body.style.backgroundColor="#99ddff";


});

inputNum.addEventListener("change", function(){
    ScoreSpan.textContent=inputNum.value;
    winning=Number(inputNum.value);
});