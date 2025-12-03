import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    slug: "the-basics-about-crypto-1",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 2,
    slug: "the-basics-about-crypto-2",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 3,
    slug: "the-basics-about-crypto-3",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  // ...
];

const BlogPost = () => {
  return (
    <section className="blogpost">
      <div className="post-title">
        <h2>Latest Posts</h2>
        <div className="filter">
          <button className="current">All</button>
          <button>Apps</button>
          <button>Product</button>
          <button>Tutorial</button>
        </div>
      </div>

      <div className="post-card">
        <div className="post-grid">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blogpost/${post.id}`}  // ← route sang page mới
              className="blog-card"       // giữ nguyên class để CSS không đổi
            >
              <div className="blog-card__image">
                <img src={post.thumb} alt={post.title} />
                <span className="blog-card__tag">{post.tag}</span>
              </div>

              <div className="card__content">
                <h3 className="card__title">{post.title}</h3>
                <p>
                  Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
                  elit. Scelerisque viverra donec diammeo.
                </p>
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
          ))}
        </div>

        <nav className="pagination" aria-label="Page navigation">
          <button className="page-item prev disabled" aria-disabled="true">
            Prev
          </button>
          <button className="page-item active" aria-current="page">
            1
          </button>
          <button className="page-item">2</button>
          <button className="page-item">3</button>
          <button className="page-item">4</button>
          <button className="page-item next">Next</button>
        </nav>
      </div>
    </section>
  );
};

export default BlogPost;
