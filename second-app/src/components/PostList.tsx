import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
}
const PostList:React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    
useEffect(() => {
  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      setError("An error occurred while fetching the data");
    } else {
      const data = await response.json();
      setPosts(data.posts);
    }
  };
  fetchUsers();
}, []);

if (error) return <div>{error}</div>;

return (
  <div className="container mt-4">
    <h2>📝 Post List</h2>
    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
};

export default PostList;
