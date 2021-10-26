



fetch(`https://jsonplaceholder.typicode.com/posts`)
.then((res)=> res.json())
.then((res)=> {
    let boxPost = document.getElementById(`box-post`);
    let data = res;
    console.log(res)

    data.map((post)=>{
        boxPost.innerHTML += `
        <div class="col-3 mt-3">
            <div class="card">
                <div class="card-header">
                    <h2> Posteo Numero: ${post.id}</h2>
                </div>
                <div class="card-body">
                    <p>${post.title}</p>
                </div>
            </div>
        </div>
        `
    })

})