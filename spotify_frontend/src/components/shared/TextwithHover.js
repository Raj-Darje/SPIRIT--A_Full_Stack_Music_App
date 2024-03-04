import { Link } from "react-router-dom";




const TextWithHover = ({ displayText, active}) =>{
    return(
        <Link to={"/uploadSong"}>
        <div className="flex items-center justify-start "  >
        
        <div className={`${active?"text-white": "text-gray-500"}  font-semibold  hover:text-white cursor-pointer`} >
            {displayText}
        </div>
        </div>
        </Link>
        

        

    )
};

export default TextWithHover;