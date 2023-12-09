import { Link } from "react-router-dom";
import user from '../../assets/user.png'

const Header = () => {
  return (
    <div className=" bg-secondary h-[72px] px-[40px] py-[0] flex items-center justify-between ">
        <Link to="/" >
        <div className="text-fontPrimary font-inter font-semibold text-[20px]">Movie App</div>
        </Link>
        <div className="w-[38px] h-[38px]">
            <img src={user} className="w-[38px] h-[38px]" alt="user" />
        </div>
    </div>
  )
}

export default Header