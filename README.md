post
====

Emitter-like component that enables safe cross origin communication. Its nice and clean API makes it easy to send messages to workers, extensions, iframes or cross origin web apps.

## Installation

    $ component install bredele/post

standalone:

```html
<script src="post.js"></script>
```

`Post` support all mainstream browsers and IE.

## API

`Post` inherits from '[Emitter](http://github.com/component/emitter)' and can be used as a regular 
emitter or post messages safely to a cross origin.

### Post(obj)

  `Post` instance:

```js
var Post = require('post');
var post = new Post();
post.emit('something');
```

### .emit(event, ...)

   Emit an `event` with variable option args.

Send a message locally:

```js
post.emit('message');
```

Send a message to a cross origin (`default` is window origin):

```js
post.emit('message')(); //same window origin

post.emit('message')('http://otherdomain.org'); //cross origin
```

### .on(event, fn)

   Register and execute handler `fn` when `event` is received 
   from same or cross origin.

```js
post.on('message', function() {
  //do something
});
```

### .off(event, fn)

  * Pass `event` and `fn` to remove a listener.
  * Pass `event` to remove all listeners on that event.
  * Pass nothing to remove all listeners on all events.


### .dispose()

  Memory safety (remove cross origin listeners).


## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
