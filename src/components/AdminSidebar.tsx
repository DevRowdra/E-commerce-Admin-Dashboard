
import { IconType } from "react-icons"
import {  AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { RiDashboardFill, RiShoppingBag2Fill } from "react-icons/ri"
import { Link,  Location,  useLocation } from "react-router-dom"

const AdminSidebar = () => {
  const location=useLocation()
  console.log(location.pathname)
  return (
    <aside>
        <h2>Logo..</h2>
        <div>
            <h5>Dashboard</h5>
            <ul>
              <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} ></Li>
              <Li url="/admin/products" text="Products" Icon={RiShoppingBag2Fill} location={location} ></Li>
               
              <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={location} ></Li>
              <Li url="/admin/transaction" text="Transactions" Icon={AiFillFileText} location={location} ></Li>
              
            </ul> 
        </div>
        {/* Charts */}
        <div>
            <h5>Charts</h5>
            <ul>
              <Li url="/admin/dashboard" text="Bar" Icon={RiDashboardFill} location={location} ></Li>
              <Li url="/admin/products" text="Pie" Icon={RiShoppingBag2Fill} location={location} ></Li>
               
              <Li url="/admin/customers" text="Line " Icon={IoIosPeople} location={location} ></Li>
              <Li url="/admin/transaction" text="Transactions" Icon={AiFillFileText} location={location} ></Li>
              
            </ul> 
        </div>
    </aside>
  )
}
interface LiProps {
  url:string,
  location: Location
  Icon:IconType
  text: string
}
const Li=({url,location,Icon,text}:LiProps)=><li 

style={
  {backgroundColor:location.pathname.includes(url)?'rgba(0,115,255,0.1)':'white'}
 }

>
  <Link  style={
                {color:location.pathname.includes(url)?'rgba(0,115,255,)':'black'}
               } to={url}>
    <Icon></Icon>
    {text}</Link>

</li>

export default AdminSidebar