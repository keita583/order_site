
import { Typography } from "@mui/material";
import { Button, Box } from "@mui/material";
import Modal from '@mui/material/Modal';  
import styled from '@emotion/styled';

const StyledButton4 = styled(Button)({
  width: "100%",
  height: '40px',
  backgroundColor: 'orange',
  color: 'black',
  borderRadius: '50px',
  margin: '10px auto'
});

type cartItems = {
  img: string;
  thumbnailImg: string;
  title: string;
  detail: string;
  price: number;
  count: number;
  isAdded: boolean;
}
type itemData = 
  {
    img: string;
    thumbnailImg: string;
    title: string;
    detail: string;
    price: number
  }

interface Props {
  open: any
  handleClose: any
  modalItemStyle: any
  selectedItems: cartItems[]
  setCartItems: (items: cartItems[]) => void
  itemData: itemData[]; 
}

export default function OrderModal({
  open,
  handleClose,
  modalItemStyle,
  selectedItems,
  setCartItems,
  itemData
}: Props) {
  console.log(open);
  return (
    <Modal
    component="div" 
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"

    >
      <Box sx={modalItemStyle}>
        <img
          srcSet={`icon-order-confirmed.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`icon-order-confirmed.svg?w=164&h=164&fit=crop&auto=format`}
        />

        <Typography id="modal-modal-title" sx={{ fontWeight: 'bold', margin: '10px 0px' }} variant="h5" component="h2" >
          Order Confired
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '15px', color: '#AAAAAA', margin: '10px 0px' }}>
          We hope you enjoy your food!
        </Typography>
          {selectedItems.map((item, index) => (
            <Box key={index} sx={{ marginBottom: '2px', border: '1px solid #EEEEEE', borderRadius: "5px", display: 'flex', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
              <img
                srcSet={`${item.thumbnailImg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.thumbnailImg}?w=164&h=164&fit=crop&auto=format`}
              >
              </img>
              <Box sx={{ width: '90%' }}>
                <Typography variant="h5" sx={{ paddingLeft: '3px', display: 'inline-block' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ paddingLeft: '3px' }}>
                  {item.count}x ¥{Number(item.price).toLocaleString()}  ¥{Number((item.price * item.count)).toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
          <StyledButton4
            variant="contained"
            color="primary"
            onClick={() => {
              setCartItems(itemData.map(item => ({
                img: item.img,
                thumbnailImg: item.thumbnailImg,
                title: item.title,
                detail: item.detail,
                price: item.price,
                count: 0,
                isAdded: false,
              })));
              handleClose(); // モーダルを閉じる
            }}
          >
            Start New Order
          </StyledButton4>
      </Box>
    </Modal>
  )
}