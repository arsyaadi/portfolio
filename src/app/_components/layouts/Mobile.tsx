import React from 'react'
import { IconMaintance } from '@/app/_assets/icons'

const Mobile = () => {
  return (
    <div className='h-screen w-screen bg-midnight'>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <IconMaintance />
        <p className='my-5 font-SF-mono text-regent-gray text-center'>
          Sorry, this site is currently under development.
        </p>
      </div>
    </div>
  )
}

export default Mobile