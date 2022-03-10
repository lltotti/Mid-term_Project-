// import fetch from "node-fetch";

async function getWithFetch() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://marketplace.freelancewebdesign.online/wp-json/wp/v2/projects");
  const items = await res.json();
  //console.log(finalRes);
console.log("\n################################");
console.log("Title: "+items[0].title.rendered);
console.log("Descripton:"+items[0].acf.description);
console.log("Date:"+items[0].date);
console.log("Content:"+items[0].content.rendered);
console.log("Image:"+items[0].better_featured_image.source_url);
console.log("\n##################################");


  return items;

}

async function PopulatePage() {
  const items = await getWithFetch();
  //console.log(posts);
  let selector = document.querySelector("#PPageTitle");
  selector.innerText=items[0].title.rendered;
  selector = document.querySelector("#PPageDesc");
  selector.innerText=items[0].acf.description;
  selector = document.querySelector("#PpageDescDate");
  selector.innerText="Completed on "+ items[0].date;
  selector = document.querySelector("#PPageProjectDetailContImg");
  const inner = document.createElement("img");
  inner.src=items[0].better_featured_image.source_url;
  selector.appendChild(inner);
  selector=document.querySelector("#PPageProjectDetailContTxt");
  selector.innerHTML=items[0].content.rendered;
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




