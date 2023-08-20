import { Text, Flex, Divider } from "@chakra-ui/react"
import {
  containerStyles,
  dividerStyles,
  navbarLinkStyles,
  subtitleStyles,
  titleStyles,
} from "./styles"
import {
  CardIcon,
  CardsIcon,
  DashboardIcon,
  DropdownIcon,
  HomeIcon,
  LeaderboardIcon,
  PersonaldIcon,
  RadarIcon,
  ScaleIcon,
  SettingIcon,
  TalentIcon,
} from "./Icons"
import { useState } from "react"
import { NavbarLinkI } from "../../utils"

function DesktopNavbar() {
  return (
    <Flex {...containerStyles}>
      <Text {...titleStyles}>Paybox</Text>
      <Text {...subtitleStyles}>by LibertyPay</Text>

      <Divider {...dividerStyles} />

      <NavbarLink notDropdown Icon={HomeIcon} text="Home" />
      <NavbarLink notDropdown Icon={DashboardIcon} text="Analytics Dashboard" />

      <Divider {...dividerStyles} />

      <NavbarLink Icon={PersonaldIcon} text="Personal" />
      <NavbarLink Icon={ScaleIcon} text="Scale Hub" />
      <NavbarLink Icon={TalentIcon} text="Talent managment" />
      <NavbarLink Icon={CardIcon} text="Spend managment" />
      <NavbarLink Icon={CardsIcon} text="Cards" />

      <Divider {...dividerStyles} />

      <NavbarLink notDropdown Icon={LeaderboardIcon} text="Leaderboard" />
      <NavbarLink notDropdown Icon={SettingIcon} text="Profile & Settings" />
      <NavbarLink Icon={RadarIcon} text="Bank performance" />
    </Flex>
  )
}

export { DesktopNavbar }

function NavbarLink({ Icon, notDropdown = false, text }: NavbarLinkI) {
  const [isHover, setIsHover] = useState(false)

  return (
    <Flex
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...navbarLinkStyles}>
      <Flex gap="1rem">
        <Icon isHover={isHover} />
        <Text>{text}</Text>
      </Flex>

      {!notDropdown && <DropdownIcon />}
    </Flex>
  )
}
