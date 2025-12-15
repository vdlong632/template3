const Download = () => {
    return (
        <section className="download-app">
            <div className="download-header">
                <h2>Download our app</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .</p>
            </div>
            <div className="download-area">
                <div className="download-card ios">
                    <h2>Download for iOS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.</p>
                    <button className="btn appstore">APP STORE</button>
                    <img src="assets/ios.png" alt="" />
                </div>
                <div className="download-card android">
                    <h2>Download for Android</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.</p>
                    <button className="btn playstore">PLAY STORE</button>
                    <img src="assets/android.png" alt="" />
                </div>
            </div>
        </section>
    )
}
export default Download;