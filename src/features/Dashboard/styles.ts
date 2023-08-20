import { BoxProps, GridProps, TextProps } from "@chakra-ui/react"

export const containerStyles: BoxProps = {
  fontFamily: "secondary",
  m: { base: "0", lg: "1rem" },
  borderRadius: { base: "0", lg: "3xl" },
  flex: "1",
  bgColor: "brand.primary",
  w: "100%",
}

export const gridStyles: GridProps = {
  templateColumns: { base: "1fr", lg: "repeat(4,1fr)" },
  display: { base: "flex", lg: "grid" },
  flexDirection: "column",
  p: "2rem",
  gap: "20px",
}

export const titleStyles: TextProps = {
  display: { base: "none", lg: "block" },
  bgColor: "white",
  p: "1rem",
  pt: "2.5rem",
  borderRadius: "3xl",
  fontSize: "24px",
  fontWeight: "600",
}

export const mainContentTextStyles: TextProps = {
  color: "text.primary",
  fontWeight: "600",
  fontSize: "20px",
  fontFamily: "primary",
  lineHeight: "31px",
  letterSpacing: "1.16px",
}

export const subTitleStyles: TextProps = {
  color: "text.lightGray",
  fontSize: "12px",
  fontWeight: "400",
  letterSpacing: "0.16px",
  fontFamily: "secondary",
  lineHeight: "12px",
}

export const dataTextStyles: TextProps = {
  ...mainContentTextStyles,

  fontSize: "14px",
}

export const dataBigTextStyles: TextProps = {
  ...mainContentTextStyles,
  fontSize: "16px",
}

export const successTextStyles: TextProps = {
  _before: {
    display: "inline-block",
    content: '" "',
    borderRadius: "50%",
    w: "8px",
    h: "8px",
    mr: "8px",
    bgColor: "#18A201",
  },
}

export const failTextStyles: TextProps = {
  _before: {
    display: "inline-block",
    content: '" "',
    borderRadius: "50%",
    w: "8px",
    h: "8px",
    mr: "8px",
    bgColor: "#FF0000",
  },
}
