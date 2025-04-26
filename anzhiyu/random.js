var posts=["2025/04/25/hello-world/","2025/04/26/when-I-dont-sleep/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };