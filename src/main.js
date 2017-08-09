import js2yml from 'js-yaml'

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


const get_yaml = url => {
  fetch(url)
    .then(yaml => {
      console.log(js2yml.load(yaml))
  })
}


get_yaml('/service.yaml')
