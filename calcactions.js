
var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');


    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if (screen.value === '0') {
                screen.value = '';
            }
            if(btntext=="=")
                btntext= '';
            if(btntext =='×')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            if(screen.value=="%"){
                btntext='';
            }
            if(btntext=="x!")
            {
                btntext='!';
            }
            if(btntext=="xy")
            {
                btntext='^';
            }
            if (btntext== 'tan' || btntext== 'sin' ||btntext== 'cos' || btntext== 'log'||btntext== 'ln' ||btntext=='√'){
                btntext+= '(';
            }    
            
            

            if(btntext == 'Rad'){
              
               document.getElementById('deg').style.opacity= 0.5;
               document.getElementById('rad').style.opacity= 1;
               document.getElementById('rad').classList.add('activeBtn');
               document.getElementById('deg').classList.remove('activeBtn');
               btntext= '';
            }
            if(btntext == 'Deg'){
                document.getElementById('deg').style.opacity= 1;
                document.getElementById('rad').style.opacity= 0.5;
                document.getElementById('deg').classList.add('activeBtn');
               document.getElementById('rad').classList.remove('activeBtn');
                btntext= '';
            }

            screen.value+=btntext;
            
        });
    }
function inverse(){
    if(document.getElementById('invsin').innerHTML== "sin"){
        document.getElementById('invsin').innerHTML="sin"+ "-1".sup();
        document.getElementById('invln').innerHTML="e"+ "x".sup();
        document.getElementById('invcos').innerHTML="cos"+ "-1".sup();
        document.getElementById('invlog').innerHTML="10"+ "x".sup();
        document.getElementById('invtan').innerHTML="tan"+ "-1".sup();
        document.getElementById('invsqrt').innerHTML="x"+ "2".sup();
        document.getElementById('invans').innerHTML="RND";
        document.getElementById('invroot').innerHTML="y".sup() +"√"+ "-1".sup();
    }else{
        document.getElementById('invsin').innerHTML="sin";
        document.getElementById('invln').innerHTML="ln";
        document.getElementById('invcos').innerHTML="cos";
        document.getElementById('invlog').innerHTML="log";
        document.getElementById('invtan').innerHTML="tan";
        document.getElementById('invsqrt').innerHTML="√";
        document.getElementById('invans').innerHTML="Ans";
        document.getElementById('invroot').innerHTML="x"+"y".sup();
    }
    
}    

function ACBtn(){
    screen.value='';
}

function calculate(){
    debugger;
    var operator= '';
    if(screen.value.includes('+') )
        operator= 0;
    else if(screen.value.includes('-'))
        operator= 1;
    else if(screen.value.includes('*') )
        operator= 2;
    else if(screen.value.includes('/') )
        operator= 3;
    else if(screen.value.includes('%') )
        operator= 4;
    else if(screen.value.includes('tan') )
        operator=5;
    else if(screen.value.includes('sin') )
        operator=6;
    else if(screen.value.includes('cos') )
        operator=7;
    else if(screen.value.includes('ln') )
        operator=8;
    else if(screen.value.includes('log') )
        operator=9;
    else if(screen.value.includes('√') )
        operator=10;
    else if(screen.value.includes('π') )
        operator=11;
    else if(screen.value.includes('e') )
        operator=12;
    else if(screen.value.includes('!') )
        operator=13;
    else if(screen.value.includes('^') )
        operator=14;

    var degType= document.getElementsByClassName('activeBtn')[0].innerHTML;
    debugger;
    switch(operator){
        case (0):
            var value=0;
            var valArr= screen.value.split('+');
            for(let i=0 ; i<valArr.length ; i++){
                value+= parseFloat(valArr[i]);}
                screen.value= value;
            break;
        case (1):
            var valArr= screen.value.split('-');
            var value=valArr[0]
            for(let i=1 ; i<valArr.length ; i++){
                value-= parseFloat(valArr[i]);
            }
                screen.value= value;
                 if(value == 0)
                   screen.value='0';
            break;
        case (2):
            var value=1;
            var valArr= screen.value.split('*');
            for(let i=0 ; i<valArr.length ; i++){
                value*= parseFloat(valArr[i]);}
                screen.value= value;
            break;
        case (3):
            var valArr= screen.value.split('/');
            var value=valArr[0]
            for(let i=1 ; i<valArr.length ; i++){
                value /= parseFloat(valArr[i])}
                screen.value= value;
            break;
        case (4):
            screen.value=parseFloat(screen.value)/100;
            break;     
        case(5):
            var valArr= screen.value.split('tan(')[1];
            
            if(valArr.includes(')'))
                valArr= valArr.substring(0, valArr.length-1)
                if(degType=='Rad'){
                    screen.value =Math.tan(parseFloat(valArr))
                }else if(degType=="Deg"){
                    screen.value = Math.tan(parseFloat(valArr *  Math.PI/ 180.0));
                }
            
            break;
         case(6):
            var valArr= screen.value.split('sin(')[1];
            if(valArr.includes(')'))
                valArr= valArr.substring(0, valArr.length-1)
                if(degType=='Rad'){
                    screen.value =Math.sin(parseFloat(valArr))
                }else if(degType=="Deg"){
                    screen.value = Math.sin(parseFloat(valArr *  Math.PI/ 180.0));
                }
            break;
         case(7):
            var valArr= screen.value.split('cos(')[1];
            if(valArr.includes(')'))
                valArr= valArr.substring(0, valArr.length-1)
                if(degType=='Rad'){
                    screen.value =Math.cos(parseFloat(valArr))
                }else if(degType=="Deg"){
                    screen.value = Math.cos(parseFloat(valArr *  Math.PI/ 180.0));
                }
            break;
        case(8):
            var valArr= screen.value.split('ln(')[1];
            if(valArr.includes(')'))
                valArr= valArr.substring(0, valArr.length-1)
            screen.value=Math.log(parseFloat(valArr));
            break;
        case(9):
            var valArr= screen.value.split('log(')[1];
            if(valArr.includes(')'))
                valArr= valArr.substring(0, valArr.length-1)
            screen.value=Math.log(parseFloat(valArr))/Math.log(10);
            break;
        case(10):
            var valArr= screen.value.split('√(')[1];
            if(valArr.includes(')'))
                valArr= valArr.substring(0, valArr.length-1)
            screen.value=Math.sqrt(parseFloat(valArr));
            break;
        case(11):
            screen.value= Math.PI;
            break;
        case(12):
            screen.value= Math.E;
            break;    
        case(13):
             var i, num, f;
            f = 1;
            num = screen.value;
            num = parseInt(num);
                for (i = 1; i <= num; i++) {
                    f = f * i;
                }
                screen.value = f;
            break;
        case(14):
            var input = screen.value.split('^');
            if (input.length === 2) {
                var base = parseFloat(input[0]);
                var exponent = parseFloat(input[1]);
            }
            var result = Math.pow(base, exponent);
            screen.value = result;
            
            break;
              }
}

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function fact()
    {
        var i, num, f;
        f=1;
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }
        i=i-1;
        screen.value=f;
    }
