import { DividerProps, FlexProps, TextProps } from "@chakra-ui/react"

export const dividerStyles: DividerProps = {
  variant: "dashed",
  borderWidth: "0.4px",
  size: "sm",
  my: "2rem",
  opacity: "20%",
}

export const navbarLinkStyles: FlexProps = {
  p: "1rem",
  borderRadius: "lg",
  _hover: { bgColor: "link.hover" },
  fill: "blue.100,",
  w: "100%",
  justify: "space-between",
  fontWeight: "600",
}

export const containerStyles: FlexProps = {
  display: { base: "none", lg: "flex" },
  direction: "column",
  color: "text.secondary",
}

export const titleStyles: TextProps = {
  fontWeight: "700",
  fontSize: "2rem",
  lineHeight: "39.36px",
  fontFamily: "h1",
}

export const subtitleStyles: TextProps = {
  fontFamily: "h1",
  fontWeight: "200",
  fontSize: "12px",
}
