import { Link } from "react-router-dom";
import Pagination from "../../../../components/pagination/Pagination";
import { useState } from "react";
import BlogCard from "../blogcard/BlogCard";

const posts = [
  {
    id: 1,
    slug: "the-basics-about-crypto-1",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 2,
    slug: "the-basics-about-crypto-2",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 3,
    slug: "the-basics-about-crypto-3",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 4,
    slug: "the-basics-about-crypto-4",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 5,
    slug: "the-basics-about-crypto-5",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 6,
    slug: "the-basics-about-crypto-6",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 7,
    slug: "the-basics-about-crypto-7",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 8,
    slug: "the-basics-about-crypto-8",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 9,
    slug: "the-basics-about-crypto-9",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
  {
    id: 10,
    slug: "the-basics-about-crypto-10",
    title: "The Basics about Cryptocurrency",
    tag: "PRODUCTS",
    text: "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    date: "AUGUST 2, 2021",
    author: "ALEX TURNER",
    thumb: "/assets/divLaptop.png",
  },
];

const BlogPost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);
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
          {currentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />

          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={posts.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default BlogPost;
