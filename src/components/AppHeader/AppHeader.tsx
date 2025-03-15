import React, { useState } from 'react'
import { Input, Space } from 'antd'
import { ActionButton } from '../Button/Button'

export const UrlInput: React.FC = () =>  {

    const [url, setUrl] = useState('')

    return (
        <>
            <Space direction='horizontal'>
                <Input placeholder='Введите URL'/>
                <ActionButton type='add'/>
            </Space>
        </>
    )
}

