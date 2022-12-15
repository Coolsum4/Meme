import React  from "react";
import {troll,meme} from '../assests'



const MemeGenerator = () => {
  const [memeImage, setmemeImage] = React.useState("")
  const [text ,settext] = React.useState({
    topText:"",
    bottomText:""
  })
const [meme , setmeme] = React.useState([])

React.useEffect (()=>{
  fetch("https://api.imgflip.com/get_memes")
  .then(Response => Response.json())
  .then(data => setmeme(data.data.memes))
},[])

console


  function handleChange(event){
  settext(prevText => {
    const {name ,value} = event.target
    return{
      ...prevText,
      [name] : value

    }

  })
  }

 function getImage(){
        const randomNumber = Math.floor(Math.random() * meme.length)
        setmemeImage(meme[randomNumber].url)
    }


  return (
    <div className="relative bg-white w-full h-[550px] overflow-hidden text-left text-base text-white font-karla">
      <img
        className="absolute top-[227px] left-[36px] rounded-[2px] h-[268px] object-cover max-w-full"
        alt="meme"
        src={memeImage}
      />
      <div className="absolute top-[0px] left-[0px] w-[550px] h-[65px] text-right font-inter">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#672280,_#a626d3)] w-[550px] h-[65px]" />
        <div className="absolute top-[25px] left-[324px] font-medium inline-block w-[189px] h-[14px]">
          React Course - Project 3
        </div>
        <div className="absolute h-[40.34%] w-[32.51%] top-[29.23%] right-[63.86%] bottom-[30.43%] left-[3.64%] text-left text-[20.75px] font-karla">
          <img
            className="absolute h-full w-[17.51%] top-[0%] right-[82.49%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={troll}
          />
          <b className="absolute top-[2px] left-[38px] tracking-[-0.1em] inline-block w-[140.79px]">
            Meme Generator
          </b>
        </div>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Shut up" className="absolute top-[101px] left-[36px] w-[230px] h-[35px] text-gray" onChange={handleChange} value={text.topText} name="topText" />
          <input type="text" placeholder="and take my money" className="absolute top-[101px] left-[283px] w-[230px] h-[35px] text-gray" onChange={handleChange} value={text.bottomText} name="bottomText" />
          <button onClick={getImage} type="button" className="absolute top-[151px] left-[36px] w-[477px] h-[40px] text-center text-[16px] [background:linear-gradient(90deg,_#672280,_#a626d3)] rounded-md ">Get a new meme image 🖼</button>
        
      
      <div className="absolute top-[243px] left-[213px] text-lg font-impact inline-block [-webkit-text-stroke:2px_#000]">
        {text.topText}
      </div>
      <div className="absolute top-[440px] left-[139px] text-lg font-impact text-center inline-block [-webkit-text-stroke:2px_#000]">
        {text.bottomText}
      </div>

      </form>

      </div>
      
    </div>
  ); 
};

export default MemeGenerator;
