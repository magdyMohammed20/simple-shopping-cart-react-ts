## (1) npm create vite@latest (And Select React & TS)

## (2) npm i react-query @mui/material @emotion/react @types/styled-components @mui/icons-material

## (3) React Query Configuration (main.tsx)

  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.tsx'
  import './index.css'
  import { QueryClient, QueryClientProvider } from 'react-query'

  const client = new QueryClient()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  )
