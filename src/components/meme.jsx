import React from 'react'
import memesData from '../assests/memesData'

const meme = () => {
    const [memeImage,setmemeImage] = React.useState("")

    function getImage(){
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setmemeImage(memeArray[randomNumber].url)
    }


  return (
    <div>meme</div>
  )
}

export default meme