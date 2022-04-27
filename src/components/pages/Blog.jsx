import Prism from 'prismjs'
import React from 'react'

export default function Blog () {
  const code = `const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render( <br />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    );`
    const html = Prism.highlight(code, Prism.languages.React, 'javascript')
  return (
    <div>
      <pre>
        <code>
          {html}
        </code>
      </pre>
      Blog
    </div>
  )
}
