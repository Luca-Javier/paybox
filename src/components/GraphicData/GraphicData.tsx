import { Box, Divider, Flex, GridItem, Image, Text } from "@chakra-ui/react"
import {
  cashoutLeyendStyles,
  containerStyles,
  dataTextStyles,
  sendMoneyLeyendStyles,
  subtitleStyles,
  titleStyles,
  utilitiesLeyendStyles,
} from "./styles"

function GraphicData() {
  return (
    <GridItem {...containerStyles}>
      <Flex direction="column">
        <Text {...titleStyles}>Transaction Comparative</Text>
        <Text {...sendMoneyLeyendStyles} {...subtitleStyles}>
          Send money
        </Text>
        <Text {...dataTextStyles}>₦105,000,000</Text>
        <Divider variant="dashed" h=".5px" w="222px" mb="15px" />
        <Flex gap="25px">
          <Box>
            <Text {...cashoutLeyendStyles} {...subtitleStyles}>
              Cashout
            </Text>
            <Text {...dataTextStyles} lineHeight="16px" mt="5px">
              ₦12,00,000
            </Text>
          </Box>
          <Box>
            <Text {...utilitiesLeyendStyles} {...subtitleStyles}>
              Utilities and Bills
            </Text>
            <Text {...dataTextStyles} lineHeight="16px" mt="5px">
              ₦4,200,000
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Image src="graphic.png" boxSize="140px" />
    </GridItem>
  )
}

export { GraphicData }
