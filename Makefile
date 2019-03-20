install:babel-cli, babel-core, babel-preset-env,babel-preset-stage-0
	npm install	

run:
	npx babel-node 'src/bin/hexlet.js' 10

start:
	npm run babel-node -- src/bin/brain-games.js

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
