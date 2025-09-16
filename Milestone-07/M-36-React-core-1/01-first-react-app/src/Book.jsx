export default function Books({ person,book1,book2,book3,book4='Sharlok Homes' }) {
    //here we can add style by declared object
    const styleUl = {
        backgroundColor: 'red',
        borderRadius:'10px',
        
        
    }
    
    return (
        <div className='styleCard'>
            <h3> {person} </h3>
            <ol style={styleUl}>
                <li style={{fontSize:'1.6rem', padding:'1rem', fontWeight:"bold", color:'black'}}>{book1}</li>
                <li style={{fontSize:'1.6rem', padding:'1rem', fontWeight:"bold", color:'black' }}>{book2}</li>
                <li style={{fontSize:'1.6rem', padding:'1rem', fontWeight:"bold", color:'black'}}>{book3}</li>
                <li style={{fontSize:'1.6rem', padding:'1rem', fontWeight:"bold", color:'black'}}>{book4}</li>
            </ol>
        </div>
    )
}