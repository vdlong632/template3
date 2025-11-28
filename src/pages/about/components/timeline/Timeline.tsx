
const Timeline = () => {
    return (
        <section className="timeline">
            <div className="intro">
                <h2>Timeline</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
            </div>
            <div className="timeline-content">
                <ul>
                    <li>
                        <div className="marker"></div>
                        <div className="body">
                            <p className="years">2014</p>
                            <p className="label">Announcement</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                            <span className="devider"></span>
                        </div>
                    </li>
                    <li>
                        <div className="marker"></div>
                        <div className="body">
                            <p className="years">2016</p>
                            <p className="label">Announcement</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                            <span className="devider"></span>
                        </div>
                    </li>
                    <li>
                        <div className="marker"></div>
                        <div className="body">
                            <p className="years">2018</p>
                            <p className="label">Announcement</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                            <div className="devider"></div>
                        </div>
                    </li>
                    <li>
                        <div className="marker"></div>
                        <div className="body">
                            <p className="years">2022</p>
                            <p className="label">Announcement</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                            <span className="devider"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Timeline;