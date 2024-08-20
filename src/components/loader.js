export default function Loader(){
    return(
        
        <div className=" flex items-center justify-center h-[350px]"> 
                    
            <p className=" text-2xl text-white font-bold ">Dados sendo carregados  </p>
            <div  
                className="ml-2.5 animate-spin border-4 rounded-full border-gray-300 border-t-lime-500 " 
                style={{
                    height: 30,
                    width: 30
                }}
            ></div>
    
        </div>    
    )
}
