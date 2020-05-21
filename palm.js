
var elemright = ["assets/AIR.png","assets/FIRE.png","assets/WATER.png","assets/EARTH.png"];
var elemleft = ["assets/AIRLEFT.png","assets/FIRELEFT.png","assets/WATERLEFT.png","assets/EARTHLEFT.png"];

var nelemright = ["assets/shadow/nair.png","assets/shadow/nfire.png","assets/shadow/nwater.png","assets/shadow/nearth.png"];
var nelemleft = ["assets/shadow/nairleft.png","assets/shadow/nfireleft.png","assets/shadow/nwaterleft.png","assets/shadow/nearthleft.png"];

var elem = nelemright;
var x=0;
var flip = (1);

document.getElementById("img").src=elem[x];

document.addEventListener('keydown', function(event) {
   
    
    if (event.code == 'ArrowRight' || event.code == 'KeyDww') {
        // right arrow
        
        x++;
        if(x==4){
            x=0;
        }
        document.getElementById("img").src=elem[x];
       
    }
    else if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
       // left arrow
        x--;
        if(x==(-1)){
            x=3;
        }
        document.getElementById("img").src=elem[x]; 
   
    }
    else if(event.code == 'KeyW' || event.code == 'ArrowUp'){
      
        if(elem==nelemright){
            elem=nelemleft;
        }
        else{
            elem=nelemright;
        }
        document.getElementById("img").src=elem[x];
        

    }
});

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;                                                        
var yDown = null;  

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
}; 

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
        /* left swipe */ 
        
            x++;
            if(x==4){
                x=0;
            }
            document.getElementById("img").src=elem[x];
        } else {
        /* right swipe */
            x--;
            if(x==(-1)){
                x=3;
            }
            document.getElementById("img").src=elem[x]; 
        }                       
    } else {
        if ( yDiff > 0 ) {
        /* up swipe */ 
            if(elem==elemright){
                elem=elemleft;
            }
            else{
                elem=elemright;
            }
            document.getElementById("img").src=elem[x];
        } else { 
        /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};