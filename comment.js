document.addEventListener("DOMContentLoaded",()=>{
    const urlParams=new URLSearchParams.apply(window.location.search);
    const postId=urlParams.get("postId")
    if(postId){
        fetchPostDetails(postId);
        fetchComments(postId)
    }
})
function fetchPostDetails(postId){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=>res.json())
    .then(post=>{
   document.getElementById("postTitle").innerText=post.title;
   document.getElementById("postBody").innerText=post.body;
    })
    .catch(error=>console.log("Error fetching post details:",error))
}
function fetchComments(postId){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res=>res.json())
    .then(comments=>{
    const commentList=document.getElementById("commentList");
    commentList.innerHTML=""

    comments.forEach(comment=>{
        const listItem=document.createElement("li")
        listItem.innerHTML=`<strong>${comment.name}</strong>:${comment.body}`;
        commentList.appendChild()
    })
    })
}