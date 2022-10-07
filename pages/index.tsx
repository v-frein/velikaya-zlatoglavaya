import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  Logo,
  PageWrapper,
  PurchaseForm,
  TourDescription,
} from "../components";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Logo />
      <TourDescription />
    </PageWrapper>
  );
};

export default Home;
