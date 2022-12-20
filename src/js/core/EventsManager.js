export default class EventsManager {

	#register = [];
	#keysDown = {};

	constructor(Game) {
		Game.getWindow().window.addEventListener('resize', () => {
			Game.getRenderer().updateRendererSize();
		});
		
    	addEventListener("keydown", this.keydown.bind(this), false);
    	addEventListener("keyup", this.keyup.bind(this), false);
	}

	registerCallback(key, callback) {
		if (key in this.#register) {
			this.#register[key].push(callback);
		} else {
			this.#register[key] = [callback];
		}
	}

	handleRegister(game) {
		for (const key in this.#keysDown) {
			if (key in this.#register) {
				this.#register[key].forEach((callback) => callback(game));
			}
		}
	}
  
	keydown (e) { this.#keysDown[e.keyCode] = true; }
	
	keyup (e) { delete this.#keysDown[e.keyCode]; }

	getKeysDown () { return this.#keysDown; }

}