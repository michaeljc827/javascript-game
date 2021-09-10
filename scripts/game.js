const Game = {
    player: {
        x: 400,
        y: 400
    },
    start: () => { 
        // initialize our objects
        this.graphicsEngine = new GraphicsEngine(Game);

        // draw the game every 16 miliseconds resulting in about 60 frames per second
        setInterval(Game.draw, 16);
        Game.startListeners();
    },
    draw: () => {
        this.graphicsEngine.renderFrame();
    },
    startListeners: () => {
        //listen for keyboard presses to move player
        window.addEventListener("keydown",(e) => {
            console.log(`you pressed ${e.keyCode}`)
            switch (e.keyCode){
                //up
                case 87:
                case 38:
                    Game.movePlayer("up");
                    break;
                //right
                case 68:
                case 39:
                    Game.movePlayer("right");
                    break;
                //down
                case 40:
                case 83:
                    Game.movePlayer("down");
                    break;
                //left
                case 65:
                case 37:
                    Game.movePlayer("left");
                    break;
            }
        }, false);
    },
    movePlayer: (direction) => {
        // move the player position N pixels
        switch (direction){
            case "up":
              Game.player.y -= 5;
              break;
            case "down":
                Game.player.y += 5;
                break;
            case "right":
                Game.player.x += 5;
                break;
            case "left":
                Game.player.x -= 5;
                break;
        }
    }
}
