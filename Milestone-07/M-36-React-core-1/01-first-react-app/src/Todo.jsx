// export default function Todo({Task,isDone}) {
//     return(
//         <h4>Task: {Task} {isDone}</h4>
//     )
// }
// Conditional rendering: if-else ladder
// export default function Todo({Task,isDone}) {

//     if(isDone){
//     return <h4>Done : {Task}</h4>
//    }else{
//     return <h4>Do Now : {Task}</h4>
//    }
// }

//Conditional rendering: using ternary operator
// export default function Todo({ Task, isDone }) {
    //     return isDone ? <h4>Done : {Task}</h4> : <h4>Not Done: {Task}</h4>
    // }
    
//Conditional rendering: using &&
// export default function Todo({ Task, isDone, Time=0 }) {
//     return isDone && <h4>Done : {Task}, Time : {Time}</h4> 
// }


    // Conditional rendering: if-else ladder, and declare variable
    export default function Todo({Task,isDone}) {
    let listItem;
        if(isDone){
        listItem = <h4>Done : {Task}</h4>
       }else{
        listItem = <h4>Do Now : {Task}</h4>
       }
       return listItem;
    }