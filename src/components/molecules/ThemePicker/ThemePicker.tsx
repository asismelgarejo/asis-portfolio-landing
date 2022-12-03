import { Box, Button } from '@mui/material'
import React from 'react'
import { useThemeContext } from 'src/contexts';

export const ThemePicker = () => {
    const {mode, changeTheme} = useThemeContext();
  return (
    <Box>
        <Button onClick={()=> changeTheme("darkTheme")}>DARK</Button>
        <Button onClick={()=> changeTheme("defaultTheme")}>DEFAULT</Button>
    </Box>
  )
}
