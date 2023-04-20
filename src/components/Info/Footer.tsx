import React from "react";
import { Box, Typography, Link } from "@mui/material"


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.nsu.ru/n/information-technologies-department/">
        ФИТ НГУ
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Разработанно учениками ФИТ НГУ
      </Typography>
      <Copyright />
    </Box>

  );
}
