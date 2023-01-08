import './featured.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon className='icon' />
      </div>
      <div className="bottom">
        <div className="featuredChat">
        <CircularProgressbar value={70} text={'70%'} strokeWidth={4}/>
        </div>
      </div>
    </div>
  )
}

export default Featured