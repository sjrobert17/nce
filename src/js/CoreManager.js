import StopwatchManager from './core/StopwatchManager.js';
import SceneManager from './core/SceneManager.js';
import CameraManager from './core/CameraManager.js';
import RendererManager from './core/RendererManager.js';
import EventsManager from './core/EventsManager.js';
import ControllerManager from './core/ControllerManager.js';

export default class CoreManager {

    #game = null;

    constructor(game) {
        this.#game = game;
        this.#game.setWindow(window);
        this.#game.setUptime(new StopwatchManager());
        this.#game.setScene(new SceneManager(this.#game));
        this.#game.setCamera(new CameraManager(this.#game));
        this.#game.setRenderer(new RendererManager(this.#game));
        this.#game.setEvents(new EventsManager(this.#game));
        this.#game.setController(new ControllerManager(this.#game));
    }

    render() {
        this.#game.getRenderer().render(this.#game.getScene(), this.#game.getCamera());
    }

    tick() {
        this.#game.getEvents().handleRegister();
    }
    
}