const Footer =()=>{
    const medias =[
        {

        img1 :"/twitter.png",
        img2 : "/facebook.png",
        img3 : "/instagram.png"
    }
]

    // const[playStore, setPlayStore] = useS()


    return <div className="flex flex-col py-2 h-full w-full">
        <div className="flex flex-col justify-center items-center md:items-centers md:bg-[url(/cta-image.png)] bg-no-repeat lg:bg-cover tracking-2 font-['Montserrat']  h-[516px] md:w-full bg-dark-gray md:items-center">
            <h1 className="text-white font-['Montserrat'] md:text-[40px]text-[24px] mb-3 relative:bottom-[-50px]">Download the app now</h1>
            <h2 className="text-white font-['Montserrat'] text-center">Available on your 
            favouritestore. Start yourpremium experience now</h2>

            <div className="p-2">
                <button className="bg-orange py-[16px] m-4 text-white rounded-[10px] md:w-[150px] md:h-[60px] font-['Montserrat'] w-[120px] text-center items-center justify-items-center h-[60px]">palystore</button>

                <button className="py-[16px] px-1 text-white font-['Monserrat'] text-center items-center justify-items-center md:border-white border-2 rounded-[10px] w-[120px] h-[60px] md:w-[150px] mt-[17px] md:mt-0">App store</button>
            </div>
        </div>
        <div className="flex justify-around py-[90px] items-center g">
            <div className="w-[120px] sr-only sm:not-sr-only">
                <img src="/bellaOlonjeLogo.png" alt="" className="" />

            </div>
            
            {medias.map((media)=>{
                return <div className="flex  gap-2 md:gap-7">
                    <a href="#"><img src={media.img1} alt="" className="mx-2 h-[30px]"/></a>
                    <a href="#"><img src={media.img2} alt="" className="mx-2 h-[30px]"/></a>
                    <a href="#"><img src={media.img3} alt=""  className="mx-2 h-[30px]"/></a>
                </div>
            })}

            <span>
                <h6 className="text-[10px] text-light-gray md:text-[20px] md:text-dark-gray">copywright 2023 Adedayo <a href="#">nelson.com</a></h6>
                </span>
        </div>
    </div>
}

export default Footer