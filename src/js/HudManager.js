import DebugManager from './hud/DebugManager.js';
import CaptionManager from './hud/CaptionManager.js';
import CubeManager from './hud/CubeManager.js';

export default class HudManager {

    #game = null;
    #hud = {};

    constructor(game) {
        this.#game = game;
        this.#hud.debug = new DebugManager(game);
        this.#hud.caption = new CaptionManager(game);
        this.#hud.cube = new CubeManager(game);
        this.#hud.caption.set('Welcome to the game of the year, Cube!');
    }

    render() {
        this.#hud.debug.render(); 
        this.#hud.caption.render(); 
        this.#hud.cube.render(); 
    }

    tick() {
        this.#hud.debug.tick(); 
        this.#hud.caption.tick(); 
        this.#hud.cube.tick(); 
    }

    debug () { return this.#hud.debug; }
    caption () { return this.#hud.caption; }
    cube () { return this.#hud.cube; }

}