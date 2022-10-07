import { FC, useState } from "react";
import { Formik } from "formik";
import {
  Button,
  Center,
  HStack,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

interface InitialValues {
  name: string;
  surname: string;
  email: string;
  date: Date;
}

const initialValues: InitialValues = {
  name: "",
  surname: "",
  email: "",
  date: new Date(),
};

export const PurchaseForm: FC = () => {
  const {
    isOpen: isOpenPayback,
    onOpen: onOpenPayback,
    onClose: onClosePayback,
  } = useDisclosure();

  const {
    isOpen: isOpenRequisites,
    onOpen: onOpenRequisites,
    onClose: onCloseRequisites,
  } = useDisclosure();

  const {
    isOpen: isOpenRequisitess,
    onOpen: onOpenRequisitess,
    onClose: onCloseRequisitess,
  } = useDisclosure();

  const onSubmitHandler = (values: InitialValues) => {
    console.log(values);
  };
  return (
    <VStack bgColor="white" borderRadius="md">
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
        {({ values, setFieldValue, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <VStack align="center" padding="32px" gap="8px">
              <Text fontWeight="bold">Покупка билета</Text>
              <Input
                placeholder="Введите имя"
                name="name"
                onChange={handleChange}
              />
              <Input
                placeholder="Введите фамилию"
                name="surname"
                onChange={handleChange}
              />
              <Input
                placeholder="Введите email"
                name="email"
                onChange={handleChange}
              />
              <SingleDatepicker
                name="date"
                date={values.date}
                onDateChange={(date) => setFieldValue("date", date)}
              />
              <Text>Стоимость: 1000 рублей</Text>
              <Button colorScheme="blue" type="submit">
                Купить
              </Button>
              <HStack>
                <Link color="gray.500" onClick={onOpenPayback}>
                  Возврат
                </Link>
                <Modal isOpen={isOpenPayback} onClose={onClosePayback}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Возврат средств</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        Для возврата денежных средств просим вас написать письмо
                        на почту v.frein@mail.ru. В письме необоходимо указать
                        ФИО и дату указанные при покупке билета, а так же
                        реквизиты на которые вы хотите получить денежные
                        средства.
                      </Text>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Link color="gray.500" onClick={onOpenRequisites}>
                  Реквизиты
                </Link>
                <Modal isOpen={isOpenRequisites} onClose={onCloseRequisites}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Реквизиты</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>Организатор - ИП Фрейн Вячеслав Александрович</Text>
                      <Text>ИНН - 772098512338</Text>
                      <Text>ОГРНИП - 322774600207205</Text>
                      <Text>Регион - Город Москва</Text>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Link color="gray.500" onClick={onOpenRequisitess}>
                  График проведения
                </Link>
                <Modal isOpen={isOpenRequisitess} onClose={onCloseRequisitess}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>График проведения</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        Экскурсии проводятся каждый день с 12:00 до 16:00 по
                        Московскому времени.
                      </Text>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </HStack>
            </VStack>
          </form>
        )}
      </Formik>
    </VStack>
  );
};
