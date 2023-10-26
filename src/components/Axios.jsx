import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://jrm-nc-news.onrender.com/API",
});

export const getArticles = () => {
  return newsApi
    .get("/articles", { params: { sort_by: "created_at" } })
    .then((res) => {
      return res.data;
    });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchVotes = (article_id, value) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: value })
    .then((res) => {
      return res;
    });
};

export const getUsers = () => {
  return newsApi.get("/users").then(({ data }) => {
    return data;
  });
};

export const postArticleComment = (article_id, comment) => {

  return newsApi
    .post(`/articles/${article_id}/comments`, comment )
    .then((res) => {
      return res;
    })

};
