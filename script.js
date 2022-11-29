
let allInfo = [];
let articles = [
    {
        'title': 'this is article 1',
        'content': 'hello there this is a nice day',
        'articleId': 1
    },
    {
        'title': 'this is article 2',
        'content': 'hello there this is a beautiful car',
        'articleId': 2
    },
    {
        'title': 'this is article 3',
        'content': 'hello there this is a beautiful house',
        'articleId': 3
    }
]

let posts = [
    {
        'postTitle': 'this is post title 1',
        'postContent': 'yes, indeed this is response to article 1',
        'postId': 1,
        'connectToArticle': 1
    },
    {
        'postTitle': 'this is post title 2',
        'postContent': 'yes, this is respond to article 2',
        'postId': 2,
        'connectToArticle': 2
    },
    {
        'postTitle': 'this is post title 3',
        'postContent': 'yes, indeed this is answer to article 3',
        'postId': 3,
        'connectToArticle': 3
    },
    {
      'postTitle': 'this is post title 4',
      'postContent': 'this is another response to article 2',
      'postId': 2,
      'connectToArticle': 2
  }
]


let loadArticle = new Promise((resolve)=>{
    setTimeout(() => {
      console.log(articles);
      resolve(articles);
    }, 3000);
  });
  
  let loadPosts = new Promise((resolve)=>{
    setTimeout(() => {
      console.log(posts);
      resolve(posts);
  }, 4000);
    });
  
    function pushArticle(article) {
      allInfo.push(article);
      return article;
    }
  
    function pushPost(post) {
      allInfo.push(post);
      return post;
    }
  
    loadArticle.then((allArticles)=> pushArticle(allArticles)).then(()=> loadPosts)
    .then((allPosts)=> pushPost(allPosts))
    .then(()=> printToHTML(allInfo));

    function printToHTML() {
      let html = "";
      allInfo[0].forEach((article)=>{
      html += `<h1>${article.title}</h1>`;
      //  }
       allInfo[1].forEach((post)=>{
        if(article.articleId ==  post.postId) {
          html += `<p>${post.postContent}</p>`;
        }    
        
       });
      });
      document.body.innerHTML = html;
    }

