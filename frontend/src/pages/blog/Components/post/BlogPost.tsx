import { useSearchParams } from "react-router-dom";
import Pagination from "../../../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import BlogCard from "../blogcard/BlogCard";

// Dữ liệu mock list bài viết
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
  // Số lượng bài trên mỗi page
  const itemsPerPage = 6;

  // -------------------------
  // 🟦 1. Lấy giá trị "page" từ URL
  // -------------------------

  // Hook của React Router để đọc & ghi search params (?page=2)
  const [searchParams, setSearchParams] = useSearchParams();
  // Ép kiểu sang number. Nếu không có ?page thì mặc định = 1
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  // -------------------------
  // 🟦 2. Tạo state để quản lý current page
  // -------------------------
  // currentPage khởi tạo bằng page lấy từ URL
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // -------------------------
  // 🟦 3. Đồng bộ state khi URL thay đổi
  // Ví dụ người dùng: nhấn Back/Forward hoặc gõ tay ?page=3
  // -------------------------
  useEffect(() => {
    // Nếu URL và state khác nhau thì cập nhật lại
    if (pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [pageFromUrl]);
  // Hook chạy khi pageFromUrl thay đổi

  // -------------------------
  // 🟦 4. Tính toán bài viết cần render theo từng page
  // -------------------------

  // Vị trí bắt đầu của page hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Lấy ra danh sách bài tương ứng với page hiện tại
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  // -------------------------
  // 🟦 5. Hàm đổi trang (pagination)
  // -------------------------
  const handlePageChange = (page: number) => {
    // Cập nhật state page nội bộ UI
    setCurrentPage(page);
    // Cập nhật URL: ví dụ /blog?page=3
    setSearchParams({ page: String(page) }); // SearchParams chỉ nhận string
  };

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
      </div>
      <Pagination
        currentPage={currentPage}        // Page hiện tại
        itemsPerPage={itemsPerPage}      // Số bài mỗi trang
        totalItems={posts.length}        // Tổng số bài
        onPageChange={handlePageChange}  // Hàm xử lý khi đổi trang
      />
    </section>
  );
};

export default BlogPost;
