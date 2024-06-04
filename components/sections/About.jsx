import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Rama! I studied System Information at the University Bina
        Sarana Informatika, and I&apos;m currently working at{" "}
        <Link href="https://www.kompit.com" isExternal>
          Kompit
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>Junior Backend Engineer</strong>.
      </Text>
      <Text>
        I am a <strong style={{ color: secondary }}> Software Engineer</strong>{" "}
        with more than 1 year of experience. My main focus is to design,
        develop, and maintain servers, databases, and backend services for
        software applications. for software applications. My expertise includes
        Golang, Java, PHP, Python. However I emphasize the use of Golang as my
        go-to language for building efficient and reliable backend solutions.
        and reliable backend solutions. I am committed to learning and
        developing myself according to the the latest developments in the world
        of technology.
        {/* I enjoy creating scalable & elegant web/mobile applications that have a */}
        {/* real world impact. I&apos;m always learning new technologies, either */}
        {/* through{" "} */}
        {/* <Link href="https://devpost.com/jcserv" isExternal> */}
        {/*  hackathons */}
        {/* </Link>{" "} */}
        {/* or self-study - and recently became an{" "} */}
        {/* <strong style={{ color: secondary }}> */}
        {/*  <Link */}
        {/*    href="https://www.credly.com/badges/517ae2cf-990f-4e3f-acf7-c7dc692c67a0/public_url" */}
        {/*    isExternal */}
        {/*  > */}
        {/*    AWS Certified Developer */}
        {/*  </Link> */}
        {/* </strong> */}
        {/* . */}
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.png"
      alt="Syaiban Ahmad Ramadhan"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://www.linkedin.com/in/iban-rama");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
