import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.gif";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} maxW="100px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
