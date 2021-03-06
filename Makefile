install:babel-cli, babel-core, babel-preset-env,babel-preset-stage-0
	npm install	

run:
	npx babel-node 'src/bin/hexlet.js' 10

start:
	npm run babel-node -- src/bin/brain-start/brain-games.js

start_even:
	npm run babel-node -- src/bin/brain-start/brain-even.js

start_calc:
	npm run babel-node -- src/bin/brain-start/brain-calc.js

start_gcd:
	npm run babel-node -- src/bin/brain-start/brain-gcd.js

start_balance:
	npm run babel-node -- src/bin/brain-start/brain-balance.js

start_progression:
	npm run babel-node -- src/bin/brain-start/brain-progression.js

start_prime:
	npm run babel-node -- src/bin/brain-start/brain-prime.js

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
