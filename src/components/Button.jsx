import { MdKeyboardArrowLeft as PrevButton,
         MdKeyboardArrowRight as NextButton 
        } from "react-icons/md";
import { useEffect } from "react";

const Button = ({direction, handler, length}) => {
    const prev = () => {
        return handler((image) =>{ 
          if(image <= 0){
            return image = length;
          }
          return image - 1
        })
    }
    const next = () => {
        return handler((image) =>{ 
          if(image >= length){
            return image = 0;
          }
          return image + 1
        })
      }
      
    return(
        <>
        <button onClick={direction === 'prev'? prev : next } className="carouselButton">
            { direction === 'prev'? <PrevButton/> : <NextButton/>}
        </button>  
        </>
    )


}
export default Button;