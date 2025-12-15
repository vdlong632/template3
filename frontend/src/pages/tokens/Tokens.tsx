const Tokens = () => {
    return (
        <section className="token">
            <div className="heading">
                <h1>Tokens</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                    nulla suspendisse tortor aenean dis placerat. Scelerisque
                </p>
            </div>

            <table className="token__table">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>MARKET CAP</th>
                        <th>VOLUME</th>
                        <th>WEBSITE</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Bitcoin</td>
                        <td className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>$252,844,036,453 USD</td>
                        <td>$30,504,879,301 USD</td>
                        <td><a href="#">Visit Website</a></td>
                    </tr>
                    <tr>
                        <td>Ethereum</td>
                        <td className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>$252,844,036,453 USD</td>
                        <td>$30,504,879,301 USD</td>
                        <td><a href="#">Visit Website</a></td>
                    </tr>
                    <tr>
                        <td>Litecoin</td>
                        <td className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>$252,844,036,453 USD</td>
                        <td>$30,504,879,301 USD</td>
                        <td><a href="#">Visit Website</a></td>
                    </tr>
                    <tr>
                        <td>TRON</td>
                        <td className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>$252,844,036,453 USD</td>
                        <td>$30,504,879,301 USD</td>
                        <td><a href="#">Visit Website</a></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Tokens;
