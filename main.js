var canvas = new fabric.Canvas("c");
playerx = 10;
playery = 10;
blockw = 30;
blockh = 30;
var player = "";
var block = "";

function playeru() {

    fabric.Image.fromURL("player.png", function(Img){
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(130);
        player.set({
            top:playery,
            left:playerx
        });
        canvas.add(player);


    });
}

function kdown(e) {

    kpress = e.keyCode;
    console.log(kpress);
    if(e.shiftKey == true && kpress == '80'){
        console.log("p and shift are pressed");
        blockw = blockw + 10;
        blockh = blockh + 10;
        document.getElementById("currentW").innerHTML = blockw;
        document.getElementById("currentH").innerHTML = blockh;

    }

    if(e.shiftKey == true && kpress == '77'){
        console.log("m and shift are pressed");
        blockw = blockw - 10;
        blockh = blockh - 10;
        document.getElementById("currentW").innerHTML = blockw;
        document.getElementById("currentH").innerHTML = blockh;

    }

    if(kpress == '70'){
       new_image('thor_face.png')
       console.log("f");
    }

    if(kpress == '66'){
        new_image('hulkd_body.png')
        console.log("b");
     }
 
     if(kpress == '76'){   
     new_image('ironman_legs.png')
        console.log("l");
     }

     if(kpress == '82'){
        new_image('spiderman_right_hand.png')
        console.log("r");
     }

     if(kpress == '72'){
        new_image('captain_america_left_hand.png')
        console.log("h");
     }


     if(kpress == '38'){
        up();
        console.log("up");
     }
 
     if(kpress == '40'){
         down();
         console.log("down");
      }
  
      if(kpress == '37'){
         left();
         console.log("left");
      }
 
      if(kpress == '39'){
         right();
         console.log("right");
      }
 




}

function up() {

    if(playery >= 0) {
       playery = playery - blockh;
       console.log("block height" + blockh);
       console.log("up arrown pressed," + " x = " + playerx + ", y = " + playery);
       canvas.remove(player);
       playeru();
    }
 }
 
 function down() {
 
    if(playery <= 500) {
       playery = playery + blockh;
       console.log("block " + blockh);
       console.log("down arrown pressed," + " x = " + playerx + ", y = " + playery);
       canvas.remove(player);
       playeru();
    }
 }
 
 function left() {
 
    if(playerx >= 0) {
       playerx = playerx - blockw;
       console.log("block " + blockw);
       console.log("down arrown pressed," + " x = " + playerx + ", y = " + playery);
       canvas.remove(player);
       playeru();
    }
 }
 
 function right() {
 
    if(playerx <= 850) {
       playerx = playerx + blockw;
       console.log("block " + blockw);
       console.log("down arrown pressed," + " x = " + playerx + ", y = " + playery);
       canvas.remove(player);
       playeru();
    }
 

 







