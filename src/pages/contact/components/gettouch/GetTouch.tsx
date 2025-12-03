
const GetTouch = () => {
    return (
        <section className="gettouch">
            <h1>Get in touch</h1>
            <div className="contact-layout">
                <div className="contact-form">
                    <form>
                        <div className="column">
                            <label>NAME</label>
                            <input className="name" name="name" placeholder="Full Name" />
                            <label>COMPANY</label>
                            <input className="company" name="company" placeholder="Company Name" />
                        </div>
                        <div className="column">
                            <label>EMAIL</label>
                            <input className="email" name="email" placeholder="email@example.com" />
                            <label>SUBJECT</label>
                            <input className="subject" name="subject" placeholder="How can we help?" />
                        </div>
                    </form>
                    <div className="field">
                        <label>MESSAGE</label>
                        <textarea className="message" name="message" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit">SEND MESSAGE</button>
                </div>
                <aside className="contact-info">
                    <h3>Want to reach us directly</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.</p>
                    <ul>
                        <li>
                            <span className="icon">💰</span>
                            <span>Download app</span>
                        </li>
                        <li>
                            <span>💰</span>
                            <span>Create a free account</span>
                        </li>
                        <li>
                            <span>💰</span>
                            <span>Start trading</span>
                        </li>
                    </ul>
                </aside>
            </div>
        </section>
    )
}
export default GetTouch;