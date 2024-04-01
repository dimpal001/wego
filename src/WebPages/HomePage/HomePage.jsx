import { Button } from '../../Components/Custom'
import HeroImg from '../../assets/hero_img.svg'
import CarImg from '../../assets/car.svg'
import CityImg from '../../assets/city.svg'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    window.document.title = 'WeGo'
  }, [])
  return (
    <div className='md:px-64'>
      <div>
        {/* Section 1 */}
        <div className='h-[560px] px-8 max-sm:h-[662px] flex max-sm:flex-col-reverse items-center'>
          <div className='md:w-[50%]'>
            <p className='text-4xl md:text-5xl font-extrabold py-5'>
              India&apos;s largest bike <br /> taxi service
            </p>
            <p className='flex text-slate-700 text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ut
              distinctio ex nisi minima vel vitae incidunt laudantium aut ipsam
              earum animi exercitationem error, voluptate delectus, dicta unde
              id ad.
            </p>
            <div className='flex max-sm:justify-between gap-3 py-9'>
              <Button title={'Download WeGo'} />
              <Button bg={'bg-slate-800'} title={'Sign-up as driver'} />
            </div>
          </div>
          <div className='md:w-[50%]'>
            <img className='py-10' src={HeroImg} width={'100%'} alt='' />
          </div>
        </div>

        {/* Section 2 */}
        <div className='px-8 flex max-sm:flex-col-reverse'>
          <div className='md:w-[50%]'>
            <img src={CarImg} width={'100%'} className='py-10' alt='' />
          </div>
          <div className='md:w-[50%]'>
            <p className='text-4xl font-extrabold py-5'>Safety for all.</p>
            <p className='flex text-lg max-sm:text-justify'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              exercitationem voluptatibus tempora doloremque eveniet fugit
              mollitia magni animi, hic aliquam corporis minima provident
              repellat sed veniam perspiciatis! Similique, temporibus minus.
            </p>
            <div className='flex max-sm:justify-between gap-3 py-5'>
              <Button title={'Know more'} />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className='px-8 md:py-14'>
          <div>
            <p className='text-3xl font-extrabold py-5 text-center'>
              Know Us Better
            </p>
            <p className='flex text-lg text-slate-700 text-center md:px-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              dicta nemo corporis? Ipsum a eveniet ipsam, similique expedita in
              ex quidem aut dolorum facilis. Perspiciatis doloribus beatae
              laboriosam, dolores eos id magni reiciendis unde quis.
            </p>
            <div className='flex justify-center gap-3 py-5 md:py-8'>
              <Button title={'Read more here'} />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className='max-sm:bg-[#d9fcf4] py-5 pb-8 px-10'>
          <div className='flex max-sm:flex-col'>
            <div>
              <p className='text-3xl font-extrabold py-5 max-sm:text-center'>
                Our Impact
              </p>
              <p className='flex text-lg text-slate-700 max-sm:text-center md:pr-60'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio suscipit voluptate sunt impedit ducimus
                exercitationem qui ullam.
              </p>
            </div>
            <div className='flex py-7 flex-col items-center gap-10'>
              <div className='flex gap-10'>
                <ImpactCard title={'25 M'} desc={'Downloads'} />
                <ImpactCard title={'100 +'} desc={'Cities'} />
              </div>
              <div className='flex gap-10'>
                <ImpactCard title={'1 + M'} desc={'Customers'} />
                <ImpactCard title={'10 + M'} desc={'Captains'} />
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-3 py-5'>
            <Button title={'Read more here'} />
          </div>
        </div>

        {/* Section 5 */}
        <div className='px-8 py-7 flex max-sm:flex-col-reverse pb-10'>
          <div className='md:w-[50%]'>
            <img src={CityImg} width={'100%'} className='py-10' alt='' />
          </div>
          <div className='md:w-[50%]'>
            <p className='text-3xl font-extrabold py-5 max-sm:text-center'>
              WeGo Business Solutions
            </p>
            <p className='flex text-lg text-slate-700 max-sm:text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              iste ab non numquam asperiores illo ipsam corporis et officia
              praesentium eveniet libero quos veritatis sequi porro fuga nulla
              vero ipsa, labore nihil debitis? Nulla, veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ImpactCard = ({ title, desc }) => {
  return (
    <div className='bg-white border border-primary rounded-full w-[120px] h-[120px] flex flex-col items-center justify-center'>
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  )
}

export default HomePage
