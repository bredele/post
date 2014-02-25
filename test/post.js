var assert = require('assert');
var Emitter = require('post');

describe('Emitter', function() {
	var post = null;
		beforeEach(function() {
		post = new Emitter();
	});

	afterEach(function() {
		post.dispose();
	});

	it('should be an emitter', function() {
		assert.equal(typeof Emitter.prototype.on, 'function');
		assert.equal(typeof Emitter.prototype.once, 'function');		
		assert.equal(typeof Emitter.prototype.emit, 'function');
		assert.equal(typeof Emitter.prototype.off, 'function');
	});

	it('should behave as a regular emitter', function() {
		var message = '';
		post.on('message', function(val) {
			message = val;
		});

		post.emit('message', 'post');
		post.off();
		post.emit('message', 'bredele');

		assert.equal(message, 'post');
	});

});

describe("Cross origin messages", function() {
	var post = null;
	beforeEach(function() {
		post = new Emitter();
	});

	afterEach(function() {
		post.dispose();
	});

	it("should listen post messages", function(done) {
		post.on('message', function(val) {
			assert.equal(val, 'this is a test');
			done();
		});
		//post message on same origin
	  window.postMessage(['message', 'this is a test'], window.location.href);
	});


	it('should emit post messages', function(done) {
		window.addEventListener('message', function(ev) {
			assert.equal(ev.data[1], 'this is a test');
			done();
		});

		//emit locally: post.on will be executed twice
		post.emit('message', 'this is a test')();
	});
	
});

// describe("Accepted origins", function() {
	
// });


