import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";


const Contact = () => {
  const iconstyle = {
    color: "white",
    padding: 3,
  };

  const iconhover = {
    borderRadius: "30% 5% 30% 5%",
    backgroundColor: "#41584d",
    color: "black",
    cursor: "pointer",
  }

  
  return (
    <Stack id="contact" pb={4} pt={8} bg="#131c17" spacing={5}>
      <Text color="gray" fontWeight="bold">
        CONTACT ME
      </Text>
      <Heading color="lightgray">Get in Touch</Heading>
      <SimpleGrid
        w="100%"
        fontSize="30px"
        spacing={5}
        columns={[1, 1, 2, 4]}
        align="center"
        justify="center"
        padding={10}
        border="1px solid"
      >
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Box style={iconstyle} _hover={iconhover}>
            <Link href="https://github.com/Rautmahi" target="_blank">
              <BsGithub />
            </Link>
          </Box>
          <Link href="https://github.com/Rautmahi" target="_blank">
            <Text
              fontSize={["12px", "16px", "18px", "20px"]}
              color="gray"
              _hover={{ color: "pink" }}
            >
              Github
            </Text>
          </Link>
        </Flex>
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Box style={iconstyle} _hover={iconhover}>
            <Link
              href="https://www.linkedin.com/in/mahesh-raut-886387195/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </Link>
          </Box>
          <Link
            href="https://www.linkedin.com/in/mahesh-raut-886387195/"
            target="_blank"
          >
            {" "}
            <Text
              fontSize={["12px", "16px", "18px", "20px"]}
              color="gray"
              _hover={{ color: "pink" }}
            >
              Linkedin
            </Text>
          </Link>
        </Flex>
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Box style={iconstyle} _hover={iconhover}>
            <IoIosCall />
          </Box>
          <Text
            fontSize={["12px", "16px", "18px", "20px"]}
            color="gray"
            _hover={{ color: "pink" }}
          >
            +91 8412848012
          </Text>
        </Flex>
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Link
            href="mailto:rautmahii96@gmail.com?subject = Feedback&body = Message"
            color="white"
          >
            <Box style={iconstyle} _hover={iconhover}>
              <IoMdMail />
            </Box>
          </Link>

          <Text
            fontSize={["12px", "16px", "18px", "20px"]}
            color="gray"
            _hover={{ color: "pink" }}
          >
            rautmahii96@gmail.com
          </Text>
        </Flex>
      </SimpleGrid>
      <Text color="whitesmoke">
        Designed and Developed by Mahesh Raut© 2023 All rights reserved.
      </Text>
    </Stack>
  );
};

export default Contact;
