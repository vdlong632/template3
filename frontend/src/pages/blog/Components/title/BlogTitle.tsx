
const BlogTitle = () => {
    return (
        <div className="blogtitle">
            <div className="inline">
                <div className="heading">
                    <h1>Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>
                </div>
                <div className="features">
                    <div className="content">
                        <div className="tag">FEATURED</div>
                        <h3>Cryptocurrency Explained With Pros and Cons for Investment</h3>
                        <p>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                    </div>
                    <div className="features-img">
                        <img
                            src="/assets/divLaptop.png"
                            alt="Mockup"
                        />
                    </div>
                </div>
                <article className="blog-card">
                    <div className="blog-card__image">
                        <img src="/assets/divLaptop.png" alt=""></img>
                        <span className="blog-card__tag">PRODUCTS</span>
                    </div>
                    <div className="card__content">
                        <h3 className="card__title">The Basics about Cryptocurrency</h3>
                        <p>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                        <div className="card__footer">
                            <img src="assets/author.png"  alt="Alex Turner" className="card-author_img" />
                            <div>
                                <p className="card__author-name">ALEX TURNER</p>
                                <p className="card__date">AUGUST 2, 2021</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
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
        </div>
    )
}
export default BlogTitle;