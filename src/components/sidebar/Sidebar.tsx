import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className='logo'>reactadmin</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
          <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
          <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
          <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
          <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
          <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
          <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
          <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
          <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar