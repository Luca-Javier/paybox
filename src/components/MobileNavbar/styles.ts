import { ButtonProps, FlexProps } from "@chakra-ui/react"

export const containerStyles: FlexProps = {
  w: "100%",
  display: { base: "flex", lg: "none" },
  justify: "space-between",
  align: "center",
  fontFamily: "secondary",
}

export const buttonStyles: ButtonProps = {
  display: { lg: "none" },
  color: "text.secondary",
  px: "1.5rem",
  lineHeight: "20px",
  fontWeight: "500",
  bgColor: "buttons.blueLight",
}
