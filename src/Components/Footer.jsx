import { Link } from 'react-router-dom'
import StoreImg from '../assets/play_store.svg'
const Footer = () => {
  return (
    <div>
      <div className='md:px-72 p-7 bg-black'>
        <div className='flex justify-around max-sm:flex-col'>
          <div>
            <p className='text-white text-2xl'>Customer App</p>
            <div className=''>
              <Link>
                <img src={StoreImg} width={'160px'} alt='' />
              </Link>
            </div>
          </div>
          <div>
            <p className='text-white text-2xl py-2'>Navigation</p>
            <div className='text-white flex flex-col'>
              <Link className='hover:text-primary' to={'/'}>
                Home
              </Link>
              <Link className='hover:text-primary' to={'/about-us'}>
                About Us
              </Link>
              <Link className='hover:text-primary' to={'/careers'}>
                Careers
              </Link>
              <Link className='hover:text-primary' to={'/contact-us'}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className='text-white'>
          <div>
            <div className='h-[1px] bg-slate-600 my-5 w-full'></div>
          </div>
          <p className='text-center'>&copy; 2024 WeGo. All rights reserved </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
