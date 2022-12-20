export default class SceneManager {
	
	#object = null;

	constructor(Game) {
		this.#object = new THREE.Scene();
	}

	get () {
		return this.#object;
	}

}