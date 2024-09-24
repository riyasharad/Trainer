import Layout from "./Layout";
import Main from "./Main";
import Attendance from "./pages/Attendance";
import Logout from "./pages/Logout";
import { Route, Routes } from "react-router-dom";
import MoreDetails from "./pages/MoreDetails";
import MoreDetails3 from "./pages/MoreDetails3";
import MoreDetails4 from "./pages/MoreDetails4";
import MoreDetails5 from "./pages/MoreDetails5";
import MoreDetails7 from "./pages/MoreDetails7";
import MoreDetails9 from "./pages/MoreDetails9";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} element={<Main/>} />
          <Route path='Attendance' element={<Attendance />} />
          <Route path='Logout' element={<Logout/> } />
          <Route path="MoreDetails" element={<MoreDetails/>}/>
          <Route path="MoreDetails3" element={<MoreDetails3/>}/>
          <Route path="MoreDetails4" element={<MoreDetails4/>}/>
          <Route path="MoreDetails5" element={<MoreDetails5/>}/>
          <Route path="MoreDetails7" element={<MoreDetails7/>}/>
          <Route path="MoreDetails9" element={<MoreDetails9/>}/>
        </Route>
      </Routes>
    </div>
  );
}