import Lbook from "./Lbook";

export default function Library({books}) {
    console.log(books);
    return(
        <div className="styleCard" style={{border:'2px solid pink', background:'transparent'}}>
            <h1>Central Library Of Wish Land</h1>
            <p>Address: 123 Dream Avenue, Fantasy City, Wish Land</p>
            <ul>
                {
                    books.map(book=> <Lbook key={book.id} book={book}></Lbook>)
                }
            </ul>
        </div>
    )
}