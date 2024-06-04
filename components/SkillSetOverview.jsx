import {
    Flex,
    ListItem,
    Select,
    UnorderedList,
} from "@chakra-ui/react";
import {Grid} from "@material-ui/core";
import React, {useState} from "react";

import SkillSet from "../data/skillSet";

const SkillSetSelect = ({skillSetIndex, setIndex}) => (
  <Select value={skillSetIndex} onChange={(e) => setIndex(e.target.value)}>
    {SkillSet.map((item, index) => (
      <option key={`${item.name}-select-option`} value={index}>
        {item.name}
      </option>
        ))}
  </Select>
);

const SkillSetDetails = ({index}) => {
    const skillSet = SkillSet[index];
    return (
      <Grid container item direction="column">
        <Grid container item style={{marginLeft: "12px", marginBottom: "12px"}}>
          <UnorderedList mt={2}>
            {(skillSet.category && skillSet.category.length > 0) ? (
                        skillSet.category.map((data) => (
                          <ListItem key={data.name}>
                            <span style={{fontWeight: "bold", fontSize: "1.2em"}}>
                              {data.name}:
                            </span>{" "}
                            {data.skills.join(", ")}
                          </ListItem>
                        ))
                    ) : (
                        skillSet.skills && skillSet.skills.map((data) => (
                          <ListItem key={data}>{data}</ListItem>
                        ))
                    )}
          </UnorderedList>
        </Grid>
      </Grid>
    );
};

export default function SkillSetOverview() {
    const [index, setIndex] = useState(0);

    return (
      <>
        <Flex justifyContent="center" pl="15%" pr="15%" w="100vw">
          <Grid
            container
            direction="column"
            justifyContent="center"
            item
            xs={9}
            sm={6}
            md={2}
            style={{marginTop: "24px", marginBottom: "24px",}}
          >
            <SkillSetSelect skillSetIndex={index} setIndex={setIndex} />
          </Grid>
        </Flex>
        <Flex justifyContent="flex-start" pl="15%" w="100vw">
          <Grid
            container
            item
            xs={9}
            sm={6}
            style={{marginTop: "24px", marginBottom: "24px", marginLeft: "12px"}}
          >
            <SkillSetDetails index={index} />
          </Grid>
        </Flex>
      </>
    );
}
