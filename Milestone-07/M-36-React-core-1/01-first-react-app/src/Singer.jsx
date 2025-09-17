export default function Singer({i,singer}) {
    console.log(singer);
    return(
        <div className="styleCard" style={{display:'flex', flexDirection:'column', alignItems:'center', border:"2px solid blue",backgroundColor:"rgba(55, 123, 132, 0.5)", justifyContent:'center'}} >
           
                <h3>{i}. Singer-{singer.name} Age-{singer.age} </h3>
            
        </div>
    )
}