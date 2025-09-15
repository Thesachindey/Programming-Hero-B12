// export default function Todo({Task,isDone}) {
//     return(
//         <h4>Task: {Task} {isDone}</h4>
//     )
// }
export default function Todo({Task,isDone}) {

    if(isDone){
    return <h4>Done : {Task}</h4>
   }else{
    return <h4>Do Now : {Task}</h4>
   }
}