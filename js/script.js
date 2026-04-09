/* LOGIN */
function loginUser(){
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let msg=document.getElementById("loginMsg");

    if(email===""||pass===""){
        msg.innerText="Fill all fields";
        msg.style.color="red";
        return;
    }

    if(pass.length<6){
        msg.innerText="Password too short";
        msg.style.color="red";
        return;
    }

    localStorage.setItem("user",email);

    msg.innerText="Login success!";
    msg.style.color="green";

    setTimeout(()=>window.location.href="index.html",1000);
}


/* TRACKER + DATA */
let sugarData = [];

function checkSugar(){
    let val=parseFloat(document.getElementById("sugarInput").value);
    let box=document.getElementById("resultBox");

    if(isNaN(val)){
        box.innerHTML="Enter valid number";
        box.className="result high";
        return;
    }

    sugarData.push(val);
    updateChart();

    if(val<70){
        box.className="result low";
        box.innerHTML="LOW SUGAR - drink juice + rest + see doctor if needed";
    }
    else if(val<=140){
        box.className="result normal";
        box.innerHTML="NORMAL - keep healthy lifestyle + exercise";
    }
    else{
        box.className="result high";
        box.innerHTML="HIGH SUGAR - water + avoid sugar + consult doctor if repeated";
    }
}


/* CHART */
let chart;

function updateChart(){
    let ctx=document.getElementById("chart").getContext("2d");

    if(chart) chart.destroy();

    chart=new Chart(ctx,{
        type:"line",
        data:{
            labels:sugarData.map((_,i)=>"Day "+(i+1)),
            datasets:[{
                label:"Blood Sugar",
                data:sugarData,
                borderColor:"#0f766e",
                fill:false
            }]
        }
    });
}
