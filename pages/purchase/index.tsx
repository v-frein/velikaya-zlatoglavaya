import { NextPage } from "next";
import { Logo, PageWrapper, PurchaseForm } from "../../components";

const purchase: NextPage = () => {
  return (
    <PageWrapper>
      <Logo />
      <PurchaseForm />
    </PageWrapper>
  );
};

export default purchase;
