// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
// подключаем роутер (чтобы можно было делать разные страницы)
import { BrowserRouter } from 'react-router-dom'

// подключаем Redux Provider (чтобы всё приложение видело store)
import { Provider } from 'react-redux'

// импортируем наш store (где хранится состояние)
import { store } from './redux/store.js'

// создаём "корень", куда будем рендерить приложение
const root = ReactDOM.createRoot(document.getElementById('root'))

// рендерим приложение
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)