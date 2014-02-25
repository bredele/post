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
		assert.equal(typeof post.on, 'function');
		assert.equal(typeof post.once, 'function');		
		assert.equal(typeof post.emit, 'function');
		assert.equal(typeof post.off, 'function');
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
	
});

