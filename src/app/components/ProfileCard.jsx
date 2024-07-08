import React from 'react'


const ProfileCard = () => {
  
  return (
    <div className='flex justify-center items-center rounded-t-lg bg-white'>
      <img 
      className='bg-white border-4 rounded-full my-4'
       src='/assets/myimage.jpeg'
        alt="My image" 
        style={{marginBotton: "-20px"}}
        />
    </div>
  )
}

export default ProfileCard
