import { Grid, GridItem, Text } from "@chakra-ui/react";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

export default function Layout() {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
    >
      <GridItem w={60} rowSpan={2} colSpan={1} bg="tomato"><SideNavigation/></GridItem>
      <GridItem h="50px" colSpan={5} bg="papayawhip" >
          <TopNavigation/>
      </GridItem>
    </Grid>
  );
}
