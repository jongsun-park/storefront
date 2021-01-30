import { useParams } from "react-router-dom";

const Blog = () => {
  let { slug } = useParams();
  return (
    <div>
      {slug} <br /> Blog
    </div>
  );
};

export default Blog;
