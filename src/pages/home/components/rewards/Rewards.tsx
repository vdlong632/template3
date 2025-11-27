
const Rewards = () => {
    return (
        <div className="rewards">
            <section className="rewards__top">
                <div className="rewards__image">
                    <img
                        src="/assets/Group2.png"
                        alt="Crypto app interface on phone"
                    />
                </div>

                <div className="rewards__content">
                    <h2>Earn daily rewards on your idle tokens</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat nulla suspendisse tortor aene.
                    </p>

                    <ul className="rewards__list">
                        <li>
                            <span className="icon">💰</span>
                            <span>Lowest fees in market</span>
                        </li>
                        <li>
                            <span className="icon">⚡</span>
                            <span>Fast and secure transactions</span>
                        </li>
                        <li>
                            <span className="icon">🔒</span>
                            <span>256-bit secure encryption</span>
                        </li>
                    </ul>
                </div>

            </section>

            <section className="rewards__bottom">
                <div className="rewards__content">
                    <h2>Earn daily rewards on your idle tokens</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat nulla suspendisse tortor aene.
                    </p>

                    <ul className="rewards__list">
                        <li>
                            <span className="icon">💰</span>
                            <span>100% Private data</span>
                        </li>
                        <li>
                            <span className="icon">⚡</span>
                            <span>99.99% Uptime guarantee</span>
                        </li>
                        <li>
                            <span className="icon">🔒</span>
                            <span>24/7 Delicated support </span>
                        </li>
                    </ul>
                </div>
                <div className="rewards__image">
                    <img
                        src="/assets/AppleComputers2.png"
                        alt="Crypto app interface on phone"
                    />
                </div>
                <div className="rewards__mobile">
                    <img
                    src="assets/Laptop.png"
                    alt=""
                    />
                </div>
            </section>
        </div>
    );
};

export default Rewards;
