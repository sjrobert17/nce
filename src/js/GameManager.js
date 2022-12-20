export default class GameManager {
    
    #window = null;
    #uptime = null;
    #scene = null;
    #camera = null;
    #renderer = null;
    #events = null;
    #controller = null;

    setUptime (stopwatch) { this.#uptime = stopwatch; this.#uptime.start(); }
    getUptime () { return this.#uptime.elapsed(); }
    
    setWindow (window) { this.#window = window; }
    getWindow () { return this.#window; }
    
    setScene (scene) { this.#scene = scene.get(); }
    getScene () { return this.#scene; }

    setCamera (camera) { this.#camera = camera.get(); }
    getCamera () { return this.#camera; }

    setRenderer (renderer) { this.#renderer = renderer.get(); }
    getRenderer () { return this.#renderer; }
    
    setEvents (events) { this.#events = events; }
    getEvents () { return this.#events; }

    setController (controller) { this.#controller = controller; }
    getController () { return this.#controller; }
}