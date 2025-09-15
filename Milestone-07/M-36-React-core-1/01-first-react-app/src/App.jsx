
import './App.css'
import ToDo from './Todo'

function App() {


  return (
    <>

      <h1>React Core Concept</h1>
      <ToDo Task='Learn React' isDone={true}></ToDo>
      <ToDo Task='Revision Js' isDone={false}></ToDo>
      <ToDo Task='Study' isDone={true}></ToDo>
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
 * NOTE:Property-->
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

function Like( {like1,like2,like3,like4}) {

  const likeTitle = {
    color: 'red',
    textAlign: 'left'
  }
  return (
    <div className='styleCard'>
      <h5 className='likeTitle' style={likeTitle}>Like to do:</h5>
      <ul style={{
        listStyle: 'none',
        color: 'blue',
        textAlign: 'left',
        fontSize:'1.5rem'
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
