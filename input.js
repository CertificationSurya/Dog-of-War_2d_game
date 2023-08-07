export class InputHandler {
    constructor(game) {
        this.game = game;
        
        // hold keys that are pressed down.
        this.keys = []
        window.addEventListener('keydown', e => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "Enter")
                && this.keys.indexOf(e.key) === -1) {
                // new key stay on first
                this.keys.unshift(e.key);
            }
            else if (e.key === "d"){
                this.game.debug = !this.game.debug;
            }
        })
        

        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "Enter") {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        })
    }
} 