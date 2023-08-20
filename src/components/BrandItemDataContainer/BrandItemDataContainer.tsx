import { Flex, GridItem, Text, Button, ButtonGroup } from "@chakra-ui/react"
import { containerStyles, moneyStyles } from "./styles"

function BrandItemDataContainer() {
  return (
    <GridItem {...containerStyles}>
      <Flex direction="column">
        <Text color="text.gray" fontSize="14px" lineHeight="14px">
          Wallet Balance
        </Text>
        <Flex gap="1rem" align="center" mb="18px">
          <Text {...moneyStyles}>₦50,000.00</Text>
          <EyeIcon />
        </Flex>
        <ButtonGroup justifyContent="space-around">
          <CustomButton text="Add fund" />
          <CustomButton text="Withdraw" />
        </ButtonGroup>
      </Flex>
    </GridItem>
  )
}

export { BrandItemDataContainer }

function CustomButton({ text }: { text: string }) {
  return (
    <Button
      fontSize="14px"
      opacity="15"
      color="white"
      bgColor="buttons.blueLight"
      fontWeight="400"
      h="40px"
      w="112px">
      {text}
    </Button>
  )
}

function EyeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 16.33C9.61 16.33 7.67 14.39 7.67 12C7.67 9.61004 9.61 7.67004 12 7.67004C14.39 7.67004 16.33 9.61004 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.17004C10.44 9.17004 9.17 10.44 9.17 12C9.17 13.56 10.44 14.83 12 14.83C13.56 14.83 14.83 13.56 14.83 12C14.83 10.44 13.56 9.17004 12 9.17004Z"
        fill="white"
      />
      <path
        d="M12 21.02C8.24 21.02 4.69 18.82 2.25 15C1.19 13.35 1.19 10.66 2.25 8.99998C4.7 5.17998 8.25 2.97998 12 2.97998C15.75 2.97998 19.3 5.17998 21.74 8.99998C22.8 10.65 22.8 13.34 21.74 15C19.3 18.82 15.75 21.02 12 21.02ZM12 4.47998C8.77 4.47998 5.68 6.41998 3.52 9.80998C2.77 10.98 2.77 13.02 3.52 14.19C5.68 17.58 8.77 19.52 12 19.52C15.23 19.52 18.32 17.58 20.48 14.19C21.23 13.02 21.23 10.98 20.48 9.80998C18.32 6.41998 15.23 4.47998 12 4.47998Z"
        fill="white"
      />
    </svg>
  )
}
