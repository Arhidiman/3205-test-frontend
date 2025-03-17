import {
    PlusOutlined,
    DeleteOutlined, 
} from "@ant-design/icons"
import {Button} from "antd"
import type {MouseEventHandler} from "react";

export type TActions = 'add' | 'delete'

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
            case 'delete': return <DeleteOutlined/>
        }
    }

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
        e.stopPropagation()
        actionHandler?.(e)
    }

    return (
        <Button
            className={`action-button ${className || ''}`}
            onClick={handleClick}
            disabled={disabled}
            size={size}
            ghost={ghost}
            type="primary"
        >
            {text}
            {getActionIcon(type)}
        </Button>
    )
}
