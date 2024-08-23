export default function Loader(){
    return(
        
        <div className=" flex justify-center min-h-screen "> 
            <div className="flex items-center h-10 mt-40">

                <p className=" text-2xl text-white font-bold 523px:text-[15px] ">
                    Dados sendo carregados 
                </p>
                <div  
                    className="ml-2.5 w-[30px] h-[30px] animate-spin border-4 rounded-full
                    border-gray-300 border-t-lime-500 523px:w-[20px] 523px:h-[20px] " 

                ></div>
            </div>
    
        </div>    
    )
}
