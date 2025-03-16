import { useState } from "react"
import { Collapse, Table } from "antd"
import { useFetchUrlStatistics } from "../../hooks/useFetchUrlStatistics"
import type { TableProps } from "antd"
import type { IUrlDto, IUrlStatisticsDto } from "../../ApiClient/dto"

export const UrlStatistics: React.FC<{urlItem: IUrlDto}> = ({urlItem}) => {

    const [urlStats, setStats] = useState()

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
    
    const { statistics } = useFetchUrlStatistics(urlItem.shortUrl)

    console.log(statistics, 'STATISTICS !!!!!')

    return (
        <Table 
            dataSource={statistics}  
            columns={columns}
        >
        </Table>
    )
}