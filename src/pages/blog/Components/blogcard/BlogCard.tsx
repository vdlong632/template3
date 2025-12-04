import { Link } from "react-router-dom";

interface Post {
  id: number;
  slug: string;
  title: string;
  tag: string;
  text: string;
  date: string;
  author: string;
  thumb: string;
}

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      key={post.id}
      to={`/blogpost/${post.slug}`}
      className="blog-card"
    >
      <div className="blog-card__image">
        <img src={post.thumb} alt={post.title} />
        <span className="blog-card__tag">{post.tag}</span>
      </div>

      <div className="card__content">
        <h3 className="card__title">{post.title}</h3>
        <p>{post.text}</p>

        <div className="card__footer">
          <img
            src="/assets/author.png"
            alt={post.author}
            className="card-author_img"
          />

          <div className="author-info">
            <p className="card__author-name">{post.author}</p>
            <p className="card__date">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
