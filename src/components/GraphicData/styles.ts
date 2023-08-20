import { GridItemProps, TextProps } from "@chakra-ui/react"

export const containerStyles: GridItemProps = {
  display: "flex",
  bgColor: "white",
  p: "24px",
  flexDir: { base: "column", lg: "row" },
  borderRadius: "2xl",
  gridColumnStart: "2",
  gridColumnEnd: "span 2",
  justifyContent: "space-around",
  alignItems: { base: "flex-start", lg: "center" },
  gap: { base: "2rem", lg: "0" },
}

export const titleStyles: TextProps = {
  lineHeight: "15px",
  fontFamily: "secondary",
  fontWeight: "500",
  letterSpacing: "0.16px",
  color: "text.grayDark",
  fontSize: "16px",
  mb: "20px",
}

export const subtitleStyles: TextProps = {
  ...titleStyles,
  fontSize: "10px",
  m: "0",
}

export const dataTextStyles: TextProps = {
  color: "#263238",
  lineHeight: "31px",
  fontSize: "16px",
  fontFamily: "primary",
  letterSpacing: "1.16px",
  fontWeight: "600",
}

const dataLeyendPointedColor = {
  display: "inline-block",
  content: '" "',
  borderRadius: "50%",
  w: "8px",
  h: "8px",
  mr: "8px",
  bgColor: "#18A201",
}

export const sendMoneyLeyendStyles: TextProps = {
  _before: {
    ...dataLeyendPointedColor,
    bgColor: "brand.third",
  },
}

export const cashoutLeyendStyles: TextProps = {
  _before: {
    ...dataLeyendPointedColor,
    bgColor: "#F4BE38",
  },
}

export const utilitiesLeyendStyles: TextProps = {
  _before: {
    ...dataLeyendPointedColor,
    bgColor: "#EDE1FF",
  },
}
