import { Collapse } from "antd";
import type { CollapseProps } from "antd";

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
      
  
    return (
        
        items.length 
        ? <Collapse items={items} defaultActiveKey={['1']} onChange={(e) => console.log(e)} />
        : <p>На данный момент ни одной ссылки не создано</p>
    )
      

}