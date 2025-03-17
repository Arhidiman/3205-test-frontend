import { useState } from 'react'
import { ConfigProvider } from 'antd';
import { AppTitle } from './components/AppTitle/AppTitle'
import { UrlConstructorForm } from './components/AppHeader/UrlConstructorForm'
import { UrlsList } from './components/UrlsList/UrlsList'
import type { IUrlDto } from './ApiClient/dto';
import './App.css'

function App() {

    const [urls, setUrls] = useState<IUrlDto[] | []>([])

    return (

      <ConfigProvider>
        <div className='app-container'>
            <AppTitle/>
            <UrlConstructorForm setUrls={setUrls}/>
            <UrlsList urls={urls}/>
        </div>
      </ConfigProvider>
        
    )
}

export default App
