import React from "react";

import SectionContainer from "../SectionContainer";
import SkillSetOverview from "../SkillSetOverview";

export default function SkillSet() {
  return (
    <SectionContainer
      id="skill set"
      name="skill set"
      headerText="Skill Set"
      useHeaderStyle
    >
      <SkillSetOverview />
    </SectionContainer>
  );
}
