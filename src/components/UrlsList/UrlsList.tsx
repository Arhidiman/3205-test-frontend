import { Collapse } from "antd";
import { useFetchUrls } from "../../hooks/useFetchUrls";
import { UrlStatistics } from "./UrlStatistics";
import type { CollapseProps } from "antd";
import type { IUrlDto } from "../../ApiClient/dto";


export const UrlsList: React.FC = () => {
    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'This is panel header 1',
          children: <p>{1}</p>
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{2}</p>
        },
        {
          key: '3',
          label: 'This is panel header 3',
          children: <p>{3}</p>
        },
      ];
      
    const { urls } = useFetchUrls()

    console.log(urls)

  
    return (
        urls && urls.length 
        ? <Collapse>{urls.map(UrlStatistics)}</Collapse>
        : <p>На данный момент ни одной ссылки не создано</p>
    )
}