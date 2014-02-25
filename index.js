var Emitter = require('emitter'),
		attach = window.addEventListener ? 'addEventListener' : 'attachEvent',
		detach = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
		prefix = attach !== 'addEventListener' ? 'on' : '';

//TODO: we could encapsulte an id into the postMessage message
//Example
//  message = [...];
//  message._id = "...";
//  
// but it'd mean that it could only receive messages from an other post component.

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

function PostEmitter(obj) {
	var _this = this;
	//might be global
	this._listener = function(ev) {
		//check origin
		//then
		var data = ev.data;
		_this.emit.apply(_this, data instanceof Array ? data : [data]);
	};
	window[attach](prefix + 'message', this._listener);
}


Emitter(PostEmitter.prototype);


/**
 * Emit local or cross-origin messages.
 * @param {String} topic
 * @param {Amy}  
 * @return {Function}
 * @api public
 */

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
	window[detach](prefix + 'message', this._listener);
	this.off();
};
