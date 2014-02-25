var Emitter = require('emitter');


/**
 * Expose 'PostEmitter'
 */

module.exports = PostEmitter;


/**
 * PostEmitter constructor.
 * Listen local and remote messages.
 * 
 * @api public
 */

function PostEmitter() {
	var _this = this;
	//might be global
	this._listener = function(ev) {
		//check origin
		//then
		_this.emit.apply(_this, ev.data);
	};
	window.addEventListener('message', this._listener);
}


Emitter(PostEmitter.prototype);


PostEmitter.prototype.emit = function() {
	var args = arguments;
	Emitter.prototype.emit.apply(this, args);
	return function(domain) {
		window.postMessage([].slice.call(args), domain || window.location.href);
	};
};


/**
 * Remove post message listener.
 * @api public
 */

PostEmitter.prototype.dispose = function() {
	window.removeEventListener('message', this._listener);
};
