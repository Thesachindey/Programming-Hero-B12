export default function Actor({hero,index}) {
    return(
        <div className="styleCard" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
           
                <h3>{index}. Actor- {hero}</h3>
            
        </div>
    )
}