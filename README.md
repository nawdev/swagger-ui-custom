# swagger-local

customized build of `swagger-ui` for api-served docs and tests


# usage

```
npm install
npm -s run build
```

within your api serve `dist/index.html` at some url and relative to it `dist/doc.js` and
`doc-style.js`.


## example

- `/somepath` serves `dist/index.html`
- `/somepath/doc.js` serves `dist/doc.js`


## constraints

api must provide

- `/service.yaml`
