import React, { useEffect } from 'react'
import { Input, DatePicker, Form } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { ActionButton } from '../Button/Button'
import { shortenUrl } from '../../ApiClient/ApiClient'
import { useFetchUrls } from '../../hooks/useFetchUrls'
import type { Dispatch, SetStateAction } from 'react'
import type { IShortenUrl, IUrlDto } from '../../ApiClient/dto'

interface IUrlConstructorForm {
    setUrls: Dispatch<SetStateAction<IUrlDto[] | []>>
}

export const UrlConstructorForm: React.FC<IUrlConstructorForm> = ({ setUrls }) =>  {

    const [form] = useForm()
    const { urls, refetch } = useFetchUrls()

    useEffect(() => {
        setUrls(urls)
    }, [urls])

    const onConfirm = async () => {
        const values: IShortenUrl = await form.validateFields()
        await shortenUrl(values)
        refetch()
    }

    const urlValidator = async (_: any, Url: string) => {
        try {
            new URL(Url)
        } catch(err) {
            throw new Error('Введите валидную ссылку')
        }
    }

    const originalUrlRules = [{ required: true, validator: urlValidator}]
    const aliasRules = [{ max: 20, message: 'Количество символов не должно быть больше 20'}]

    return (
        <Form form={form} layout='horizontal'>
            <Form.Item rules={originalUrlRules} name='originalUrl'>
                <Input placeholder='Введите URL'/>
            </Form.Item>
            <Form.Item rules={aliasRules} name='alias'>
                <Input placeholder='Краткая ссылка'/>
            </Form.Item>
            <Form.Item name='expiresAt'>
                <DatePicker onChange={(e) => console.log(e)} placeholder="Дата действия"/>
            </Form.Item>
            <Form.Item>
                <ActionButton type='add' text='Создать уникальную ссылку' actionHandler={onConfirm}/>
            </Form.Item>
        </Form>
    )
}

