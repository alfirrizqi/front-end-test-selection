import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from "react";
import  Axios  from "axios";


const MainPage = () => {
  return(
    <Grid
  h='container.md'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
  )

}

export default MainPage;
