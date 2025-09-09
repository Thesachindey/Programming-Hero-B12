// {
//     "userId": 4,
//     "id": 32,
//     "title": "doloremque illum aliquid sunt",
//     "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
// }

// API load here
const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((jsonData) => displayPosts(jsonData) // Display the posts by passing the data as an argument to the displayPosts function
    );
};


const displayPosts = (jsonPostArray) => {

  // 1. get the container and empty the container
  const postsContainer = document.getElementById("post-container");
  postsContainer.innerHTML = "";

  jsonPostArray.forEach((post) => {

    // 2.create element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div class="post-card">
        <h2>${post.title}</h2>
        <p>
          ${post.body}
        </p>
    </div>`;
    
    //   3.add to the container
    postsContainer.append(postCard);
  });
};

loadPost();
