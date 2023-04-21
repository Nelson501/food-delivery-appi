
const Section=({heading, subHeading, body, img, imgLeft})=>{
   
    return <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center mx-auto md:text-left md:w-[90%]">
        <div className={`justify-between relative-left-[40px] ${!imgLeft && "md:order-1"} md:left-[${imgLeft && "-"}100px]`}>
        <img src={img} alt="" />

        </div>
        <div>
            <h4 className="text-orange font-['Montserrat'] font-extrabold text-[24px] mb-[17px] text-center md:text-left">{heading}</h4>
            <h2 className="text-dark-gray font-['Montseraat'] mb-[27px] mx-auto text-[40px] md:text-[35px] w-[337px] md:mx-0 md:w-[581px] font-[700] md:h-[114px] text-center md:text-left ">{subHeading}</h2>
            <p className="text-light-gray font-['Montserrat'] text-[24px] mx-auto md:mx-0 w-[257px] md:w-[467px] text-center md:text-left ">{body}</p>
        </div>
        
    </div>
}
export default Section