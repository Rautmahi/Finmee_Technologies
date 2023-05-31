
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


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  //const [styletop, setstyletop] = useState("0");
  const navstyle = {
    position: "fixed",
    //top: styletop,
    display: "block",
    overflow: "hidden",
    // transition: "top 0.3s",
    width: "100%",
    zIndex: 2,
  };
 
  return (
    <Stack style={navstyle} bg="#1B2430" p={2} color="white">
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
                  Project
                </Link>
                <Link activeClass="active1" smooth spy to="contact">
                  Contact
                </Link>
                <Button variant="link" color="black">
                 Resume
                </Button>
              </Flex>
            </SimpleGrid>
          </DrawerContent>
        </Drawer>
      </Show>
      <Show above="lg">
        <SimpleGrid
          // columns={1}
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
              Project
            </Link>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
            <Button variant="link" color="white">
            Resume
                </Button>
          </Flex>
        </SimpleGrid>
      </Show>
    </Stack>
  );
};

export default Navbar;

