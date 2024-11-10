document.addEventListener("DOMContentLoaded",()=>{
    fetchPosts()
})
let posts=[]
let filteredPosts=[]
function fetchPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        posts=data;
        filteredPosts=data;
        displayPosts(filteredPosts);
    })
    .catch(error=>console.error("Error fetchng posts:",error));
}
function displayPosts(postsToDisplay){
    const postList=document.getElementById("postList")
    postList.innerHTML=""
    postsToDisplay.forEach(post => {
        const listItem=document.createElement("li");
        const postLink=document.createElement("a");
        postLink.href=`comments.html?postId=${post.id}`;
        postLink.target="_blank";
        postLink.innerText=post.title;
        listItem.appendChild(postLink);
        postList.appendChild(listItem)
    });
}
document.getElementById("Search").addEventListener("nput",function(){
    const searchQuery=this.value.toLowerCase();
    filteredPosts=posts.filter(post=>
       post.title.toLowerCase().includes(searchQuery) 
    )||posts.body.toLowerCase().includes(searchQuery)
    displayPosts(filteredPosts)
});
function sortPosts(order){
    filteredPosts.sort((a,b)=>{
        if(order==="asc")
            retutn 
        a.title.localeCompare(b.title);
        return
        b.title.localeCompare(a.title)
    })
    displayPosts(filteredPosts)
}