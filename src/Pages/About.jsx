import { Box, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import profileimg from "../Data/profile.png.jpg"
const About = () => {
  return (

    <Stack  pt="2%" pb="8%" bg="#41584d">
      <Text color="grey" fontWeight="bold" fontSize="20px">
        ABOUT ME
      </Text>
      <Heading>WHO AM I ?</Heading>
      <Flex
        h="95%"
        align="center"
        justify="center"
        gap={[0, 0, 12]}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Stack textAlign="justify" w={["90%", "90%", "50%"]}>
          <Box color="gray" p={6} fontSize={["18px", "22px"]}>
            <Text
              fontSize="40px"
              textAlign="center"
              color="lightpink"
              mr="99%"
              mb="3%"
            >
              <ImQuotesLeft />
            </Text>
            <Text> Hello !🙋</Text>
            <Text>As you know I'm Mahesh Raut.</Text>

            <Text>
            I am self-motivated, hardworking aspiring full-stack web developer with a passion for developing web applications. I love to build websites/applications that serves the world. and always want to enhance my knowledge & adpot new things that make impact on people.
            </Text>
            <Text fontSize="40px" textAlign="center" color="lightpink" ml="90%">
              <ImQuotesRight />
            </Text>
          </Box>
        </Stack>
        <Img
          src={profileimg}
          h="280px"
          bg="rgb(247, 224, 224,0.5)"
          borderRadius="5%"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        />
      </Flex>
    </Stack>
  )
}

export default About
