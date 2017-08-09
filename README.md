# swagger-local

swagger-ui variant for api-served docs and tests

attention: this is a hack, use with caution.

ahh, and not much docu...


# usage

```
npm install
npm -s run build
```

within your api serve `index.html` at some url and relative to it under `documentation-assets`
the content of directory `dist`.

## example

`/somepath` serves `index.html`
`/somepath/documentation-assets/main.js` serves `dist/main.js`
