import js_yaml from 'js-yaml'

import SwaggerUIBundle from 'swagger-ui-dist/swagger-ui-bundle.js'
import SwaggerUIStandalonePreset from 'swagger-ui-dist/swagger-ui-standalone-preset.js'


window.onload = function () {



  // Build a system
  const ui = SwaggerUIBundle({
    url: "/service.yaml",
    // spec: xxx,
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

  window.ui = ui
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


get_spec('/service.yaml')
  .then(console.info)
