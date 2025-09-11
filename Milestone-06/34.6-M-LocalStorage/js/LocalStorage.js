const setRnumToLS=()=>{
    const RanNum=Math.floor(Math.random()*10)+1;
    console.log(RanNum);
    localStorage.setItem('Random Num',RanNum);
}
const getRanNumOfLS=()=>{
    const getRanNum=localStorage.getItem('Random Num');
    console.log(getRanNum);
}

//its return problem [object,object]
// const setObjToLS=()=>{
//     const obj={name:"Jalal Uddin", Work:"Solder", WorkFor:"Ikhtar Uddin Bakhtiar Khilji"}
//     localStorage.setItem('Info',obj)
    
// }
// const getObjFromLS=()=>{
//     localStorage.getItem('Info')
        
// }
const setObjToLS=()=>{
    const obj={name:"Jalal Uddin", Work:"Solder", WorkFor:"Ikhtar Uddin Bakhtiar Khilji"}
    let jsonObj=JSON.stringify(obj);
    localStorage.setItem('Info',jsonObj);
    console.log(jsonObj);
    
}
const getObjFromLS=()=>{
  let JsonObj=  localStorage.getItem('Info');
    let Obj=JSON.parse(JsonObj);
    console.log(Obj);
}
