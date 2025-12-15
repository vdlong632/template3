const Features = () => {
    return (
        <section className="features">
            <div className="content">
                <h2 className="content_h2">Build your crypto portfolio</h2>
                <p className="content_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
            </div>

            <div className="features__grid">
                <div className="feature-card">
                    <div className="feature-icon">💸</div>
                    <h3>Send & Receive</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🔒</div>
                    <h3>100% Secure Wallet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                </div>

                <div className="feature-card feature-card--center">
                    <h3>iOS & Android App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque.</p>
                    <img src="/assets/iPhones.png" alt="" />
                </div>

                <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Trading Charts</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🔁</div>
                    <h3>Real Time Trading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                </div>
            </div>

            <button className="btn--download">DOWNLOAD APP</button>
        </section>
    )
}
export default Features;