interface Props {
  title: string;
  children: string;
}

const Article = ({ title, children }: Props) => {
  return (
    <div className="card shadow-sm my-3">
      <div className="card-body">
        <h3 className="card-title text-danger">{title}</h3>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};
export default Article;
