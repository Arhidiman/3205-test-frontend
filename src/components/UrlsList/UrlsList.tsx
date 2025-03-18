import { MouseEventHandler, useState } from "react";
import { Collapse } from "antd";
import { ActionButton } from "../Button/Button";
import { UrlStatistics } from "./UrlStatistics";
import { deleteUrl, redirectToOriginal } from "../../ApiClient/ApiClient";
import type { SetStateAction, Dispatch } from "react";
import type { IUrlDto } from "../../ApiClient/dto";

interface IUrlsList {
    urls: IUrlDto[]
    setUrls: Dispatch<SetStateAction<IUrlDto[] | []>>
}

export const UrlsList: React.FC<IUrlsList> = ({ urls, setUrls }) => {
    
    const [activeKey, setActiveKey] = useState<string | string[]>([])
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null)

    const handleCollapseChange = (key: string | string[]) => {
        setActiveKey(key)
    }

    const deleteLink = async (shortUrl: string) => {
        await deleteUrl(shortUrl)
        setUrls(urls.filter(url => url.shortUrl !== shortUrl))
    }

    const redirect: MouseEventHandler<HTMLAnchorElement> = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        const shortUrl = e.currentTarget.textContent || ''
        const originalUrl = await redirectToOriginal(shortUrl)
        window.open(originalUrl, '_blank')
        setSelectedUrl(shortUrl)
    }

    const urlCollapsePanel = (urlItem: IUrlDto) => (
        <Collapse.Panel 
            header={<a href={urlItem.shortUrl} onClick={redirect} >{urlItem.shortUrl}</a>} 
            key={urlItem.shortUrl} 
            extra={<ActionButton text="Удалить ссылку" type="delete" actionHandler={() => deleteLink(urlItem.shortUrl)}/>}>
            <UrlStatistics urlItem={urlItem} selectedUrl={selectedUrl}/>
        </Collapse.Panel>    
    )

    return urls && urls.length ? (
        <Collapse activeKey={activeKey} onChange={handleCollapseChange}>
            {urls.map(urlCollapsePanel )}
        </Collapse>
    ) : (
        <p>На данный момент ни одной ссылки не создано</p>
    )
}
