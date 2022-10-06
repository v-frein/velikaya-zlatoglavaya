import { VStack } from "@chakra-ui/react";
import { FC } from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <VStack
      w="100%"
      h="100vh"
      justify="center"
      align="center"
      bgImage="url('/images/background.png')"
      bgSize="cover"
    >
      {children}
    </VStack>
  );
};
