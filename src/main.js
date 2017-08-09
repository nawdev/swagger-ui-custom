import js_yaml from 'js-yaml'

import SwaggerUIBundle from 'swagger-ui-dist/swagger-ui-bundle.js'
import SwaggerUIStandalonePreset from 'swagger-ui-dist/swagger-ui-standalone-preset.js'


document.addEventListener("DOMContentLoaded", event => {
  get_spec('/service.yaml')
    .then(init_app)
})

const init_app = spec => {
  SwaggerUIBundle({
    // url: "/service.yaml",
    spec: spec,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })
}


const set_host = spec => {
  spec.host = location.host
  return spec
}


const get_spec = url => (
  fetch(url)
    .then(response => response.text())
    .then(yaml => js_yaml.safeLoad(yaml))
    .then(spec => set_host(spec))
)
