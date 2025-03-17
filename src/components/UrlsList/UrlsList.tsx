import { MouseEventHandler, useState } from "react";
import { Collapse } from "antd";
import { ActionButton } from "../Button/Button";
import { UrlStatistics } from "./UrlStatistics";
import { deleteUrl } from "../../ApiClient/ApiClient";
import type { SetStateAction, Dispatch } from "react";
import type { IUrlDto } from "../../ApiClient/dto";

interface IUrlsList {
    urls: IUrlDto[]
    setUrls: Dispatch<SetStateAction<IUrlDto[] | []>>
}

export const UrlsList: React.FC<IUrlsList> = ({ urls, setUrls }) => {
    
    const [activeKey, setActiveKey] = useState<string | string[]>([])

    const handleCollapseChange = (key: string | string[]) => {
        setActiveKey(key)
    }

    const stopPropagation: MouseEventHandler = (e) => e.stopPropagation()

    const deleteLink = async (shortUrl: string) => {
        await deleteUrl(shortUrl)
        setUrls(urls.filter(url => url.shortUrl !== shortUrl))
    }


    return urls && urls.length ? (
        <Collapse activeKey={activeKey} onChange={handleCollapseChange}>
            {
            urls.map((urlItem) => 
                <Collapse.Panel 
                    header={<a onClick={stopPropagation} >{urlItem.shortUrl}</a>} 
                    key={urlItem.shortUrl} 
                    extra={<ActionButton text="Удалить ссылку" type="delete" actionHandler={() => deleteLink(urlItem.shortUrl)}/>}>
                    <UrlStatistics urlItem={urlItem} />
                </Collapse.Panel>            
                )
            }
        </Collapse>
    ) : (
        <p>На данный момент ни одной ссылки не создано</p>
    )
}
