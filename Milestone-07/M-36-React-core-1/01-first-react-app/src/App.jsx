
import './App.css';
import ToDo from './Todo';
import Book from "./Book";
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
  const heroes = [
    'Sachin Dey',
    "Rocky Balboa",
    "Chris Gardner",
    "Andy Dufresne",
    "Forrest Gump",
    "Rudy Ruettiger",
    "Erin Brockovich",
    "William Wallace",
    "Patch Adams"
  ];

  const singers = [
    { id: 1, name: "Arijit Singh", age: 36 },
    { id: 2, name: "Shreya Ghoshal", age: 40 },
    { id: 3, name: "Lata Mangeshkar", age: 92 },
    { id: 4, name: "Kishore Kumar", age: 58 },
    { id: 5, name: "Sonu Nigam", age: 50 },
    { id: 6, name: "Adele", age: 35 },
    { id: 7, name: "Ed Sheeran", age: 33 },
    { id: 8, name: "Taylor Swift", age: 34 },
    { id: 9, name: "Freddie Mercury", age: 45 }
  ];
  const books = [
    { id: 1, name: "Pride and Prejudice", price: 17 },
    { id: 2, name: "Jane Eyre", price: 18 },
    { id: 3, name: "Wuthering Heights", price: 19 },
    { id: 4, name: "Great Expectations", price: 20 },
    { id: 5, name: "Moby-Dick", price: 22 },
    { id: 6, name: "The Picture of Dorian Gray", price: 21 },
    { id: 7, name: "The Adventures of Sherlock Holmes", price: 23 }
  ];

  return (
    <>

      <h1>React Core Concept</h1>
      <Library books={books}></Library>

      {
        singers.map((singer, index) => <Singer key={singer.id} singer={singer} i={index} ></Singer>)
      }

      {/* {
        heroes.map((hero,index)=><Actor hero={hero} index={index} ></Actor>)
      } */}

      {/* <ToDo Task='Learn React' isDone={true}></ToDo>
      <ToDo Task='Revision Js' isDone={false}></ToDo>
      <ToDo Task='Study' isDone={true}></ToDo>
      <ToDo Task='Shopping' isDone={true}></ToDo>
      <h1>Book List</h1>
      <Book  person='Ankon' book1='The Apu Trilogy' book2='The Alchemist' book3='Harry Potter All'></Book>
      <Book  person='Joy' book1='The Khoka Babu Trilogy' book2='The Pookie' book3='How To Become Famoos'></Book>
      <Book  person='Abhay Chran' book1='The Apu Trilogy' book2='The Alchemist' book3='Rabindra Samagra'></Book> */}
      {/* <Person name='Sachin Dey'right='He can, If he work heard and maintain his consistency.'></Person>
      <Like like1='Doing Coding' like2='Reading' like3='Learning new Skill' like4='Traveling'></Like>
      <Person name='Boga Mask' right='NO,but he also can If he stop all of this bullshit.'></Person>
      <Like like1='Watching Dance' like2='Watching Instagram' like3='Watching News' like4='Dreaming good future'></Like>
      <Person name='Elon Mask' right="YES,He already Done this"></Person>
      <Like like1='Buy New Company' like2='Posting on X' like3='Going Mars' like4='Make Mony'></Like> */}
    </>
  )
}
// ------------------------------------------------------------
// person component 
function Person(props) {
  console.log(props);
  return (
    <div className='styleCard'>
      <h1>Name: {props.name}</h1>
      <p>{props.name} is a technology entrepreneur and CEO known for founding SpaceX, Tesla, and other innovative companies. Is it write info: {props.right}</p>
    </div>
  )
}

//like to do
/**
 * NOTE:Property(props return object )-->
 * here we aces the property by object destructuring.
 * with out using props. (props.Property).
 * const property {like1,like2,like3,like4}={like1: 'Doing Coding', like2: 'Reading', like3: 'Learning new Skill', like4: 'Traveling'}
 * 
 */
/**
 * CSS:
 * use 2 type css.
 * out side obj declaration css and inner.
 * NOTE: We also can use out side style.css file & Tailwind CSS
 */

function Like({ like1, like2, like3, like4 }) {

  const likeTitle = {
    color: 'red',
    textAlign: 'left'
  }
  return (
    <div className='styleCard'>
      <h5 style={likeTitle}>Like to do:</h5>
      <ul style={{
        listStyle: 'none',
        color: 'blue',
        textAlign: 'left',
        fontSize: '1.5rem'
      }}>
        <h5>{like1}</h5>
        <h5>{like2}</h5>
        <h5>{like3}</h5>
        <h5>{like4}</h5>
      </ul>
    </div>
  )
}

export default App
