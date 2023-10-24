import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://jrm-nc-news.onrender.com/API",
});

export const getArticles = () => {
  return newsApi.get("/articles", { params: { sort_by: "created_at" } }).then((res)=>{
    return res.data
  });
};

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then(({data})=>{
        return data.article
      });
}