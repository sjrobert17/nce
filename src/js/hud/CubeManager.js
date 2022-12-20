export default class CubeManager {

    #game = null;
    #geometry = null;
    #material = null;
    #cube = null;

    constructor(game) {
        this.#game = game;
        this.#geometry = new THREE.BoxGeometry(1, 1, 1);
        this.#material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.#cube = new THREE.Mesh(this.#geometry, this.#material);
        this.#game.getScene().add(this.#cube);
    }

    render() {
    }

    tick() {
        this.#cube.rotation.x += 0.01;
        this.#cube.rotation.y += 0.01;
        this.#cube.rotation.z += 0.01;
    }

}