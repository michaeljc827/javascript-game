class GraphicsEngine {
    constructor(game){
        this.game = game
    }

    renderFrame() {
        //clear frame for redrawing
        this.clearFrame();
        
        //draw the player
        this.drawCircle(this.game.player.x, this.game.player.y)
    }

    drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, OBJECT_CIRCLE_SIZE, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }

    clearFrame() {
        ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
    }
}
