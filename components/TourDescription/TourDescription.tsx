import { Box, Button, Center, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

export const TourDescription: FC = () => {
  return (
    <Box
      w="740px"
      color="white"
      textAlign="justify"
      fontWeight="bold"
      bgColor="red.700"
      borderRadius="md"
      p="14px"
    >
      <Text>
        Участников экскурсии ждёт увлекательный рассказ об истории столицы
        Российского Государства - Москве.
      </Text>
      <List ml="14px">
        <ListItem>Как и когда появилась Москва?</ListItem>
        <ListItem>
          Как Московскому Княжеству удалось объединить раздробленную Русь в
          единое государство?
        </ListItem>
        <ListItem>Почему в 1812г. царь приказал сжечь Москву?</ListItem>
      </List>
      <Text>
        Эти и множество других фактов будут освещены во время экскурсии.
        Посетители пройдут по следующему маршруту:
      </Text>
      <List ml="14px">
        <ListItem>1. Памятник Князю Владимиру</ListItem>
        <ListItem>2. Стены Московского Кремля</ListItem>
        <ListItem>3. Парк Зарядье</ListItem>
        <ListItem>4. Храм Христа Спасителя</ListItem>
        <ListItem>5. Памятник Петру 1</ListItem>
      </List>
      <Center>
        <Link href="/purchase">
          <Button colorScheme="blue">Купить билет</Button>
        </Link>
      </Center>
    </Box>
  );
};
