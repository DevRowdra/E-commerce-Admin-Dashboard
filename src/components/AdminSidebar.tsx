
import {  AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { RiDashboardFill, RiShoppingBag2Fill } from "react-icons/ri"
import { Link,  useLocation } from "react-router-dom"

const AdminSidebar = () => {
  const location=useLocation()
  console.log(location.pathname)
  return (
    <aside>
        <h2>Logo..</h2>
        <div>
            <h5>Dashboard</h5>
            <ul>
               <li style={
                {backgroundColor:location.pathname.includes('admin/dashboard')?'rgba(0,115,255,0.1)':'white'}
               } >
                <Link to={"/admin/dashboard"}>
                
                <RiDashboardFill></RiDashboardFill>
                Dashboard
                </Link>
               </li>
               <li >
                <Link to={"/admin/products"}>
                
                <RiShoppingBag2Fill></RiShoppingBag2Fill>
                Product
                </Link>
               </li>
               <li >
                <Link to={"/admin/customers"}>
                
                <IoIosPeople></IoIosPeople>
                Customer
                </Link>
               </li>
               <li >
                <Link to={"/admin/transaction"}>
                
                <AiFillFileText></AiFillFileText>
                Transaction 
                </Link>
               </li>
            </ul>
        </div>
    </aside>
  )
}
// interface LiProps {
//   url:string,
//   location: Location
//   Icon:IconType
//   text: string
// }
// const Li=({url,location,Icon,text}:LiProps)=><li>
//   <Link to={url}>
//     <Icon></Icon>
//     {text}</Link>

// </li>

export default AdminSidebar