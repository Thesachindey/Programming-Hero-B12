const handelAddToStorage = () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    
    console.log(id, name)
    localStorage.setItem(id,name);
    

}