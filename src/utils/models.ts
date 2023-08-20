export interface NavbarLinkI {
  Icon: React.ComponentType<{ isHover: boolean }>
  notDropdown?: boolean
  text: string
}

export interface IconI {
  isHover: boolean
}

export interface ItemDataContainerI {
  title: string
  children: React.ReactNode
  moreButton?: boolean
  todayButton?: boolean
  viewDetails?: boolean
}
