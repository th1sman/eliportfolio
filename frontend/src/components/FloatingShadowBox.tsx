import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const FloatingShadowBox = styled(Box)({
    boxShadow: '0px 4px 2px rgba(0, 0, 0, 3)',
    '&:hover': {
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 20)',
        transition: 'box-shadow 0.3s ease-in-out',
    },
})

export default FloatingShadowBox