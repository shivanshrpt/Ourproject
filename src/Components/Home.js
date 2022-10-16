import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "./Card";
import Spinner from "./Spinner";
import Body from "./Body";
export default function Home(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalsize, setTotalsize] = useState(0);
  async function getdata() {
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&sortBy=publishedAt&language=hi&apiKey=8366afdd2e6f4362b655abcfc1dad677&page=${page}&pageSize=8`);
    var data = await rawdata.json();
    console.log(data);

    setArticles(data.articles);
    setTotalsize(data.totalResults);
  }

  var fetchMoreData = async () => {
    setPage(page+1);
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&language=hi&apiKey=8366afdd2e6f4362b655abcfc1dad677&page=${page}&pageSize=8`);
    var data = await rawdata.json();
    setArticles(data.articles);
   
  };

  useEffect(() => {
    getdata();
  },[props.category]);
  return (
    <>
    <Body />
     <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalsize}
        loader={<Spinner/>}
      >
      
      <div className="container-fluid" style={{backgroundColor:'grey'}}>   
      <div className="row mt-3">
        {articles.map((item, index) => {
          return (
            
              <Card 
              title={item.title}
              author={item.author}
              date={item.publishedAt}
              description={item.description}
              image={item.urlToImage}
              url={item.url}
              key={index}
            />
           
          );
        })}
      </div>
      </div>
      </InfiniteScroll>
    </>
  );
}
