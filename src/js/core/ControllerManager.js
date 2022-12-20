export default class ControllerManager {

    #game = null;
    #speed = 0.6;
    #keys = {
      key_w: 87,
      key_a: 65,
      key_s: 83,
      key_d: 68,
      key_up: 38,
      key_down: 40,
      key_left: 37,
      key_right: 39,
    };

    constructor(game) {
        this.#game = game;
        game.getEvents().registerCallback(this.#keys['key_w'], this.handle_w.bind(this)); 
        game.getEvents().registerCallback(this.#keys['key_a'], this.handle_a.bind(this)); 
        game.getEvents().registerCallback(this.#keys['key_s'], this.handle_s.bind(this)); 
        game.getEvents().registerCallback(this.#keys['key_d'], this.handle_d.bind(this)); 
        game.getEvents().registerCallback(this.#keys['key_up'], this.handle_up.bind(this)); 
        game.getEvents().registerCallback(this.#keys['key_down'], this.handle_down.bind(this)); 
        game.getEvents().registerCallback(this.#keys['key_left'], this.handle_left.bind(this)); 
        game.getEvents().registerCallback(this.#keys['key_right'], this.handle_right.bind(this)); 
    }

    handle_w () { this.#game.getCamera().translateZ(-1 * this.#speed); }
    handle_a () { this.#game.getCamera().translateX(-1 * this.#speed); }
    handle_s () { this.#game.getCamera().translateZ(1 * this.#speed); }
    handle_d () { this.#game.getCamera().translateX(1 * this.#speed); }
    handle_up () { this.#game.getCamera().rotation.x += 0.1 * this.#speed; }
    handle_down () { this.#game.getCamera().rotation.x += -0.1 * this.#speed; }
    handle_left () { this.#game.getCamera().rotation.y += 0.1 * this.#speed; }
    handle_right () { this.#game.getCamera().rotation.y += -0.1 * this.#speed; }

    isKeyPressed (variable) {
        let keysDown = this.#game.getEvents().getKeysDown(); 
        let isKeyInKeysDown = variable in keysDown;
        return isKeyInKeysDown; 
    }

}