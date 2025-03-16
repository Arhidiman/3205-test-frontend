import { useState } from "react";
import { Collapse } from "antd";
import { ActionButton } from "../Button/Button";
import { useFetchUrls } from "../../hooks/useFetchUrls";
import { UrlStatistics } from "./UrlStatistics";

export const UrlsList: React.FC = () => {
    const { urls } = useFetchUrls();

    const [activeKey, setActiveKey] = useState<string | string[]>([]);

    const handleCollapseChange = (key: string | string[]) => {
        setActiveKey(key);
    };
    return urls && urls.length ? (
        <Collapse activeKey={activeKey} onChange={handleCollapseChange}>
            {
            urls.map((urlItem) => 
                <Collapse.Panel header={urlItem.shortUrl} key={urlItem.shortUrl} extra={<ActionButton text="Удалить ссылку" type="delete"/>}>
                    <UrlStatistics urlItem={urlItem} />
                </Collapse.Panel>            
                )
            }
        </Collapse>
    ) : (
        <p>На данный момент ни одной ссылки не создано</p>
    );
};
