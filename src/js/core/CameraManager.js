export default class CameraManager {

    #object = null;
    #fov = 75; // Field of view
    #aspect = window.innerWidth / window.innerHeight; // Aspect ratio
    #near = 0.1; // Near clipping plane
    #far = 1000; // Far clipping plane
  
    constructor(game) {
        this.#object = new THREE.PerspectiveCamera(this.#fov, this.#aspect, this.#near, this.#far);
        this.#object.position.z = 5;
    }

    get () {
        return this.#object;
    }

}