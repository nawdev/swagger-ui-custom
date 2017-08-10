import SwaggerUIBundle from 'swagger-ui-dist/swagger-ui-bundle.js'
import SwaggerUIStandalonePreset from 'swagger-ui-dist/swagger-ui-standalone-preset.js'


document.addEventListener("DOMContentLoaded", () => {
  init_app('/service.yaml')
})


const init_app = url => {
  SwaggerUIBundle({
    url: url,
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
