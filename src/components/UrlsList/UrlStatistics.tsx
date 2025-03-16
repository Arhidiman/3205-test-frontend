import { Collapse, Table } from "antd"
import type { TableProps } from "antd"
import type { IUrlDto } from "../../ApiClient/dto"

export const UrlStatistics = (urlItem: IUrlDto, i: number) => {


    
    const columns: TableProps<IUrlDto>['columns'] = [
        {
            title: 'IP',
            dataIndex: 'full_price',
            key: 'full_price',
        },
        {
            title: 'Время перехода по ссылке',
            dataIndex: 'created_at',
            key: 'created_at',
        }
    ]
    

    return (
        <Collapse.Panel header={urlItem.alias} key={i}>
            <Table 
                dataSource={[]}  
                columns={[]}
            >
           </Table>
        </Collapse.Panel>
    )
}