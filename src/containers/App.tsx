import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import WebNoteApp from 'containers/WebNoteApp'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WebNote</title>
      </Helmet>
      <WebNoteApp />
    </HelmetProvider>
  )
}

export default App
