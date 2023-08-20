import { Flex } from "@chakra-ui/react"
import { Navbar, Dashboard } from "./features"

function App() {
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        h="100vh"
        bgColor="brand.thirdDark">
        <Navbar />
        <Dashboard />
      </Flex>
    </>
  )
}

export default App
