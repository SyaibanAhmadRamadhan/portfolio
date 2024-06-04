import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Select,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import {Grid} from "@material-ui/core";
import React, {useState} from "react";
import {HiCode} from "react-icons/hi";
import Fade from "react-reveal/Fade";

import {extraProjects} from "../data/projects";
import {colors} from "../theme";
import LinkIconBar from "./LinkIconBar";
import Tech from "./Tech";
import MultiSelectMenu from "./MultiSelect";


const ProjectCard = ({name, description, links, tech}) => {
    const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
    const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
    return (
      <Box
        as={Grid}
        container
        item
        xs={9}
        sm={6}
        md={3}
        bgColor={bg}
        borderRadius="lg"
        borderWidth={bg === colors.bg.light ? "1px" : ""}
        direction="column"
        rounded="md"
        shadow="lg"
        textAlign="start"
        style={{margin: "24px"}}
      >
        <Grid container item direction="row">
          <Grid container item xs={6}>
            <Icon
              as={HiCode}
              boxSize="3em"
              color={secondary}
              m="auto"
              marginLeft="10px"
            />
          </Grid>
          <Grid container item xs={6} justifyContent="flex-end">
            <LinkIconBar links={links} mr="24px" />
          </Grid>
        </Grid>
        <Grid container item direction="row" style={{marginTop: "-24px"}}>
          <Heading as="h1" size="md" m={2} p={1} pt={6}>
            {name}
          </Heading>
        </Grid>
        <Grid container item direction="row">
          <Text fontSize="md" m={2} p={1}>
            {description}
          </Text>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justifyContent="space-evenly"
          style={{marginBottom: "12px"}}
        >
          <Tech tech={tech} />
        </Grid>
      </Box>
);
};

const ProjectRow = ({name, description, tech, links}) => (
  <Tr>
    <Td>{name}</Td>
    {/* <Td>{type}</Td> */}
    <Td>{description}</Td>
    <Td>
      <Grid container item direction="row">
        <Tech tech={tech} techMr={2} />
      </Grid>
    </Td>
    <Td>
      <Grid container>
        <LinkIconBar links={links} />
      </Grid>
    </Td>
  </Tr>
);

const ProjectTable = ({projs}) => (
  <Fade>
    <div style={{overflowX: "auto"}}>
      <Table size="md" w="100%">
        <Thead>
          <Tr>
            <Th w="10%">Name</Th>
            {/* <Th w="10%">Type</Th> */}
            <Th w="40%">Description</Th>
            <Th w="20%">Technologies</Th>
            <Th w="10%">Links</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projs.map((project) => (<ProjectRow key={project.name} {...project} />))}
        </Tbody>
      </Table>
    </div>
  </Fade>
);

const ProjectFilter = ({filter, setFilter}) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
      <Select value={filter} onChange={handleFilterChange}>
        <option value="all">All Projects</option>
        <option value="Personal">Personal Projects</option>
        <option value="Work">Work Project</option>
      </Select>
);
};


const getUniqueTechs = (projects) => {
    const allTags = projects.flatMap(project => project.tech);
    return [...new Set(allTags)];
};

const SelectTech = ({setTechs, uniqueTechs}) => {

    const handleFilterChange = (event) => {
        setTechs(event);
    };


    return (<MultiSelectMenu options={uniqueTechs} label="TECHNOLOGIES" onChange={handleFilterChange} />);
};

export default function MoreProjectsGrid() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showGridView] = useState(false);
    const [filter, setFilter] = useState("all");
    const [techs, setTechs] = useState([]);

    let filteredProjects = extraProjects;
    let uniqueTechs = getUniqueTechs(filteredProjects);

    // Filter by project type
    if (filter !== "all") {
        filteredProjects = filteredProjects.filter(project => project.type === filter);
        uniqueTechs = getUniqueTechs(filteredProjects);
    }
    if (techs.length > 0) {
        filteredProjects = filteredProjects.filter(project => techs.some(tech => project.tech.includes(tech)));
    }
    if (!isExpanded) {
        filteredProjects = filteredProjects.slice(0, 3);
    }

    return (
      <>
        <Flex justifyContent="flex-start" pl="15%" pr="15%" w="100vw">
          <Grid
            style={{marginTop: "24px", marginRight: "10px", marginBottom: "24px"}}
          >
            <ProjectFilter filter={filter} setFilter={setFilter} />
          </Grid>
          <Grid
            style={{marginTop: "24px", marginBottom: "24px"}}
          >
            <SelectTech setTechs={setTechs} uniqueTechs={uniqueTechs} />
          </Grid>
        </Flex>
        <Flex justifyContent="center" w="100vw">
          <Grid container item xs={12} sm={9} md={9} justifyContent="center">
            {showGridView ? (filteredProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />))) : (
                <ProjectTable projs={filteredProjects} />)}
          </Grid>
        </Flex>
        <Flex justifyContent="center" w="100vw">
          <Button
            mt={6}
            leftIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {`Show ${isExpanded ? "Less" : "More"}`}
          </Button>
        </Flex>
      </>
    );
}
