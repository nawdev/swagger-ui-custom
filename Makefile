dev:
	npm -s run dev

build: build-clean
	npm -s run build

build-clean:
	rm -rf dist

clean: build-clean
	rm -rf node_modules
