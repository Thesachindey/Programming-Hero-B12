export default function Lbook({ book }) {
    return (
        <div className="styleCard">
            <h3>{book.id}.   Name:  {book.name} </h3>
            <h4>Price: {book.price}$</h4>
        </div>
    )
}