import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { projects } from "../portfolio";
import { Container, Row, Button } from "reactstrap";
export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Anurag Gupta",
          description:
            "A passionate Full Stack Web Developer and Mobile App Developer.",
          image: "https://avatars.githubusercontent.com/u/75747708?v=4",
          url: "www.anurag-gupta.ml",
          keywords: [
            "Anurag",
            "Anurag Gupta",
            "anuraggupta3979",
            "AnuragGupta3979",
            "Anurag Portfolio",
            "Portfolio ",
            "Anurag Gupta Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "mobile app developer",
            "android developer",
            "Anurag Gupta Jodhpur",
            "Anurag Gupta MBM Jodhpur",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects projects={projects} />
      <Container>
        <Row className="d-flex">
          <Button
            className="btn-icon"
            color="success"
            href="/projects"
            // target="_blank"
            style={{
              width: "200px",
              margin: "auto",
              marginBottom: "100px",
            }}
          >
            Explore More
          </Button>
        </Row>
      </Container>
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/Anuraggupta3979`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
