import { Box, Button, Text, Stack, Heading, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import "../Styles/Home.css";
import resume from "../Data/Mahesh_Resume.pdf";

const Home = () => {
  return (
    <Box>
      <Stack id="home" bg="#1B2430" pt="13%" pb="13%" spacing={5}>
        <Flex align="center" justify="center">
          <Stack align="center" justify="center" spacing={5}>
            <Text color="gray" fontSize="24px">
              Hi, My Name is
            </Text>
            <Heading color="white" fontSize={["50px", "60px", "70px", "90px"]}>
              Mahesh Raut
            </Heading>
            <Flex
              id="txt1"
              color="white"
              gap={3}
              fontSize={["20px", "25px", "30px", "40px"]}
            >
              <Text>Full Stack Web </Text>
              <Text id="txt">Developer</Text>
            </Flex>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="red"
              variant="solid"
            >
              <a
                href={resume}
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/1FK4oPRvCkRpYRRQMBDmpR1eUQZT1eLjX/view?usp=drive_link")
                }
                download="Mahesh_Raut_Resume"
          >
                View Resume
              </a>
            </Button>
            download
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Home;
