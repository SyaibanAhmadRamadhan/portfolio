/* eslint-disable no-console */
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

import links from "../data/footerLinks";
import LinkIconBar from "./LinkIconBar";


export default function Footer() {

  // useEffect(() => {
  //   fetch("https://api.github.com/repos/jcserv/portfolio")
  //     .then((response) => response.json()) // Converting the response to a JSON object
  //     .then((data) => {
  //       setForks(data.forks);
  //       setStars(data.stargazers_count);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      {/* <Link href={GITHUB_URL} isExternal> */}
      {/*  <Text fontSize="sm"> */}
      {/*    Made with{" "} */}
      {/*    <span aria-label="heart" role="img"> */}
      {/*      &#128153; */}
      {/*    </span> */}
      {/*    {" (and React) by Jarrod Servilla"} */}
      {/*  </Text> */}
      {/* </Link> */}
      {/* <Stack direction="row" alignItems="center" justify="center"> */}
      {/*  <GoRepoForked /> <Text size="xs">{forks}</Text> */}
      {/*  <GoStar /> <Text size="xs">{stars}</Text> */}
      {/* </Stack> */}

      <Text fontSize="sm" mt={2} onClick={scroll.scrollToTop}>
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Click me to scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
      </Text>
      <LinkIconBar links={links} />
    </Box>
  );
}
