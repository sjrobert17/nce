export default class StopwatchManager {

	#datetime = null;

	start() {
		this.#datetime = new Date();
	}

	elapsed() {
		const now = new Date();
		return now - this.#datetime;
	}

}