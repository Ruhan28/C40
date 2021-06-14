class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();

    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)
    cars = [car1, car2, car3, car4];
    car1.addImage(car1Image);
    car2.addImage(car2Image);
    car3.addImage(car3Image);
    car4.addImage(car4Image);



  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerinfo();
    if(allPlayers!==undefined){
      background(groundImage);
      image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5);

    var index = 0;
    var x = 175;
    var y;
      //var display_position = 130;
      for (var plr in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
      if (index===player.index){
        stroke(10);
        fill("Green");
        ellipse(x,y,60,60);
        cars[index-1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;


      }
      else{
        cars[index-1].shapeColor = "black";
      }
      
      
     // display_position+=20;
      //extSize(15);//////////////////////
      ///////////////////////////////////////////////////
      //text(allPlayers[plr].name+":  " +allPlayers[plr].distance, 120, display_position);

    }
    }
    if (keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }
    if(player.distance>4360){
      gameState = 2;
    }

    drawSprites();
  }
  end(){
    console.log("Game Over");

  }
}
