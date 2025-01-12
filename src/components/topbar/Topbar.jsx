import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
         <div className="topbarConatiner">
        
         <div className="topbarLeft">
            <span className="logo">FackBook</span>
         </div>

         <div className="topbarCenter">
         <div className="searchBar">
        <SearchIcon className="searchIcon"/>
        <input placeholder="search for friends,post or video" className="searchInput"/>
         </div>
         
         </div>

        <div className="topbarRight">
           <div className="topbarlinks">
            <span className="topbarlinks">Homepage</span>
            <span className="topbarlinks">Timeline</span>
           </div>
           <div className="topbaricons">
            <div className="topbarIconItems">
                <PersonIcon/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItems">
                <ChatIcon />
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItems">
                <NotificationsIcon />
                <span className="topbarIconBadge">3</span>
             </div>
            
             <img src="/assets/person/1.jpg" alt="" className="topbarimage" />
            </div>
        </div>

    </div>
  )
};
