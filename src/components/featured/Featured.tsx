import './featured.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon className='icon' />
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Featured