import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { DropdownArrow, ViewDetailsIcon } from "./Icons"
import { ItemDataContainerI } from "../../utils"
import {
  containerStyles,
  contentContainerStyles,
  titleStyles,
  viewDetailsStyles,
} from "./styles"

function ItemDataContainer({
  title,
  children,
  moreButton = false,
  todayButton = false,
  viewDetails = false,
}: ItemDataContainerI) {
  return (
    <GridItem {...containerStyles} pb={!viewDetails ? "12px" : "0"}>
      <Flex {...contentContainerStyles}>
        <Flex direction="row" justify="space-between" mb="18px" align="center">
          <Text {...titleStyles}>{title}</Text>
          {moreButton && <DataDropdownButton text="More" />}
          {todayButton && <DataDropdownButton text="Today" />}
        </Flex>
        <Grid templateColumns="repeat(2,1fr)">{children}</Grid>
      </Flex>
      {viewDetails && (
        <Flex align="center" ml="1rem" h="2.5rem" justify="flex-start">
          <Text {...viewDetailsStyles}>View details</Text>
          <ViewDetailsIcon />
        </Flex>
      )}
    </GridItem>
  )
}

export { ItemDataContainer }

function DataDropdownButton({ text }: { text: string }) {
  return (
    <Button
      rightIcon={<DropdownArrow />}
      bgColor="buttons.light"
      color="brand.third"
      fontSize="12px"
      fontWeight="500"
      letterSpacing="0.16px"
      lineHeight="15px"
      h="30px"
      ml="5px">
      {text}
    </Button>
  )
}
