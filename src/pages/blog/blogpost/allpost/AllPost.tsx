

const AllPost = () => {
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
                    <article className="blog-card">
                        <div className="blog-card__image">
                            <img src="/assets/divLaptop.png" alt=""></img>
                            <span className="blog-card__tag">PRODUCTS</span>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title">The Basics about Cryptocurrency</h3>
                            <p>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                            <div className="card__footer">
                                <img src="assets/author.png" alt="Alex Turner" className="card-author_img" />
                                <div>
                                    <p className="card__author-name">ALEX TURNER</p>
                                    <p className="card__date">AUGUST 2, 2021</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="blog-card">
                        <div className="blog-card__image">
                            <img src="/assets/divLaptop.png" alt=""></img>
                            <span className="blog-card__tag">PRODUCTS</span>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title">The Basics about Cryptocurrency</h3>
                            <p>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                            <div className="card__footer">
                                <img src="assets/author.png" alt="Alex Turner" className="card-author_img" />
                                <div>
                                    <p className="card__author-name">ALEX TURNER</p>
                                    <p className="card__date">AUGUST 2, 2021</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="blog-card">
                        <div className="blog-card__image">
                            <img src="/assets/divLaptop.png" alt=""></img>
                            <span className="blog-card__tag">PRODUCTS</span>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title">The Basics about Cryptocurrency</h3>
                            <p>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                            <div className="card__footer">
                                <img src="assets/author.png" alt="Alex Turner" className="card-author_img" />
                                <div className="author-info">
                                    <p className="card__author-name">ALEX TURNER</p>
                                    <p className="card__date">AUGUST 2, 2021</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <nav className="pagination" aria-label="Page navigation">
                    <button className="page-item prev disabled" aria-disabled="true">Prev</button>
                    <button className="page-item active" aria-current="page">1</button>
                    <button className="page-item">2</button>
                    <button className="page-item">3</button>
                    <button className="page-item">4</button>
                    <button className="page-item next">Next</button>
                </nav>
        </section>
    )
}
export default AllPost