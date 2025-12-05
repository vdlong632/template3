import { useState } from "react";
import Pagination from "../../../../components/pagination/Pagination"
import BlogCard from "../../Components/blogcard/BlogCard"

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

const AllPost = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);
    return (
        <section className="allpost">
            <div className="sub-banner">
                <div className="inline-banner">
                    <div className="title">
                        <div className="logo">
                            <img
                                src="/assets/letter.png"
                                alt=""
                            />
                        </div>
                        <h2>Subscribe to our crypto news weekly newsletter!</h2>
                    </div>
                    <div className="subscribe">
                        <form className="subscribe__form">
                            <input
                                type="email"
                                className="subscribe__input"
                                placeholder="Enter email address"
                            />
                            <button className="subscribe__button">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="latestpost">
                <div className="heading">
                    <h2>Latest Post</h2>
                    <button>VIEW ALL</button>
                </div>
                <div className="blog-area">
                    {currentPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />

                    ))}
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={posts.length}
                onPageChange={setCurrentPage}
            />
        </section>
    )
}
export default AllPost