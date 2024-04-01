import { useEffect } from 'react'
import { Button } from '../../Components/Custom'
import CarImg from '../../assets/car.svg'
import WorkImg from '../../assets/work.svg'

const AboutPage = () => {
  useEffect(() => {
    window.document.title = 'About Us'
  }, [])
  return (
    <div className='md:px-64'>
      <div>
        <div className='px-8 flex max-sm:flex-col'>
          <div className='md:w-[50%]'>
            <p className='text-5xl max-sm:text-4xl max-sm:text-center py-10'>
              India&apos;s Beloved <br />
              <strong>Bike Taxi Service</strong>
            </p>
            <p className='py-5 text-slate-700 text-lg max-sm:text-center'>
              <strong>We are not an option, we are a choice</strong> <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className='py-5 text-slate-700 text-lg max-sm:text-center'>
              <strong>
                What makes us different? <br />
              </strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              exercitationem voluptatibus tempora.
            </p>
          </div>
          <div className='md:w-[50%] flex items-center'>
            <img src={CarImg} width={'100%'} className='py-10' alt='' />
          </div>
        </div>
        <div className='px-8 py-20 flex max-sm:flex-col-reverse'>
          <div className='md:w-[50%]'>
            <img src={WorkImg} width={'100%'} className='py-10' alt='' />
          </div>
          <div className='md:w-[50%]'>
            <p className='text-3xl max-sm:text-center font-extrabold py-5'>
              Our success story
            </p>
            <p className='flex text-slate-700 text-lg max-sm:text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              exercitationem voluptatibus tempora doloremque eveniet fugit
              mollitia magni animi, hic aliquam corporis minima provident
              repellat sed veniam perspiciatis! Similique, temporibus minus.
            </p>
          </div>
        </div>
        <div className='px-8 py-10'>
          <div className='flex justify-center'>
            <Button title={'Work with us'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
