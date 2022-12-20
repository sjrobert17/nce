export default class RendererManager {
	#object = null;
    #width = window.innerWidth; // Width of the rendering area
    #height = window.innerHeight; // Height of the rendering area
  
	constructor(Game) {
		this.#object = new THREE.WebGLRenderer();
		this.#object.setSize(this.#width, this.#height);
		document.body.appendChild(this.#object.domElement);
	}
  
	get () {
		return this.#object;
	}
  
	updateRendererSize(width = window.innerWidth, height = window.innerHeight) {
		this.#object.setSize(width, height);
	}
  }
  