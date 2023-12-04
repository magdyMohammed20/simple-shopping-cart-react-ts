import * as React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#222",
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function BasicModal({ open, setOpen }: ModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Product From Cart
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sure To Delete this product From Cart ?
          </Typography>
          <Box sx={{ p: 0, mt: 3 }}>
            <Button size="small" sx={{ pl: 0, ml: 0 }}>
              Yes
            </Button>
            <Button size="small">No</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
