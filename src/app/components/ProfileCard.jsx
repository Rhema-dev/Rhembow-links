import React from 'react'


const ProfileCard = () => {
    const backgroundImage = '/assets/backdrop.webp'
  
  return (
    <div 
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       }}
    className='flex justify-center items-center rounded-t-lg bg-white'>
      <img className='bg-white border-4 rounded-full my-4'
       src='/assets/myimage.jpeg'
        alt="My image" 
        style={{marginBotton: "-20px"}}
        />
    </div>
  )
}

export default ProfileCard
