import './index.css'
import './icons.css'
import './nprogress.css'
import 'prismjs-tomorrow-theme/prism-tomorrow.css'
import App from './App.svelte'
import wf from 'webfontloader'

const app = new App({
  target: document.body,
})

wf.load({
  google: {
    families: ['Roboto', 'Staatliches', 'Kaushan+Script', 'Source+Sans+Pro']
  }
})

export default app
