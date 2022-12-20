import GameManager from './GameManager.js';
import ConfigManager from './ConfigManager.js';
import CoreManager from './CoreManager.js';
import HudManager from './HudManager.js';
const Config = new ConfigManager(); 
const Game = new GameManager(); 
const Core = new CoreManager(Game); 
const Hud = new HudManager(Game); 

function render() {
	Hud.render(); 
	Core.render(); 
	requestAnimationFrame(render);
}

function tick() {
	Hud.tick(); 
	Core.tick(); 
}

requestAnimationFrame(render);
setInterval(tick, 1000 / Config.get('fps')); 