import React from "react";
import {
  SimpleGrid,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Show,
  Text,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import "../Styles/Navbar.css";
import resume from "../Data/Mahesh_Resume.pdf";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navstyle = {
    position: "fixed",
    display: "block",
    overflow: "hidden",
    width: "100%",
    zIndex: 2,
  };

  
  return (
    <Stack style={navstyle} bg="#233029" p={2} color="white">
      {/* for small screen */}
      <Show below="lg">
        <MdMenu ref={btnRef} onClick={onOpen} fontSize="25px" />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerContent bg="whitesmoke">
            <DrawerCloseButton />
            <SimpleGrid
              columns={1}
              align="center"
              justify="space-between"
              id="navbar"
            >
              <Flex
                align="center"
                justify="right"
                gap={9}
                fontWeight="bold"
                flexDirection="column"
              >
                <Link activeClass="active1" smooth spy to="home">
                  Home
                </Link>
                <Link activeClass="active1" smooth spy to="about">
                  AboutMe
                </Link>
                <Link activeClass="active1" smooth spy to="skill">
                  Skills
                </Link>
                <Link activeClass="active1" smooth spy to="projects">
                  Projects
                </Link>
                <Link activeClass="active1" smooth spy to="contact">
                  Contact
                </Link>
                <Button variant="link" color="black">
                  <a
                    href={resume}
                    onClick={() =>
                      (window.location.href =
                        "https://drive.google.com/file/d/1FK4oPRvCkRpYRRQMBDmpR1eUQZT1eLjX/view?usp=drive_link")
                    }
                    download="Mahesh_Raut_Resume"
                  >
                    <Flex>
                      <Text>Resume</Text>
                    </Flex>
                  </a>
                </Button>
              </Flex>
            </SimpleGrid>
          </DrawerContent>
        </Drawer>
      </Show>

      {/* for large screen */}
      <Show above="lg">
        <SimpleGrid
          align="center"
          justifyContent="right"
          justify="space-between"
          id="navbar"
          mr="100px"
        >
          <Stack></Stack>
          <Flex
            columns={1}
            // align="center"
            justify="right"
            gap={10}
            fontWeight="bold"
            fontSize="20px"
          >
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
            <Link activeClass="active" smooth spy to="about">
              AboutMe
            </Link>
            <Link activeClass="active" smooth spy to="skill">
              Skills
            </Link>
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
            <Button variant="link" color="white">
              <a
                href={resume}
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/1FK4oPRvCkRpYRRQMBDmpR1eUQZT1eLjX/view")
                }
                download="Mahesh_Raut_Resume"
              >
                <Flex>
                  <Text fontSize="20px" fontWeight="bold">
                    Resume
                  </Text>
                </Flex>
              </a>
            </Button>
          </Flex>
        </SimpleGrid>
      </Show>
    </Stack>
  );
};

export default Navbar;
