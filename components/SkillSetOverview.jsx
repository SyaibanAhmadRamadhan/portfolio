import {
    Button,
    Flex,
    Heading,
    Link,
    ListItem,
    Select,
    Text,
    UnorderedList,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import {Grid} from "@material-ui/core";
import React, {useState} from "react";

import SkillSet from "../data/skillSet";
import {colors} from "../theme";

const SkillSetSelect = ({skillSetIndex, setIndex}) => (
    <Select value={skillSetIndex} onChange={(e) => setIndex(e.target.value)}>
        {SkillSet.map((item, index) => (
            <option key={`${item.name}-select-option`} value={index}>
                {item.name}
            </option>
        ))}
    </Select>
);

const SkillSetButton = ({skillSetIndex, setIndex}) => (
    <Grid
        container
        item
        direction="row"
        spacing={2}
        justifyContent="center"
        style={{ display: 'flex', flexDirection: 'row' }}
    >
        {SkillSet.map((item, index) => (
            <Grid container item key={`${item.name}-btn`}>
                <Button
                    isActive={skillSetIndex === index}
                    isFullWidth
                    onClick={() => setIndex(index)}
                >
                    {item.name}
                </Button>
            </Grid>
        ))}
    </Grid>
);

const SkillSetDetails = ({index}) => {
    const skillSet = SkillSet[index];
    const secondary = useColorModeValue(
        colors.secondary.light,
        colors.secondary.dark
    );
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
            {/* <Grid container item style={{ marginLeft: "12px" }}> */}
            {/*  {skillSet.duration.map((duration) => ( */}
            {/*    <Grid key={duration} container item> */}
            {/*      <Text mt={2}>{duration}</Text> */}
            {/*    </Grid> */}
            {/*  ))} */}
            {/* </Grid> */}
        </Grid>
    );
};

export default function SkillSetOverview() {
    const [index, setIndex] = useState(0);
    const showSelect = useBreakpointValue({
        base: false,
        lg: true,
    });
    const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

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
                    {showSelect ? (
                        <SkillSetButton skillSetIndex={index} setIndex={setIndex}/>
                    ) : (
                        <SkillSetSelect skillSetIndex={index} setIndex={setIndex}/>
                    )}
                </Grid>
            </Flex>
            <Flex
                as={Grid}
                container
                item
                direction="row"
                justifyContent="flex-start"
                xs={9}
                sm={9}
                borderRadius="lg"
                borderWidth={bg === colors.bg.light ? "1px" : ""}
                rounded="md"
                style={{
                    margin: "24px",
                    marginTop: "3vh",
                    width: "75vw",
                    height: "60vh",
                }}
            >
                <Grid
                    container
                    item
                    xs={9}
                    sm={6}
                    style={{marginTop: "24px", marginBottom: "24px", marginLeft: "12px"}}
                >
                    <SkillSetDetails index={index}/>
                </Grid>
            </Flex>
        </>
    );
}
