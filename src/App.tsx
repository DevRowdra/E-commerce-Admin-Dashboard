
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import {Suspense, lazy} from 'react';
import Loader from "./components/Loader";

const  Deshboard =lazy(()=>import("./pages/Deshboard")) ;
const  Transaction =lazy(()=>import("./pages/Transaction")) ;
const  Customers =lazy(()=>import("./pages/Customers")) ;
const  Products =lazy(()=>import("./pages/Products")) ;

function App() {
 

  return (
    <Router>
     <Suspense fallback={<Loader/>}>
     <Routes>
      <Route path="/admin/deshboard" element={<Deshboard/>}> </Route>
      <Route path="/admin/products" element={<Products></Products>}> </Route>
      <Route path="/admin/transaction" element={<Transaction></Transaction>}></Route>
      <Route path="/admin/customers" element={<Customers/>}></Route>

      
      {/* charts */}

      {/* app */}
     </Routes>
     </Suspense>
      
    </Router>
  )
}

export default App
