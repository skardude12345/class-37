class Form{

    constructor(){
        this.title = createElement("h2");
        this.input = createInput("name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h4");

    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(width/2, 50);
        

        this.input.position(width/2, 120);
        this.button.position(width/2, 150);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name + ", We are waiting for others to join");
            this.greeting.position(width/4, 200);
        })
    }

    hide(){
        this.greeting.hide();
        this.title.hide();
    }



}