class Player{

    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = 0;
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name, 
            distance: this.distance

        })
    }

    updateCount(c){
        database.ref("/").update({
            playerCount: c
        })
    }

    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        })
    }

    static getPlayerInfo(){
        database.ref("players").on("value", (data)=>{
            allPlayers = data.val();
        })
    }


}