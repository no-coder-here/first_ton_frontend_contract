import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifestUrl = "https://no-coder-here.github.io/first_ton_frontend_contract/tonconnect-mannifest.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl = {manifestUrl}>
    <App />
  </TonConnectUIProvider>
)