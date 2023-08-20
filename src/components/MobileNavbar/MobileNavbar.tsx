import { Text, Button, Flex } from "@chakra-ui/react"
import { buttonStyles, containerStyles } from "./styles"

function MobileNavbar() {
  return (
    <Flex {...containerStyles}>
      <Text color="text.secondary" display={{ lg: "none" }}>
        Analytics dashboard
      </Text>
      <Button {...buttonStyles}>Menu</Button>
    </Flex>
  )
}

export { MobileNavbar }
