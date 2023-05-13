import React from 'react'
import { Box, Typography, Grid, Hidden } from "@mui/material"

export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        bgcolor: "#1f273c",
        paddingTop: 7,
        color: '#dcdbc7'
      }}
    >
      <Grid spacing={5} container justifyContent="center" alignItems="center">
        <Hidden smDown>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" align="center" fontFamily='Dancing Script' fontSize={20}>
              Chef/Cocinero/Oficio 👨‍🍳🔪🍷🥢🍴🍽️  Negocios de AA.BB. ☕🍲🍳🥙
            </Typography>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant='body1' align='center' fontFamily='Dancing Script' fontSize={20} sx={{ mr: 1 }}>
              Ayudo a rentabilizar 🍽️🌭🍝🍜🍔  | 📩 eliezerjarac@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>


    </Box>
  )
}

export default Footer