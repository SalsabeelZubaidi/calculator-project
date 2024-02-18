
var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');


    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if (screen.value === '0') {
                screen.value = '';
            }
            if(btntext =='×')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            screen.value+=btntext;
        });
    }

   
function ACBtn(){
    screen.value='';
}

function sin()
    {
        screen.value=Math.sin(screen.value);
    }

    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log()
    {
        screen.value=Math.log(screen.value);
    }

    function pi()
    {
        screen.value= Math.PI;
    }

    function e()
    {
        screen.value=Math.E;
    }
    
    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }
