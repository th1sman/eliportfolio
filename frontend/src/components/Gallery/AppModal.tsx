
import { Modal, Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const AppModal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        <StyledModal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ backgroundColor: 'white', boxShadow: 24, p: 4, width: 500 }}>
                {children}
            </Box>
        </StyledModal>
    )
}

export default AppModal