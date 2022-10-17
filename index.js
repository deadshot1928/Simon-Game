var colours=["green","blue","red","yellow"];
var seq=[];
var porder=[];
var Started=false;
var level=0;

function nextcol()
{
    level++;
    $("h1").text("Level "+level);
    var r=Math.random()*4;
    r=Math.floor(r);

    var col=colours[r];
    seq.push(col);
    var id="#"+col;
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(col);
}

function playSound(col)
{
    var snd= new Audio("sounds/"+col+".mp3");
    snd.play();
}

function check()
{
    var i=porder.length-1;
    if(porder[i]===seq[i])
    {
        console.log("true");
        if(i===seq.length-1)
        {
            setTimeout(function(){
                nextcol();
            },1000);
            porder=[];
        }
    } 
    else
    {
        var snd= new Audio("sounds/wrong.mp3");
        snd.play();
        $("h1").text("Retry");
        $("body").addClass("game-over");
        setTimeout(function(){ 
            $("body").removeClass("game-over");
        },200);
        
        Started=false;
        level=0;
        seq=[];
        porder=[];
    }
}



////////////////////////////////


$(document).keypress(function()
{
    
    if(!Started)
    {
        Started=true;
        $("h1").text("Level 0");
        nextcol();
    }
});

$(".btn").click(function(){
    col=this.id;
    porder.push(col);
    var id="#"+col;
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(col);
    check();
})


















