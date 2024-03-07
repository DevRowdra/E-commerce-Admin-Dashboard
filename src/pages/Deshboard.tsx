import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"



// const userImg='https://cdn.vectorstock.com/i/1000x1000/66/56/man-face-emotive-icon-in-flat-style-vector-13466656.webp'
const Deshboard = () => {
  return (
    <div className="adminContainer" >
<AdminSidebar></AdminSidebar>
      <main className="dashboard">
<div className="bar">
  <BsSearch/>
  <input type="text" placeholder="Search for data"/>
  <FaRegBell/>
  {/* <img src={userImg} alt="user"  /> */}
</div>
1.15 min for video
      </main>
    </div>
  )
}

export default Deshboard