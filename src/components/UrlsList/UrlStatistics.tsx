import { useState } from "react"
import { Collapse, Table } from "antd"
import { useFetchUrlStatistics } from "../../hooks/useFetchUrlStatistics"
import type { TableProps } from "antd"
import type { IUrlDto, IUrlStatisticsDto } from "../../ApiClient/dto"

export const UrlStatistics: React.FC<{urlItem: IUrlDto, selectedUrl: string | null}> = ({urlItem, selectedUrl}) => {

    const columns: TableProps<IUrlStatisticsDto>['columns'] = [
        {
            title: 'IP',
            dataIndex: 'ip',
            key: 'ip',
        },
        {
            title: 'Время перехода по ссылке',
            dataIndex: 'createdAt',
            key: 'createdAt',
        }
    ]
    
    const { statistics, refetch } = useFetchUrlStatistics(urlItem.shortUrl)

    if (selectedUrl === urlItem.shortUrl) {
        refetch()
    }

    return (
        <Table 
            dataSource={statistics}  
            columns={columns}
        >
        </Table>
    )
}