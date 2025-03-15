import {
    PlusOutlined, 
    MinusOutlined, 
    EditOutlined, 
    CheckOutlined, 
    DeleteOutlined, 
    ArrowDownOutlined,
    ArrowLeftOutlined,
    MoneyCollectFilled
} from "@ant-design/icons"
import {Button} from "antd"
import type {MouseEventHandler} from "react";
// import './ActionButton.scss'

export type TActions = 'add' | 'reduce' | 'edit' | 'check' | 'delete' | 'complete' | 'down' | 'left' | 'pay'

export interface IActionButton {
    className?: string
    text?: string
    actionHandler?: MouseEventHandler<HTMLElement>
    type?: TActions,
    disabled?: boolean,
    size?: 'large' | 'middle' | 'small',
    ghost?: boolean
}

export const ActionButton = ({className, text, actionHandler, type, disabled, size, ghost}: IActionButton) =>  {

    const getActionIcon = (type: TActions | undefined) => {
        switch (type) {
            case 'add': return <PlusOutlined/>
            case 'reduce': return <MinusOutlined/>
            case 'edit': return <EditOutlined/>
            case 'check': return <CheckOutlined/>
            case 'delete': return <DeleteOutlined/>
            case 'down': return <ArrowDownOutlined/>
            case 'left': return <ArrowLeftOutlined/>
            case 'pay': return <MoneyCollectFilled/>
        }
    }

    return (
        <Button
            className={`action-button ${className && className}`}
            onClick={actionHandler}
            disabled={disabled}
            size={size}
            ghost={ghost}
        >
            {text}
            {getActionIcon(type)}
        </Button>
    )
}
