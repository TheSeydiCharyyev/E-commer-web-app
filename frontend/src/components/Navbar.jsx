import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={assets} alt="" />
        </div>
    )
}

export default Navbar