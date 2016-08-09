
test:
	@./node_modules/.bin/mocha \
		--require co-mocha \
		--reporter spec

.PHONY: test
