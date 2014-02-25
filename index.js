
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


require('emitter')(PostEmitter.prototype);


/**
 * Remove post message listener.
 * @api public
 */

PostEmitter.prototype.dispose = function() {
	window.removeEventListener('message', this._listener);
};

// /**
//  * PostEmitter constructor.
//  * @api public
//  */

// function PostEmitter() {
// 	var _this = this;
//   this.listeners = {};
//   this._listener = function(ev) {
// 		var data = ev.data,
// 				listeners = _this.listeners[data[0]];

// 		debugger
// 		if(listeners) {
// 			listeners = listeners.slice(0);
// 			for(var i = 0, l = listeners.length; i < l; i++) {
// 				var listener = listeners[i];
// 				data.shift();
// 				listener[0].apply(listener[1], data);
// 			}
// 		}
//   };
//   window.addEventListener('message', this._listener);
// }


// PostEmitter.prototype.on = function(topic, fn, scope) {
// 	(this.listeners[topic] = this.listeners[topic] || []).push([fn, scope]);
// };


// PostEmitter.prototype.once = function(topic, fn, scope) {
// };


// PostEmitter.prototype.emit = function(topic, msg) {
// 	window.postMessage([].slice.call(arguments), window.location.href);
// };


// PostEmitter.prototype.off = function() {
// 	this.listeners = {};
// };


// PostEmitter.prototype.dispose = function() {
// 	window.removeEventListener('message', this._listener);
// };
