import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.gif";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} maxW="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
