import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Box>
      <Text fontSize="32px" fontWeight="bold" color="white">
        Великая - Златоглавая
      </Text>
      <Text textAlign="center" color="white">
        Пешая экскусрия
      </Text>
    </Box>
  );
};
