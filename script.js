var billInput = document.getElementById("bill");
var cashInput = document.getElementById("cash");
var btnCheck = document.getElementById("btnCheck");
var cashDiv = document.querySelector(".cash-div");
var btnNext = document.getElementById("btnNext");
var notesOutput= document.querySelector(".notes-output");
var outputMessage = document.querySelector("#output-message");

var bill = 0;
var cash = 0;
var diff = 0;
var remainder = 0;
var ttn = 0;
var fhn = 0;
var ohn = 0;
var tn = 0;
var ten = 0;
var fn = 0;
var on = 0;


billInput.addEventListener("change",()=>{
    bill = parseInt(billInput.value);
})

btnNext.addEventListener("click",()=>{
    if(bill != 0)
    {
    cashDiv.style.display = "block";
    btnCheck.style.display ="block";
    }
})


cashInput.addEventListener("change",()=>{
    cash = parseInt(cashInput.value);
})

btnCheck.addEventListener("click",()=>{   
    notesOutput.style.display = "inline-block";
    if(cash == bill) 
        {
        outputMessage.innerHTML=`Cash Paid equal to Bill amount`;
        outputMessage.style.color="green";
        }
    else if(cash > bill)
    {
        diff = cash - bill;
        console.log(`Amount to be returned ${diff}`);

        while(diff > 0)
        {
           if(diff >= 2000)
           {
               remainder = diff % 2000;
               ttn = Math.trunc(diff /2000);
               diff = remainder;
           }
           if(diff >= 500 && diff < 2000)
           {
               remainder = diff % 500;
               fhn = Math.trunc(diff /500);
               diff = remainder;
           }
           if(diff >= 100 && diff < 500)
           {
               remainder = diff % 100;
               ohn = Math.trunc(diff /100);
               diff = remainder;
           }
           if(diff >= 20 && diff < 100)
           {
               remainder = diff % 20;
               tn = Math.trunc(diff /20);
               diff = remainder;
           }
           if(diff >= 10 && diff < 20)
           {
               remainder = diff % 10;
               ten = Math.trunc(diff /10);
               diff = remainder;
           }
           if(diff >= 5 && diff < 10)
           {
               remainder = diff % 5;
               fn = Math.trunc(diff /5);
               diff = remainder;
           }
           if(diff >=1 && diff < 5)
           {
               remainder = diff % 1;
               on = Math.trunc(diff /1);
               diff = remainder;
           }   
        }
        var table= document.createElement("table");
        table.innerHTML = `<tbody>
        <tr>
          <th>Notes:</th>
          <td>2000</td>
          <td>500</td>
          <td>100</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
          <td>1</td>
        </tr>
        <tr>
          <th>No of notes:</th>
          <td>${ttn}</td>
          <td>${fhn}</td>
          <td>${ohn}</td>
          <td>${tn}</td>
          <td>${ten}</td>
          <td>${fn}</td>
          <td>${on}</td>
        </tr>
      </tbody>`;

    notesOutput.replaceChild(table,notesOutput.lastChild);

    // console.log(`Notes from 2000 500 100 20 10 5 1 \n:--->  ${ttn} | ${fhn} | ${ohn} | ${tn} | ${ten} | ${fn} | ${on}`);
    }
    else 
        {
        outputMessage.innerHTML=`Cash Paid less than Bill amount`;
        outputMessage.style.color="red";

    }
});

