import { Table } from "antd"
import { useFetchUrlStatistics } from "../../hooks/useFetchUrlStatistics"
import type { TableProps } from "antd"
import type { IUrlDto, IUrlStatisticsDto } from "../../ApiClient/dto"
import { useEffect } from "react"

export const UrlStatistics: React.FC<{urlItem: IUrlDto, selectedUrl: string | null}> = ({urlItem, selectedUrl}) => {

    const getDateAndTimeFromISO = (ISODate: string) => {
        const date = new Date(ISODate)
    
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear();
        
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
    
        return `${day}.${month}.${year} ${hours}:${minutes}`
    }

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
            render: (ISODate) => {
                return getDateAndTimeFromISO(ISODate)
            }
        }
    ]
    
    const { statistics, refetch } = useFetchUrlStatistics(urlItem.shortUrl)

    useEffect(() => {
        if (selectedUrl === urlItem.shortUrl) {
            refetch()
        }
    }, [selectedUrl, urlItem])   

    return (
        <>
            {statistics && statistics.length > 0 && <p>Всего переходов: {statistics.length}</p>}
            <Table 
                dataSource={statistics.slice(0, 5)}  
                columns={columns}
                rowKey="ip"
            >
            </Table>
        </>
    )
}
