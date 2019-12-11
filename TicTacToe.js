var MyTable=document.getElementById("MyTable");
var td=MyTable.getElementsByTagName("td");
var P1=document.getElementById("P1");
var P2=document.getElementById("P2");
var Span1=document.getElementById("Span1");
var Span2=document.getElementById("Span2");

var Turn=true;
var Start=0; // which color starts after a victory
var Score1=0;
var Score2=0;

alert("Yellow player start!");

for(var i=0;i<td.length;i++) {
    td[i].addEventListener("click", TicTac)
}

function TicTac()
{
    if (Turn === true) {
        if ((this.style.backgroundColor !== "yellow") && (this.style.backgroundColor !== "pink")) {
            this.style.backgroundColor = "yellow";
            Turn = false;
        }
    } else if (Turn === false) {
        if ((this.style.backgroundColor !== "yellow") && (this.style.backgroundColor !== "pink")) {
            this.style.backgroundColor = "pink";
            Turn = true;
        }
    }
    if (((td[0].style.backgroundColor === "yellow") && (td[1].style.backgroundColor === "yellow") && (td[2].style.backgroundColor === "yellow")) ||
        ((td[3].style.backgroundColor === "yellow") && (td[4].style.backgroundColor === "yellow") && (td[5].style.backgroundColor === "yellow")) ||
        ((td[6].style.backgroundColor === "yellow") && (td[7].style.backgroundColor === "yellow") && (td[8].style.backgroundColor === "yellow")) ||
        ((td[0].style.backgroundColor === "yellow") && (td[4].style.backgroundColor === "yellow") && (td[8].style.backgroundColor === "yellow")) ||
        ((td[2].style.backgroundColor === "yellow") && (td[4].style.backgroundColor === "yellow") && (td[6].style.backgroundColor === "yellow")) ||
        ((td[0].style.backgroundColor === "yellow") && (td[3].style.backgroundColor === "yellow") && (td[6].style.backgroundColor === "yellow")) ||
        ((td[1].style.backgroundColor === "yellow") && (td[4].style.backgroundColor === "yellow") && (td[7].style.backgroundColor === "yellow")) ||
        ((td[2].style.backgroundColor === "yellow") && (td[5].style.backgroundColor === "yellow") && (td[8].style.backgroundColor === "yellow")))
    {
        alert("Yellow wins");
        Start=0;
        Reset();
    }
    else if (((td[0].style.backgroundColor === "pink") && (td[1].style.backgroundColor === "pink") && (td[2].style.backgroundColor === "pink")) ||
        ((td[3].style.backgroundColor === "pink") && (td[4].style.backgroundColor === "pink") && (td[5].style.backgroundColor === "pink")) ||
        ((td[6].style.backgroundColor === "pink") && (td[7].style.backgroundColor === "pink") && (td[8].style.backgroundColor === "pink")) ||
        ((td[0].style.backgroundColor === "pink") && (td[4].style.backgroundColor === "pink") && (td[8].style.backgroundColor === "pink")) ||
        ((td[2].style.backgroundColor === "pink") && (td[4].style.backgroundColor === "pink") && (td[6].style.backgroundColor === "pink")) ||
        ((td[0].style.backgroundColor === "pink") && (td[3].style.backgroundColor === "pink") && (td[6].style.backgroundColor === "pink")) ||
        ((td[1].style.backgroundColor === "pink") && (td[4].style.backgroundColor === "pink") && (td[7].style.backgroundColor === "pink")) ||
        ((td[2].style.backgroundColor === "pink") && (td[5].style.backgroundColor === "pink") && (td[8].style.backgroundColor === "pink")))
    {
        alert("Pink wins");
        Start=1;
        Reset();
    }
}

    function Reset()
    {
        for (i = 0; i < td.length; i++) {
            td[i].style.backgroundColor = "#E6E6FA";
        }
        if(Start===0)
        {
            Turn=true;
            P1.style.borderColor="black";
            P2.style.borderColor="#E6E6FA";
            Score1++;
            Span1.textContent=Score1;
        }
        if(Start===1)
        {
            Turn=false;
            P2.style.borderColor="black";
            P1.style.borderColor="#E6E6FA";
            Score2++;
            Span2.textContent=Score2;
        }
    }

    P1.addEventListener("click",function() {
        if (Start === 0) {
            Turn = true;
            P1.style.borderColor = "black";
            P2.style.borderColor = "#E6E6FA";
        }
    });

    P2.addEventListener("click",function(){
        if(Start===1) {
            Turn = false;

            P2.style.borderColor = "black";
            P1.style.borderColor = "#E6E6FA";
        }
    });


