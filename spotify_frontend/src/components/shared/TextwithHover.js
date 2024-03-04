



const TextWithHover = ({ displayText, active}) =>{
    return(
        <div className="flex items-center justify-start "  >
        
        <div className={`${active?"text-white": "text-gray-500"}  font-semibold  hover:text-white cursor-pointer`} >
            {displayText}
        </div>
        </div>
        

        

    )
};

export default TextWithHover;