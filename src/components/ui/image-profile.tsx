import Image from 'next/image'
import React from 'react'

interface ImageProfileProps{
    imageUrl: string
}

const ImageProfile = ({imageUrl} : ImageProfileProps) => {
  return (
    <Image 
            src={imageUrl}
            alt="Sofia Profile"
            width={210}
            height={60}
    />
  )
}

export default ImageProfile
