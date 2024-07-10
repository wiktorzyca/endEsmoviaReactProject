import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import App from './App.tsx'
import './index.css'
import { MyProvider } from "./app/ProviderContextComponent.jsx";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <MyProvider>
              <MantineProvider>
                  <App />
              </MantineProvider>
          </MyProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
