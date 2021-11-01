const getPostsButtonElement = document.getElementById("get-posts");
getPostsButtonElement.addEventListener("click", getPosts);
const postPostsButtonElement = document.getElementById("post-posts");
postPostsButtonElement.addEventListener("click", postPosts);
const requestElement = document.getElementById("request");
const responseElement = document.getElementById("response");

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      const postData = responseData.slice(0, 5);
      responseElement.innerHTML = "";
      responseElement.insertAdjacentHTML(
        "afterbegin",
        `<pre>${JSON.stringify(postData, null, 2)}</pre>`
      );
      responseElement.insertAdjacentHTML(
        "afterbegin",
        "<p>Список постов из GET запроса</p>"
      );
      requestElement.innerHTML = `<pre>fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })</pre>`;
    });
}

function postPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      const postData = responseData;
      responseElement.innerHTML = `<span>Результат запроса POST<span> <pre>${JSON.stringify(
        postData,
        null,
        2
      )}</pre>`;
      requestElement.innerHTML = `<pre> fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      return response.json();
    })</pre>`;
    });
}
