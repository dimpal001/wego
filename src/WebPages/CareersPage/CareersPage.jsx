import { useEffect } from 'react'
import WorkImg from '../../assets/work.svg'
const CareersPage = () => {
  useEffect(() => {
    window.document.title = 'Recruitment & Career'
  }, [])
  return (
    <div>
      <div className='md:px-64'>
        <div>
          <div className='px-8'>
            <div>
              <div className='flex max-sm:flex-col'>
                <div className='md:w-[50%] flex items-center'>
                  <div>
                    <p className='text-4xl font-extrabold max-sm:text-center pt-10 pb-5'>
                      Be a part of our team.
                    </p>
                    <p className='max-sm:text-center text-slate-500'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum, nobis.
                    </p>
                  </div>
                </div>
                <div className='md:w-[50%]'>
                  <img src={WorkImg} width={'100%'} className='py-7' alt='' />
                </div>
              </div>
              <div className='flex max-sm:flex-col py-10 pb-20 md:py-28 gap-12'>
                <WhyCard
                  no={'1'}
                  title={'Lorem'}
                  des={
                    'We pride ourselves on rewarding great work with great compensation.'
                  }
                />
                <WhyCard
                  no={'2'}
                  title={'Lorem'}
                  des={
                    'We pride ourselves on rewarding great work with great compensation.'
                  }
                />
                <WhyCard
                  no={'3'}
                  title={'Lorem'}
                  des={
                    'We pride ourselves on rewarding great work with great compensation.'
                  }
                />
              </div>
            </div>
          </div>
          <div className='px-8 py-10 mb-10 bg-light'>
            <div>
              <p className='text-3xl max-sm:text-center font-extrabold py-5'>
                What our employees say
              </p>
              <div className='flex max-sm:flex-col gap-5'>
                <EmployeCard
                  name={'Dimpal Das'}
                  position={'Designer'}
                  des={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellendus perferendis dolor mollitia nostrum inventore.'
                  }
                />
                <EmployeCard
                  name={'Dimpal Das'}
                  position={'Designer'}
                  des={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellendus perferendis dolor mollitia nostrum inventore.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhyCard = ({ no, title, des }) => {
  return (
    <div>
      <div className='flex gap-3 items-start'>
        <div>
          <p className='text-2xl font-extrabold max-sm:text-center text-primary'>
            {no}
          </p>
          <p className='font-extrabold max-sm:text-center'>{title}</p>
          <p className='max-sm:text-center max-sm:px-6 md:text-justify'>
            {des}
          </p>
        </div>
      </div>
    </div>
  )
}

const EmployeCard = ({ name, position, des }) => {
  return (
    <div>
      <div className='bg-white p-10'>
        <div>
          <div>
            <p className='py-3'>{des}</p>
            <div>
              <strong className='text-primary'>{name}</strong>
              <p>{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersPage
