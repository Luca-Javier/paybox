import { Box } from "@chakra-ui/react"
import { DesktopNavbar, MobileNavbar } from "../../components"
import { containerStyles } from "./styles"

function Navbar() {
  return (
    <Box {...containerStyles}>
      <MobileNavbar />
      <DesktopNavbar />
    </Box>
  )
}

export { Navbar }
