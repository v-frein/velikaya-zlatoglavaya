import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Logo, PageWrapper, PurchaseForm } from "../components";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Logo />
      <PurchaseForm />
    </PageWrapper>
  );
};

export default Home;
