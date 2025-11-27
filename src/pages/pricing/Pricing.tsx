
const Pricing = () => {
    return (
        <div className="pricing">
            <div className="heading">
                <h1>Pricing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque</p>
            </div>
            <div className="options">
                <div className="option">
                    <div className="logo"></div>
                    <p>Send & receive</p>
                </div>
                <div className="option">
                    <div className="logo"></div>
                    <p>Trading charts</p>
                </div>
                <div className="option">
                    <div className="logo"></div>
                    <p>Wallet</p>
                </div>
                <div className="option">
                    <div className="logo"></div>
                    <p>Real Time Trading</p>
                </div>
            </div>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <h3>BASIC</h3>
                    <p className="price">$ 100 USD</p>
                    <p className="desc">Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

                    <div className="features">
                        <h4>FEATURES</h4>
                        <ul>
                            <li>Everything included in Basic</li>
                            <li>Trading up to $1MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Premium Support</li>
                        </ul>
                    </div>

                    <button className="btn">CONTACT US</button>
                </div>

                <div className="pricing-card">
                    <h3>PRO</h3>
                    <p className="price">$ 100 USD</p>
                    <p className="desc">Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

                    <div className="features">
                        <h4>FEATURES</h4>
                        <ul>
                            <li>Everything included in Basic</li>
                            <li>Trading up to $1MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Premium Support</li>
                        </ul>
                    </div>

                    <button className="btn">CONTACT US</button>
                </div>

                <div className="pricing-card">
                    <h3>EXPERT</h3>
                    <p className="price">$ 100 USD</p>
                    <p className="desc">Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

                    <div className="features">
                        <h4>FEATURES</h4>
                        <ul>
                            <li>Everything included in Basic</li>
                            <li>Trading up to $1MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Premium Support</li>
                        </ul>
                    </div>

                    <button className="btn">CONTACT US</button>
                </div>
            </div>
        </div>
    )
}
export default Pricing