import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import NextImage from "next/image";

import { auth } from "../lib/mutations";
import Logo from "../public/Logo.svg";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };
  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px" borderBottom="white">
        <NextImage width={120} height={60} src={Logo} />
      </Flex>
      <Flex
        justify="center"
        align="center"
        height="calc(100vh - 100px)"
        color="white"
      >
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              _hover={{ bg: "green.300" }}
              _loading={{ bg: "green.300" }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
