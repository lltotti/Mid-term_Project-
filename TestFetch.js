// import fetch from "node-fetch";

async function getWithFetch() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://marketplace.freelancewebdesign.online/wp-json/wp/v2/projects");
  const items = await res.json();
  
  //console.log(finalRes);

// console.log("\n################################");
// console.log("Title: "+items[i].title.rendered);
// console.log("Descripton:"+items[i].acf.description);
// console.log("Date:"+items[i].date);
// console.log("Content:"+items[i].content.rendered);
// console.log("Image:"+items[i].better_featured_image.source_url);
// console.log("\n##################################");



  return items;

}

async function PopulatePage() {
  
  
  const items = await getWithFetch();
  
  //const i=Math.floor(Math.random() * 10);
  //console.log(posts);
  let i=Math.floor(Math.random() * 3);
  let selector = document.querySelector("#PPageTitle");
  selector.innerText=items[i].title.rendered;
  selector = document.querySelector("#PPageDesc");
  selector.innerText=items[i].acf.description;
  selector = document.querySelector("#PpageDescDate");
  selector.innerText="Completed on "+ items[i].date;
  selector = document.querySelector("#PPageProjectDetailContImg");
  const inner = document.createElement("img");
  inner.src=items[i].better_featured_image.source_url;
  selector.appendChild(inner);
  selector=document.querySelector("#PPageProjectDetailContTxt");
  selector.innerHTML=items[i].content.rendered;
  
  // const myDiv = document.querySelector(".posts");
  /*
  posts.forEach((post) => {
    const inner = document.createElement("p");
    inner.innerText = post.title;
    myDiv.appendChild(inner);
  });*/
  // for (let i = 0; i < posts.length; i++) {
  //   const inner = document.createElement("p");
  //   inner.innerText = posts[i].title;
  //   myDiv.appendChild(inner);
  // }
}

PopulatePage();
// const itens = await getWithFetch();
// //console.log(itens[0]);




