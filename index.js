// Write your code here!
const postList = document.getElementById('post-list');
async function getPosts(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new error("Failed to fetch posts")
      }
const posts = await response.json();

displayPosts(posts);
    } catch (error) {
        console.error(error);
    }
}
function displayPosts(posts){
    posts.forEach(post => {
        const postItem = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

getPosts();