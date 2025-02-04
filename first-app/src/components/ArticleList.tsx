interface Props {
  title: string;
  children: string;
}

const Article = ({ title, children }: Props) => {
  return (
    <div className="card shadow-sm my-3">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};
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
        <Article key={article.title} title={article.title}>
          {article.body}
        </Article>
      ))}
    </div>
  );
};

export default ArticleList;
