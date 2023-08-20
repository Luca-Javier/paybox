import { extendTheme } from "@chakra-ui/react"

export const colors = {
  brand: {
    primary: "#F8F9FB",
    secondary: "#F6FAFF",
    third: "#032282",
    thirdDark: "#07112D",
  },
  text: {
    primary: "#032282",
    secondary: "#FFFFFF",
    lightGray: "#4F64A7",
    gray: "#CDCDCD",
    grayDark: "#37474F",
  },
  buttons: {
    blueLight: "#2D4696",
    light: "#EAF4FF",
  },
  transactions: {
    success: "#18A201",
    fail: "#FF0000",
    send: "#032282",
    cashout: "#F4BE38",
    utilities: "#EDE1FF",
  },
  link: {
    hover: "#192749",
    iconHover: "#5879FD",
  },
}

const fonts = {
  h1: "'Clash Display', sans-serif",
  primary: "'sora', sans-serif",
  secondary: "'Nunito Sans', sans-serif",
}

export const theme = extendTheme({ colors, fonts })
