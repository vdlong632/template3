import Introduce from "./components/introduce/Introduce";
import Story from "./components/story/Story";
import Timeline from "./components/timeline/Timeline";
import Team from "./components/team/Team";
import Investors from "./components/investors/Investors";
const About = () => {
    return (
        <div className="about">
            <Introduce />
            <Story />
            <Timeline />
            <Team />
            <Investors />
        </div>
    )
}
export default About;