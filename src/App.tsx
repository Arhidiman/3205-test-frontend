import { useState } from 'react'
import { UrlInput } from './components/AppHeader/AppHeader'
import './App.css'

function App() {

    const [count, setCount] = useState(0)

    return (
        <div className='app-container'>
            <h1>Сервис сокращения URL</h1>
            <UrlInput/>
        </div>
    )
}

export default App
