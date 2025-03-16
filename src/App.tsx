import { useState } from 'react'
import { UrlConstructorForm } from './components/AppHeader/UrlConstructorForm'
import { AppTitle } from './components/AppTitle/AppTitle'
import './App.css'

function App() {

    const [count, setCount] = useState(0)

    return (
        <div className='app-container'>
            <AppTitle/>
            <UrlConstructorForm/>
        </div>
    )
}

export default App
