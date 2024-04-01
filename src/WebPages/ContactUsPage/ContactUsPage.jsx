import { useEffect } from 'react'
import { Button, Input, Textarea } from '../../Components/Custom'

const ContactUsPage = () => {
  useEffect(() => {
    window.document.title = 'Contact Us'
  }, [])
  return (
    <div>
      <div className='md:px-64'>
        <div>
          <div className='px-8'>
            <div>
              <p className='text-4xl md:text-5xl font-extrabold md:pb-14 py-10'>
                You can find us here
              </p>
              <p className='max-sm:text-center md:text-xl md:pb-3 text-slate-600'>
                Find help for your queries here:
              </p>
              <div className='flex max-sm:flex-col gap-10'>
                <div className='lg:w-[60%]'>
                  <Input
                    type={'text'}
                    placeholder={'Enter your name'}
                    label={'Name'}
                  />
                  <Input
                    type={'email'}
                    placeholder={'Enter your email'}
                    label={'Email Address'}
                  />
                  <Input
                    type={'number'}
                    placeholder={'Enter your mobile number'}
                    label={'Mobile Number'}
                  />
                  <Textarea
                    label={'Comment'}
                    placeholder={'Enter your comment'}
                  />
                  <Button title={'Submit'} width={'w-full'} />
                </div>
                <div className='lg:w-[40%] flex flex-col gap-10'>
                  <div>
                    <p className='text-xl font-extrabold py-2'>
                      Registered Office Address:
                    </p>
                    <p className='flex text-lg text-slate-700  text-justify'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptas exercitationem voluptatibus tempora doloremque
                      eveniet fugit mollitia magni animi.
                    </p>
                  </div>
                  <div>
                    <p className='text-xl font-extrabold py-2'>Head Office:</p>
                    <p className='flex text-lg  text-slate-700 text-justify'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptas exercitationem voluptatibus tempora doloremque
                      eveniet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-8 py-10 flex flex-col gap-5'></div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
