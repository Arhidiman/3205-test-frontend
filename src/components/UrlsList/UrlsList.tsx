import { useState } from "react";
import { Collapse } from "antd";
import { ActionButton } from "../Button/Button";
import { UrlStatistics } from "./UrlStatistics";
import type { IUrlDto } from "../../ApiClient/dto";

interface IUrlsList {
    urls: IUrlDto[]
}

export const UrlsList: React.FC<IUrlsList> = ({ urls }) => {
    
    const [activeKey, setActiveKey] = useState<string | string[]>([]);
    const handleCollapseChange = (key: string | string[]) => {
        setActiveKey(key);
    }

    return urls && urls.length ? (
        <Collapse activeKey={activeKey} onChange={handleCollapseChange}>
            {
            urls.map((urlItem) => 
                <Collapse.Panel 
                    header={<a onClick={(e) => e.stopPropagation()} >{urlItem.shortUrl}</a>} 
                    key={urlItem.shortUrl} 
                    extra={<ActionButton text="Удалить ссылку" type="delete"/>}>
                    <UrlStatistics urlItem={urlItem} />
                </Collapse.Panel>            
                )
            }
        </Collapse>
    ) : (
        <p>На данный момент ни одной ссылки не создано</p>
    )
}
