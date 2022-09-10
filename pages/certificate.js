import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Certificate = dynamic(() => import("../containers/Certificate"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import SEO from "../components/SEO";
function certificate({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Certificate",
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
      <Certificate prof={githubProfileData} />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

export default certificate;
certificate.prototype = {
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
