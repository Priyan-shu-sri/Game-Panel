import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


interface DataType{
  photo:ReactElement;
  name:string;
  price:number;
  stock: number;
  action: ReactElement;
}

const columns : Column<DataType>[]=[{
  Header:'photo',
  accessor:'photo',
},
{
  Header:'Name',
  accessor:'name',
},
{
  Header:'Price',
  accessor:'price',
},
{
  Header:'Stock',
  accessor:'stock',
},
{
  Header:'Action',
  accessor:'action',
},]

const img = '(https://www.pexels.com/photo/blue-sony-ps4-controller-on-black-surface-3945650/)';
const img2 = 'https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg';

const arr:DataType[] = [
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Valorant'/>,
    name: 'Valorant',
    price: 1000,
    stock: 10,
    action: <Link to='/admin/games/sajjknaskd'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='GTA'/>,
    name: 'Five',
    price: 1999,
    stock: 50,
    action: <Link to='/admin/games/sdaskdnkasjdn'>Manage</Link>,
  },
];
const games = () => {
const [data] = useState<DataType[]>(arr)
const Table = useCallback(TableHOC<DataType>(columns, data, 'dashboard-product-box', 'games', true),[]);
  return (
    <div className='admin-container'>
    <AdminSidebar />
    <main>{Table()}</main>
    <Link to='/admin/games/new' className="create-product-btn">
    <FaPlus /></Link>
  </div>
  )
}

export default games
