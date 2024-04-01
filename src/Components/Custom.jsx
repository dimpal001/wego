export const Button = ({ title, bg, width }) => {
  return (
    <button
      className={`p-2 border-0 hover:bg-secondary delay-[0.1x] transition-all px-4 md:px-8 py-3 text-white  ${
        bg ? bg : 'bg-primary'
      } ${width ? width : null} `}
    >
      {title}
    </button>
  )
}

export const Input = ({ type, placeholder, label }) => {
  return (
    <div className='py-3'>
      <label htmlFor='input'>{label}</label>
      <input
        id='input'
        type={type}
        placeholder={placeholder}
        className='rounded-none border w-full p-3 focus:rounded-none hover:rounded-none focus:outline-none border-slate-500'
      />
    </div>
  )
}

export const Textarea = ({ label, placeholder }) => {
  return (
    <div className='py-3'>
      <label htmlFor='textarea'>{label}</label>
      <textarea
        placeholder={placeholder}
        id='textarea'
        className='rounded-none border w-full p-3 focus:rounded-none hover:rounded-none focus:outline-none border-slate-500'
        cols='30'
        rows='7'
      ></textarea>
    </div>
  )
}
