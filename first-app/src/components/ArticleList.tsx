import Article from "./Articles";
const ArticleList = () => {
    const articles = [
      {
        title: "📜 React Basics",
        body: "🔹 React is a JavaScript library for building UIs.",
      },
      {
        title: "📜 Understanding Props",
        body: "🔹 Props allow components to receive data from their parent.",
      },
      {
        title: "📜 What is Bootstrap?",
        body: "🔹 Bootstrap is a CSS framework that helps in designing responsive websites.",
      },
    ];
  
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
  