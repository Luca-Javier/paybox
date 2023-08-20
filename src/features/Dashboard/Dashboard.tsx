import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import {
  containerStyles,
  dataBigTextStyles,
  dataTextStyles,
  failTextStyles,
  mainContentTextStyles,
  successTextStyles,
  titleStyles,
  subTitleStyles,
  gridStyles,
} from "./styles"
import {
  BrandItemDataContainer,
  GraphicData,
  ItemDataContainer,
} from "../../components"

function Dashboard() {
  return (
    <Box {...containerStyles}>
      <Text {...titleStyles}>Analytics dashboard</Text>

      <Grid {...gridStyles}>
        <BrandItemDataContainer />

        <ItemDataContainer title="Total savings balance" viewDetails>
          <Text {...mainContentTextStyles}>₦194,000</Text>
        </ItemDataContainer>

        <ItemDataContainer title="Total customers" viewDetails>
          <Text {...mainContentTextStyles}>₦919</Text>
        </ItemDataContainer>

        <ItemDataContainer title="Total POS" viewDetails>
          <Text {...mainContentTextStyles}>0</Text>
        </ItemDataContainer>

        <ItemDataContainer title="Total transfers" moreButton>
          <WeekInfo />
        </ItemDataContainer>

        <ItemDataContainer title="Total inflows" moreButton>
          <WeekInfo />
        </ItemDataContainer>

        <ItemDataContainer title="Total transactions" moreButton>
          <WeekInfo />
        </ItemDataContainer>

        <ItemDataContainer title="Total count" moreButton>
          <GridItem>
            <Text {...subTitleStyles}>Today</Text>
            <Text {...dataTextStyles}>200</Text>
          </GridItem>
          <GridItem>
            <Text {...subTitleStyles}>Yesterday</Text>
            <Text {...dataTextStyles}>210</Text>
          </GridItem>
          <GridItem>
            <Text {...subTitleStyles}>This week</Text>
            <Text {...dataTextStyles}>1,200</Text>
          </GridItem>
          <GridItem>
            <Text {...subTitleStyles}>Last week</Text>
            <Text {...dataTextStyles}>2,400</Text>
          </GridItem>
        </ItemDataContainer>

        <ItemDataContainer title="Total cashout" moreButton>
          <GridItem>
            <Text {...subTitleStyles}>Today</Text>
            <Text {...dataTextStyles}>₦1,200,000</Text>
          </GridItem>
          <GridItem>
            <Text {...subTitleStyles}>Yesterday</Text>
            <Text {...dataTextStyles}>₦1,200,000</Text>
          </GridItem>
        </ItemDataContainer>

        <ItemDataContainer title="Total status" moreButton>
          <GridItem>
            <Text {...successTextStyles} {...subTitleStyles}>
              Success
            </Text>
            <Text {...dataBigTextStyles}>422</Text>
          </GridItem>
          <GridItem>
            <Text {...failTextStyles} {...subTitleStyles}>
              Failed
            </Text>
            <Text {...dataBigTextStyles}>18</Text>
          </GridItem>
        </ItemDataContainer>

        <ItemDataContainer title="Average transaction Count" moreButton>
          <GridItem>
            <Text {...subTitleStyles}>Value</Text>
            <Text {...dataTextStyles}>₦20,400</Text>
          </GridItem>
          <GridItem>
            <Text {...subTitleStyles}>Count</Text>
            <Text {...dataTextStyles}>422</Text>
          </GridItem>
        </ItemDataContainer>

        <ItemDataContainer title="Total commission" moreButton>
          <GridItem>
            <Text {...subTitleStyles}>POS commisssion</Text>
            <Text {...dataTextStyles}>₦87,000</Text>
          </GridItem>
          <GridItem>
            <Text {...subTitleStyles}>Lotto commission</Text>
            <Text {...dataTextStyles}>₦102,000</Text>
          </GridItem>
        </ItemDataContainer>

        <ItemDataContainer
          title="Average commission per transaction"
          moreButton>
          <GridItem>
            <Text {...subTitleStyles}>POS commisssion</Text>
            <Text {...dataTextStyles}>₦500</Text>
          </GridItem>
          <GridItem>
            <Text {...subTitleStyles}>Lotto commission</Text>
            <Text {...dataTextStyles}>₦200</Text>
          </GridItem>
        </ItemDataContainer>

        <GraphicData />
      </Grid>
    </Box>
  )
}

export { Dashboard }

function WeekInfo() {
  return (
    <>
      <GridItem>
        <Text {...subTitleStyles}>Today</Text>
        <Text {...dataTextStyles}>₦1,200,000</Text>
      </GridItem>
      <GridItem>
        <Text {...subTitleStyles}>Yesterday</Text>
        <Text {...dataTextStyles}>₦1,200,000</Text>
      </GridItem>
      <GridItem>
        <Text {...subTitleStyles}>This week</Text>
        <Text {...dataTextStyles}>₦1,200,000</Text>
      </GridItem>
      <GridItem>
        <Text {...subTitleStyles}>Last week</Text>
        <Text {...dataTextStyles}>₦1,200,000</Text>
      </GridItem>
    </>
  )
}
