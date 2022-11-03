import {
  IconButton,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  useMergeRefs,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import loginImg from "../../assets/img/login-img.jpg";
import owlimg from "../../assets/img/Owl.png";
import { useState } from "react";

export const LogInPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef(null);
  const mergeRef = useMergeRefs(inputRef);
  const logHandler = () => {
    // log in api action
    // user name input: userName
    // password input: password
  };

  const misradHandler = () => {
    // לחיצה על הזדהות אחידה משרד החינוך
  };
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      });
    }
  };
  return (
    <Flex h="100vh" alignItems="center" bg={"#fcffff"}>
      <Box
        w={["0", "0%", "0%", "60%"]}
        h="100%"
        bgImage={loginImg}
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
      ></Box>
      <Container maxW="lg">
        <Stack spacing="8">
          <Stack spacing="5">
            <FormControl>
              <FormLabel color="sec.800" htmlFor="username">
                שם משתמש
              </FormLabel>
              <Input
                bg="white"
                id="username"
                type="username"
                onChange={(event) => setUserName(event.currentTarget.value)}
                value={userName}
              />
              <FormLabel color="sec.800" htmlFor="password">
                סיסמה
              </FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IconButton
                    variant="link"
                    aria-label={isOpen ? "Mask password" : "Reveal password"}
                    icon={isOpen ? <HiEyeOff /> : <HiEye />}
                    onClick={onClickReveal}
                  />
                </InputLeftElement>
                <Input
                  bg="white"
                  id="password"
                  ref={mergeRef}
                  name="password"
                  type={isOpen ? "text" : "password"}
                  autoComplete="current-password"
                  p="4"
                  pl="10"
                  onChange={(event) => setPassword(event.currentTarget.value)}
                  value={password}
                  required
                />
              </InputGroup>{" "}
            </FormControl>
          </Stack>
          <Stack spacing="3">
            <Button onClick={() => logHandler()} variant="solid" on>
              התחבר
            </Button>
            <Button onClick={() => misradHandler()} variant="outline" size="lg">
              <Image h="80%" src={owlimg} />
              הזדהות אחידה משרד החינוך
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};
