import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import User from './User';
import Friends from './Friends';
import Posts from './Posts'
import Counter from './task/Counter';
import Display from './task/Display';

// //  using ues(API) for fetching api
// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// // using async await
// // part-1 
// const fetchFriend = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }


// const fetchPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {
  // const postsPromise = fetchPosts();
  // using async await
  // part-2 
  // const friendsPromise = fetchFriend();


  // function handleClick() {
  //   alert("I am clicked.");
  // }
  // function handleClick4(num) {
  //   let total = 2 + num;
  //   alert(total);
  // }

  return (
    <>
      <h1>React Core Concept Part-2</h1>
      {/* task 1 */}
      {/* <Counter></Counter> */}
      {/* task 2 */}
      <Display></Display>

      {/* <Suspense fallback={<h1 className='cardStyle font-bold text-2xl'>Loading posts...</h1>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* using ues(API) for fetching api, suspense is for loading animation */}
      {/* <Suspense fallback={<h3 style={{ size: '2rem', font: 'bold' }} className="cardStyle font-bold text-2xl">Loading...</h3>}>
        <User fetchUser={fetchUser}></User>
      </Suspense> */}


      {/* <Suspense fallback={<h3 style={{ size: '2rem', font: 'bold' }} className="cardStyle font-bold text-2xl">Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Batsman></Batsman> */}


      <div className='flex gap-2 p-5 bg-amber-700 rounded-3xl items-center justify-center'>

        {/* Note:Different way to handel event  */}
        {/*normal html */}
        {/* <button onclick='handleClick()'>Click Me</button> */}
        {/* in jsx */}
        {/* <button onClick={handleClick}>Click Me</button> */}
        {/* with inline function/arrow function  */}
        {/* <button onClick={function handleClick2() { alert('Clicked 2') }}>Click Me 2</button> */}
        {/* <button onClick={() => alert('Clicked 3')}>Click Me 3</button> */}
        {/* if pass parameter - wrap it in to arrow function(na holy automatic call hoy) */}
        {/* <button onClick={handleClick4(7)}>Click Me 4</button> */}
        {/* <button onClick={() => handleClick4(7)}>Click Me 4</button> */}

      </div>
    </>
  )
}

export default App
