class Game{

    constructor(){

    }

    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }

        car1 = createSprite(100, 500, 30, 30);
        car2 = createSprite(100, 500, 30, 30);
        car3 = createSprite(100, 500, 30, 30);
        car4 = createSprite(100, 500, 30, 30);

        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide();

        textSize(30);
        text("Game has Started", 100, 50);

        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
            //var yposition = 130;
            var index = 0;
            var x = 0, y = 0;

            for(var plr in allPlayers){
                index++;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance - 200;

                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index === player.index){
                    cars[index - 1].shapeColor = "blue";
                    camera.position.x = width/2;
                    camera.position.y = cars[index-1].y;

                } else {
                    cars[index - 1].shapeColor = "black";
                }
                


               /* if (plr === "player" + player.index){
                    fill("red");
                } else {
                    fill(0);
                }

                yposition += 20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 100, yposition); */
            } 
        }

        drawSprites();

        if (keyDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }

}