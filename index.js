function createPost() {
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let comments = _.template(document.getElementById("comments-template").innerHTML);

  let main = document.getElementsByTagName('main')[0];
  main.innerHTML += pageTemplate;

  let postSection = document.getElementById('post');
  let title = document.getElementById('postTitle').value;
  let content = document.getElementById('postContent').value;
  let author = document.getElementById('postAuthor').value;
  postSection.innerHTML = postTemplate( {'title': title, 'body': content, 'author': author} );
  postSection.innerHTML += comments;
}

function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let comments = document.getElementById("comments");

  comments.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
}
