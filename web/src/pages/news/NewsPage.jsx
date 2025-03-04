import React, { useEffect } from "react";
import NewsHero from "../../components/newsportal/NewsHero";
import NewsSection from "../../components/newsportal/NewsSection";
import NewsRoom from "../../components/newsportal/NewsRoom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsPosts } from "../../redux/admin/newsSlice/newsSlice";
const NewsPage = () => {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(fetchNewsPosts());
    }, [dispatch]);
  return (
    <>
      <NewsHero />
      <NewsSection news={news} />
      <NewsRoom news={news}/>
    </>
  );
};

export default NewsPage;
