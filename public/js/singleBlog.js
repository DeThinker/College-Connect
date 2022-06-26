const upvoted=()=>{
    const blogId=document.getElementById("blogId").innerHTML;
    console.log(blogId);

    const req=new XMLHttpRequest;
    req.onreadystatechange = async function() {
        if(this.readyState == 4 && this.status == 200) {
            let data=await JSON.parse(this.responseText);
            document.getElementById("upvotevalue").innerHTML = data.upvote;
        }
    }
    res.open("GET",`http://localhost:3000/blog/vote/${blogId}/1`,true);
    req.send();
}