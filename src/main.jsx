import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // Убедись, что путь правильный
import './index.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Тут НЕ должно быть BrowserRouter */}
  </StrictMode>
);
