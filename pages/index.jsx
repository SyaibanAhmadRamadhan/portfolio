import React from "react";

import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Landing from "../components/sections/Landing";
import MoreProjects from "../components/sections/MoreProjects";
import styles from "../styles/Home.module.css";
import SkillSet from "../components/sections/SkillSet";

export default function Home() {
    return (
      <div className={styles.container}>
        <Landing />
        <About />
        <SkillSet />
        <Experience />
        {/* <Projects/> */}
        <MoreProjects />
        <Contact />
      </div>
    );
}
