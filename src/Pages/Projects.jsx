import React from "react";
import {
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import fashion from "../Data/fashion.png";
import theoutnet from "../Data/theoutnet.png";
import indeeed from "../Data/indeeed.png";
import bewakoof from "../Data/bewakoof.png";

const Projects = () => {
  return (
    <Stack id="projects" pb="5%" spacing={5}>
      <Text color="gray" fontWeight="bold">
        What i did ?
      </Text>
      <Heading>MY PROJECTS</Heading>

      <SimpleGrid>
        {/* 1st project */}
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src={fashion}
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            borderRadius="1rem"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#2b3a33"
            p="2%"
            textAlign="left"
            spacing={5}
            borderRadius="1rem"

          >
            <Heading fontSize="25px" color="white">
              Asos.com
            </Heading>
            <Text color="lightgray" fontSize="16px">
              ASOS is a Men and Women's fashion brand for the newest & trending
              Cloths,fashion accessories and online shop that offered high
              quality products at an affordable price. We have built the exact
              website clone as it is on the original website.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Working Area : I was handling the front-end part and created a
              Landing page with responsive and Footer page.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Collaborative project with 4 team-members , executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Tech Skill used :{" "}
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                ReactJs | Redux | Mongodb | Express | NodeJs| Javascript | HTML5
                | CSS3 |GPay | GitHub{" "}
              </span>
            </Text>
            <Flex gap={3} align="center">
              <Button size="md" colorScheme="green">
                <Link
                  href="https://github.com/agodse21/agonizing-cable-172"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="md" colorScheme="red">
                <Link
                  href="https://frontend-eight-lime.vercel.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <br />

        {/* 2nd project */}
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src={theoutnet}
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            borderRadius="1rem"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#2b3a33"
            p="2%"
            textAlign="left"
            borderRadius="1rem"
            spacing={5}
          >
            <Heading fontSize="25px" color="white">
              TheOutnet.com
            </Heading>
            <Text color="lightgray" fontSize="16px">
              Theoutnet.com is a leading E-Commerce website for all types of
              clothes, and cosmetic products are available on this website such
              as jeans, trousers, fragrances, shoes, bags, etc. for both men &
              women.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Working Area :I was handling the front-end part and created a
              women's product page and payment page.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Collaborative project with 4 team-members , executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="14px">
              Tech Skill used :{" "}
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                {" "}
                Javascript | HTML5 | CSS3 | GitHub |Netlify
              </span>
            </Text>
            <Flex gap={3} align="center">
              <Button size="md" colorScheme="green">
                <Link
                  href="https://github.com/satyamkumarjha2002/Unit-3-project/tree/master"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="md" colorScheme="red">
                <Link
                  href="https://incomparable-kheer-67acf9.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <br />
        {/* 3rd project  */}
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src={indeeed}
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            borderRadius="1rem"
            objectFit="cover"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#2b3a33"
            p="2%"
            textAlign="left"
            spacing={5}
            borderRadius="1rem"
          >
            <Heading fontSize="25px" color="white">
              Indeed.com
            </Heading>
            <Text color="lightgray" fontSize="16px">
              Indeed is a American worldwide employment website which is provide
              a free service to job seekers, where you can search any job from
              and for your preffered location and you can upload your resume
              save it and create a job alert also to get email. Launched in
              November 2004.
            </Text>

            <Text color="lightgray" fontSize="15px">
              Working Area : I was handling the front-end part and created
              salary guide page,Footer page.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Collaborative project with 4 team-members , executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Tech Skill used :{" "}
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                {" "}
                ReactJs| Redux | Javascript | HTML5 | CSS3 | GitHub |Vercel
              </span>
            </Text>
            <Flex gap={3} align="center">
              <Button size="md" colorScheme="green">
                <Link
                  href="https://github.com/Chhattoo25/curved-knee-365"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="md" colorScheme="red">
                <Link
                  href="https://indeed-clone-ten.vercel.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <br />
        {/* ............................................. */}
        {/* 4th project  */}
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src={bewakoof}
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            borderRadius="1rem"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#2b3a33"
            p="2%"
            borderRadius="1rem"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="25px" color="white">
              Bewakoof.com
            </Heading>
            <Text color="lightgray" fontSize="16px">
              Bewakoof.com is a leading E-Commerce website for all types of
              clothes and mobile accessories products are available on this
              website such as jeans, shirts, mobile covers, shoes, bags, etc.
              for both men & women.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Working Area : I was handling the front-end part and created
              footer,landing page and payment page.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Collaborative project with 4 team-members , executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="15px">
              Tech Skill used :{" "}
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                Javascript | HTML5 | CSS3 | GitHub |Netlify
              </span>
            </Text>
            <Flex gap={3} align="center">
              <Button size="md" colorScheme="green">
                <Link
                  href="https://github.com/rajpawanku/Unit2ProjectBewakoof"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="md" colorScheme="red">
                <Link
                  href="https://radiant-alpaca-ceefd6.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Stack>
  );
};

export default Projects;
