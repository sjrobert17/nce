export default class CaptionManager {
	
	#game = null;
	text = '';
	element = null;

	constructor(game) {
		this.#game = game;
	}

	get () {
		return this.text;
	}

	set (value) {
		this.text = value;
	}

	render () {
	}

	tick () {
		if (!this.element) {
			this.element = document.createElement('div');
			this.element.classList.add('caption');
			document.body.appendChild(this.element);
		}

		this.element.innerText = this.text;
	}

}