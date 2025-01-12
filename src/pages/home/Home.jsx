// import Topbar from "../../components/topbar/Topbar";
// import SideBar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css";

// export default function Home() {
//   return (
//     <div>
//       <Topbar />
//       <div className="homeContainer">
//         <SideBar />
//         <Feed />
//         <Rightbar />
//       </div>
//     </div>
//   );
// }

import Topbar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css';

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
