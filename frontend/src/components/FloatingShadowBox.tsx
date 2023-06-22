import Box from '@mui/material/Box'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const FloatingShadowBox = styled(Box)(
    css`
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 3);
        transition: box-shadow 0.3 ease-in-out;

        &:hover {
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 20);
        }

        @media (max-width: 768px) {
            box-shadow: none;
        }

        @media (max-width: 390px) {
            height: auto
        }
    
    `
)

export default FloatingShadowBox