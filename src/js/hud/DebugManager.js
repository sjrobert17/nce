export default class DebugManager {
	
	#game = null;
	element = null;
	values = {};

	constructor(game) {
		this.#game = game;
	}

	set (key, value) {
		this.values[key] = value;
	}

	tick (game) {
		let Game = this.#game; 
		this.set('camera rotation(x,y,z)', Game.getCamera().rotation.x.toFixed(2) + ', ' + Game.getCamera().rotation.y.toFixed(2) + ', ' + Game.getCamera().rotation.z.toFixed(2)); 
		this.set('camera position(x,y,z)', Game.getCamera().position.x.toFixed(2) + ', ' + Game.getCamera().position.y.toFixed(2) + ', ' + Game.getCamera().position.z.toFixed(2)); 
		this.set('uptime', this.timeReadable(Game.getUptime())); 
	}

	render () {
		if (!this.element) {
			this.element = document.createElement('div');
			this.element.classList.add('debug');
			document.body.appendChild(this.element);
		}

		while (this.element.firstChild) {
			this.element.removeChild(this.element.firstChild);
		}

		let ul = document.createElement('ul');
		for (const key in this.values) {
			let li = document.createElement('li');
			li.innerText += `${key}: ${this.values[key]}`;
			ul.appendChild(li);
		}
		this.element.appendChild(ul);
	}

	timeReadable (ms) {
		let s = Math.floor(ms / 1000);
		let m = Math.floor(s / 60);
		s = s % 60;
		let h = Math.floor(m / 60);
		m = m % 60;
		let d = Math.floor(h / 24);
		h = h % 24;
		return d + "d " + h + "h " + m + "m " + s + "s";
	};

}