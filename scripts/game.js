const Game = {
    player: {
        x: 400,
        y: 400
    },
    //because event listens can only process one key a time, keep track of whats being pressed down to move multiple directions
    keyLoggerArray: [

    ],
    start: () => { 
        // initialize our objects
        this.graphicsEngine = new GraphicsEngine(Game);

        // draw the game every 16 miliseconds resulting in about 60 frames per second
        //right now the physics will be tied into the drawing. would need a seperate interval for physics if want to seperate them
        setInterval(Game.runFrame, 16);

        Game.startListeners();
    },
    runFrame: () => {
        Game.physics()
        Game.draw()
    },
    physics: () => {
        const UP_KEYS = [87,38];
        const DOWN_KEYS = [40,83];
        const RIGHT_KEYS = [68,38];
        const LEFT_KEYS = [65,37];
        //calculate player movement based on keys pressed
        if (Game.keyLoggerArray.some(a => UP_KEYS.includes(a))){
            Game.movePlayer("up");
        }
        if (Game.keyLoggerArray.some(a => RIGHT_KEYS.includes(a))){
            Game.movePlayer("right");
        }
        if (Game.keyLoggerArray.some(a => DOWN_KEYS.includes(a))){
            Game.movePlayer("down");
        }
        if (Game.keyLoggerArray.some(a => LEFT_KEYS.includes(a))){
            Game.movePlayer("left");
        }
    },
    draw: () => {
        this.graphicsEngine.renderFrame();
    },
    startListeners: () => {
        //listen for keyboard presses to move player
        window.addEventListener("keydown",(e) => {
            if (!Game.keyLoggerArray.includes(e.keyCode)){
                !Game.keyLoggerArray.push(e.keyCode);
            }
        }, false);

        window.addEventListener("keyup",(e) => {
           const index = Game.keyLoggerArray.findIndex(a => a === e.keyCode);
           if (index > -1){
               Game.keyLoggerArray.splice(index,1)
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
