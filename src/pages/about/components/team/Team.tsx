
const Team = () => {
    return (
        <section className="team">
            <div className="team-title">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies.</p>
            </div>
            <div className="team-grid">
                <div className="card-team">
                    <div className="card-image">
                        <img
                            src="/assets/teamAvt.png"
                            alt="Avatar"
                        />
                    </div>
                    <div className="card-infor">
                        <p className="name">John Carter</p>
                        <p className="role">CEO & CO-Founder</p>
                    </div>
                </div>

                <div className="card-team">
                    <div className="card-image">
                        <img
                            src="/assets/teamAvt.png"
                            alt="Avatar"
                        />
                    </div>
                    <div className="card-infor">
                        <p className="name">John Carter</p>
                        <p className="role">CEO & CO-Founder</p>
                    </div>
                </div>

                <div className="card-team">
                    <div className="card-image">
                        <img
                            src="/assets/teamAvt.png"
                            alt="Avatar"
                        />
                    </div>
                    <div className="card-infor">
                        <p className="name">John Carter</p>
                        <p className="role">CEO & CO-Founder</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;