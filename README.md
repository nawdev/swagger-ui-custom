# swagger-local

customized build of `swagger-ui` for api-served docs and tests


# usage

```
npm install
npm -s run build
```

within your api serve `index.html` at some url and relative to it under `documentation-assets`
the content of directory `dist`.


## example

- `/somepath` serves `index.html`
- `/somepath/documentation-assets/main.js` serves `dist/main.js`


## constraints

api must provide

- `/service.yaml`
