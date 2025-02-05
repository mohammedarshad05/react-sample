import Article from "./Articles";
import fetchArticles from "../Services/ArticleServices";
import "./Article.css";

function ArticleList() {
    const articles = fetchArticles();
    return (
      <div className="container">
        {articles.map((article) => (
          <Article  key={article.title} title={article.title}>
            {article.body}
          </Article>
        ))}
      </div>
    );
  };
  
  export default ArticleList;
  