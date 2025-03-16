import { useState } from 'react'
import { AppTitle } from './components/AppTitle/AppTitle'
import { UrlConstructorForm } from './components/AppHeader/UrlConstructorForm'
import { UrlsList } from './components/UrlsList/UrlsList'
import './App.css'

function App() {

    const [count, setCount] = useState(0)

    return (
        <div className='app-container'>
            <AppTitle/>
            <UrlConstructorForm/>
            <UrlsList/>
        </div>
    )
}

export default App
