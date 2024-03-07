
import { IconType } from "react-icons"
import {  AiFillFileText } from "react-icons/ai"
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { RiCoupon2Fill, RiDashboardFill, RiShoppingBag2Fill } from "react-icons/ri"
import { Link,  Location,  useLocation } from "react-router-dom"

const AdminSidebar = () => {
  const location=useLocation()
  console.log(location.pathname)
  return (
    <aside>
        <h2>Logo..</h2>
       <DivOne location={location}/>
        {/* Charts */}
        <DivTwo location={location}/>

        <DivThree location={location}/>
    </aside>
  )
}

const DivOne=({location}:{location:Location})=>( <div>
  <h5>Dashboard</h5>
  <ul>
    <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} ></Li>
    <Li url="/admin/products" text="Products" Icon={RiShoppingBag2Fill} location={location} ></Li>
     
    <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={location} ></Li>
    <Li url="/admin/transaction" text="Transactions" Icon={AiFillFileText} location={location} ></Li>
    
  </ul> 
  </div>
  )

const DivTwo=({location}:{location:Location})=>(<div>
  <h5>Charts</h5>
  <ul>
    <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location} ></Li>
    <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location} ></Li>
     
    <Li url="/admin/chart/line" text="Line " Icon={FaChartLine} location={location} ></Li>
   
    
  </ul> 
</div>)
const DivThree=({location}:{location:Location})=>(<div>
  <h5>Apps</h5>
  <ul>
    <Li url="/admin/app/Stopwatch" text="Stopwatch" Icon={FaStopwatch} location={location} ></Li>
    <Li url="/admin/app/coupon" text="Coupon" Icon={RiCoupon2Fill} location={location} ></Li>
     
    <Li url="/admin/app/toss" text="Toss " Icon={FaGamepad} location={location} ></Li>
  
    
  </ul> 
</div>)

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