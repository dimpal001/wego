import { Link } from 'react-router-dom'
import { TbMenu } from 'react-icons/tb'
import { useState } from 'react'
import Modal from 'react-modal'
import { Button } from './Custom'

const customStyles = {
  content: {
    top: '24%',
    left: '61%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Navbar = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <div className='md:px-72 flex justify-between p-7'>
        <div className='flex items-center'>
          <Link to={'/'}>
            <p className='text-3xl font-extrabold text-primary'>WeGo</p>
          </Link>
        </div>
        <div>
          <div className='max-sm:hidden'>
            <NavItem />
          </div>
          <div className='md:hidden'>
            <TbMenu
              size={25}
              className='hover:text-primary'
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel='Example Modal'
            >
              <div className='p-1'>
                <NavItem onClick={closeModal} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavItem = ({ onClick }) => {
  return (
    <div className='flex items-baseline gap-8 max-sm:flex-col'>
      <Link className='hover:text-primary' onClick={onClick} to={'/'}>
        Home
      </Link>
      <Link className='hover:text-primary' onClick={onClick} to={'/about-us'}>
        About Us
      </Link>
      <Link className='hover:text-primary' onClick={onClick} to={'/careers'}>
        Careers
      </Link>
      <Link className='hover:text-primary' onClick={onClick} to={'/contact-us'}>
        Contact Us
      </Link>
      <Button bg={'bg-slate-900'} title={'Download App'} />
    </div>
  )
}

export default Navbar
