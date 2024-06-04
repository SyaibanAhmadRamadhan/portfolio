import React from "react";

import MoreProjectsGrid from "../MoreProjectsGrid";
import SectionContainer from "../SectionContainer";

export default function MoreProjects() {
  return (
    <SectionContainer
      id="projects"
      name="projects"
      headerText="Projects"
      useHeaderStyle
    >
      <MoreProjectsGrid />
    </SectionContainer>
  );
}
