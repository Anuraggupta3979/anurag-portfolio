import React from "react";
import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Certificate = dynamic(() => import("../containers/Certificate"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import SEO from "../components/SEO";
import { projects } from "../projects";
const Projects = dynamic(() => import("../containers/Projects"));
function projects({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Certificate",
          description:
            "A passionate Full Stack Web Developer and Mobile App Developer.",
          image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
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
      {/* <Greetings /> */}
      <Projects projects={projects} />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

export default projects;
