
async function getData() {

     return await fetch("https://newsapi.org/v2/everything?q=Apple&from=2023-12-08sortBy=popularity&apiKey=1cdbcabff35340a1a915af2ef647668b")
         .then(data => data.json())
         .then(data => {
             if (data.status != "ok")return;
 
             const newsData = data.articles;
 
             if(!newsData)return [];
             
             const relevantData = newsData.map(news => `${news.title}, ${news.description}`);
 
             document.getElementById("ry").innerHTML = newsData.map(news => ` <li>${news.title}. <p>${news.description}</p></li>`)
             console.log({relevantData});
 
          //    document.getElementById("ry").innerHTML = relevantData.map(news => `<li>${news}</li>`).join('');
 
             return relevantData;
 
         })
         .catch(e => console.log(e));
 }
 
 getData();