import { Link } from 'react-router-dom'
import { Button } from './Custom'

const Error = () => {
  return (
    <div>
      <div className='h-[700px] flex justify-center items-center'>
        <div>
          <p className='text-5xl font-extrabold '>404 Error</p>
          <p className='text-center text-slate-600'>Page not found</p>
          <div className='flex justify-center py-10'>
            <Link to={'/'}>
              <Button title={'Back to home'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
