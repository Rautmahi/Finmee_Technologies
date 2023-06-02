import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Projects from '../Pages/Projects'
import Navbar from './Navbar'
import Contact from '../Pages/Contact'



const AllRoutes = () => {
  return (
    <Stack>
      <Navbar/>
      <Box>
        <Home/>
        <About/>
       <Skills/>
         {/* <Projects/>
        <Contact/> */}
      </Box>
    </Stack>
  )
}

export default AllRoutes
