let articleTime = [];
fetch("http://as-var-croapps.ecx.local:1337/blizzard-2008-s")
  .then((response) => response.json())
  .then((data) => {
    sortArticles(data);
    renderArticles(data);
  })
  .catch((err) => {
    console.log(`Ne šljaka ${err.message}`);
  });

function renderArticles(article) {
  const source = document.querySelector("#asideTemplate").innerHTML;
  const asideContainer = document.querySelector(".col-4");
  const template = Handlebars.compile(source);
  const output = template({ data: article });
  asideContainer.innerHTML = output;
}
function sortArticles(articles) {  
  articles.sort((a, b) => a.published.localeCompare(b.published));
  //     const dateCurrent = new Date();
  //     const dateThen = new Date (article.published)
  //     const diff = Math.floor((dateCurrent.getTime() - dateThen.getTime())/3600000);
  //     console.log(diff)
  //     articleTime.push({
  //         published:diff,
  //         imageUrl:article.imageUrl,
  //         published:article.published,
  //         headline:article.headline,
  //         alt:article.alt
  //     });
  //     articleTime.sort((a,b)=>a.published.localeCompare(b.published))
  // });
  // console.log(articleTime)
}
