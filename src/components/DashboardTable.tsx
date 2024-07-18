
import { Column } from 'react-table';
import TableHOC from './TableHOC';




interface DataType {
    id:string,
    quantity:number,
    discount:number,
    amount:number,
    status:string;
}

const columns:Column<DataType>[] =[{
    Header:'Player',accessor:'id',
},{
    Header:'Played',accessor:'quantity',
},{
    Header:'TotalPoint',accessor:'discount',
},{
    Header:'Score',accessor:'amount',
},{
    Header:'Result',accessor:'status',
},];



const DashboardTable = ({data=[]}:{data:DataType[]}) => {

  return TableHOC<DataType>(columns, data, 'transaction-box','Top Transaction') (

  );
};

export default DashboardTable
