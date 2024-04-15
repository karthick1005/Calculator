let val='';
let already=false;
let even=null;
function setvalue(Display,n)
{
    if(already)
    {
        Display.value="";
        already=false;
    }
    if(val.length >8)
    {
        Display.value+="";
    }
    else{
        Display.value+=n;
    }
}
function operator(value,oper)
{
    console.log(oper);
    val=value;
    if(already)
    {
        val.slice(0,-1);
    
    }
    val+=oper
    already=true;
    console.log(val);
    
}
function operation(Display)
{
    val+=Display.value
    console.log(val);
    Display.value=eval(val);
    already=true;
    if(even!=null){
        var col='#ffa500';
    even.style.backgroundColor=col;
    even=null;
    }
}

function changecolor(event)
{
    console.log(even);
    if(even!=null){
        var col='#ffa500';
    even.style.backgroundColor=col;
    }
    var color='#ffa90aa9';
    event.style.backgroundColor=color;
    even=event;
}