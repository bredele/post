build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

post.js: components
	@component build --standalone post --name post --out .	

.PHONY: clean
