var myvar;
var hh =0 ;
var mm=0 ;
var ss=0;
var ssss = 0;
function reset(){
    console.log("reseting...");
    clearInterval(myvar);
  
    let timer = document.getElementById('timer');
    timer.innerHTML = "0 : 0 : 0 : 0";
    hh=0;
    mm=0;
    ss=0;
    ssss = 0;
    }

function start(){
    console.log("starting...");
    myvar = setInterval(function(){
        if(ssss==99 && ss==59 && mm == 59){
            hh++;
            ssss =0;
            ss=0;
            mm=0;
        }
        else if(ssss==99 && ss==59){
            mm++;
            ssss=0;
            ss=0;
        }
        else if(ssss==99){
            ss++;
            ssss=0;
        }
        else{
            ssss++;
        }
        document.getElementById('timer').innerHTML = hh + " : " + mm + " : " + ss + " : " + ssss;
    },10);
}
function pause(){
    console.log("paused");
    clearInterval(myvar);
}
