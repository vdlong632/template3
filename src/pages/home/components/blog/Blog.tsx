const Blog = () => {
    return (
        <section className="blog">
            <div className="blog-header">
                <h2>Browse our latest news</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .</p>
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
                            <img src="assets/author.png"  alt="Alex Turner" className="card-author_img" />
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
                            <img src="assets/author.png"  alt="Alex Turner" className="card-author_img" />
                            <div className="author-info">
                                <p className="card__author-name">ALEX TURNER</p>
                                <p className="card__date">AUGUST 2, 2021</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <button className="btn-view">VIEW ALL ARTICLES</button>
        </section>
        
    )
}
export default Blog;