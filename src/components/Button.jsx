import { useState } from 'react'

const Button = () => {

    const [ state , setState ] = useState(0)

    const handleSum = () => {

        setState(state+1)
        
    }
  return (
    <button className='p-3 border border-gray-200 rounded mx-auto my-5 bg-slate-600 w-52' onClick={handleSum}>
        Boton con React { state } 
    </button>
  )
}

export default Button