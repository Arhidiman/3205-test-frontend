import React, { useState } from 'react'
import { Input, Space, DatePicker, Form } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { ActionButton } from '../Button/Button'

export const UrlConstructorForm: React.FC = () =>  {

    const [url, setUrl] = useState('')

    const [form] = useForm()

    const onConfirm = async () => {
        const values = await form.validateFields()
        console.log(values)
    }


    const originalUrlRules = [{ required: true, message: 'Введите ссылку'}]
    const aliasRules = [{ max: 20, message: 'Количество символов не должно быть больше 20'}]

    return (
      
        <Form form={form} layout='horizontal'>
           
                <Form.Item rules={originalUrlRules} name='url'>
                    <Input placeholder='Введите URL'/>
                </Form.Item>

                <Form.Item rules={aliasRules} name='alias'>
                    <Input placeholder='Краткая ссылка'/>
                </Form.Item>

                <Form.Item name='date'>
                    <DatePicker onChange={(e) => console.log(e)} placeholder="Дата действия"/>

                </Form.Item>

                <Form.Item>
                    <ActionButton type='add' text='Создать уникальную ссылку' actionHandler={onConfirm}/>
                </Form.Item>
     
        </Form>
    )
}

