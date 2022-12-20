export default class ConfigManager {

    #game = null;
    data = {
        fps: 60, 
        fov: 75, 
        clipping_plane_near: 0.1, 
        clipping_plane_far: 1000, 
    };
  
    constructor(game) {
        this.#game = game; 
    }

    get(key) {
        return this.data[key];
    }

    set(key, value) {
        this.data[key] = value;
    }

}