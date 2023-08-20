import { FlexProps, GridItemProps, TextProps } from "@chakra-ui/react"

export const containerStyles: GridItemProps = {
  fontFamily: "primary",
  bgColor: "white",
  borderRadius: "2xl",
  p: "12px",
  h: "fit-content",
}

export const contentContainerStyles: FlexProps = {
  bgColor: "brand.secondary",
  p: "1rem",
  pt: "16px",
  direction: "column",
  borderRadius: "2xl",
}

export const titleStyles: TextProps = {
  color: "text.lightGray",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "15px",
}

export const viewDetailsStyles: TextProps = {
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  color: "brand.third",
  pb: "2.01px",
}
