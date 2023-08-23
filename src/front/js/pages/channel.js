import React, { useEffect, useContext } from 'react';
import { Context } from "../store/appContext";

export const Channel = () => {

  const { store, actions } = useContext(Context);

  useEffect(() => {

    const apiUrl = 'https://eventregistry.org/api/v1/article/getArticles';
    const requestBody = {
        "action": "getArticles",
        "keyword": "medicine",
        "articlesPage": 1,
        "articlesCount": 99,
        "articlesSortBy": "date",
        "articlesSortByAsc": false,
        "articlesArticleBodyLen": -1,
        "resultType": "articles",
        "dataType": [
        "news",
        "pr"
        ],
        "apiKey": "40196ad83943481c807bb1f382508b0d",
        "forceMaxDataTimeWindow": 31
    };
    const headers = {
        'Content-Type': 'application/json',
    };
   
    fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      })
      .then(response => response.json())
      .then(data => actions.setChannelData(data.articles.results))
      .catch(error => console.error('Error fetching data from API:', error));
  }, []);

  return (
    <div className='container'>
    <h4>Latest health news</h4>  
    <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {store.newsapi.map((item) => {
                return (
                    <div className="col" key={item.id}>
                        <div className="card h-100">
                            <img variant="top" src={item.image} className="card-img-top" alt="..." style={{width: "100%", height: "180px", }}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <a href={item.url} className="card-link" target="_blank">Read more</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};


