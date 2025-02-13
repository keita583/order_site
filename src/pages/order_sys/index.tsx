import Image from "next/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from '@emotion/styled';
import { Button, Icon, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react';
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import OrderModal from "./orderModal";
import { useMediaQuery, useTheme } from "@mui/material";

// スタイル付きのButtonコンポーネントを作成
const StyledButton = styled(Button)({
  width: "70%",
  height: '13%',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '50px',
  position: 'absolute',
  top: '52%',
  left: '15%',

  '&:hover': {
    backgroundColor: 'orange',
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  },
  '& .MuiSvgIcon-root': {
    color: 'orange',
  },
});

const StyledButton2 = styled(Button)({
  width: "70%",
  height: '13%',
  backgroundColor: 'orange',
  color: 'white',
  borderRadius: '50px',
  position: 'absolute',
  top: '50%',
  left: '15%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
});

const StyledButton3 = styled(Button)({
  width: "80%",
  height: '40px',
  backgroundColor: 'orange',
  color: 'black',
  borderRadius: '50px',
  left: '10%',
  margin: '10px auto'
});

const StyledButton4 = styled(Button)({
  width: "100%",
  height: '40px',
  backgroundColor: 'orange',
  color: 'black',
  borderRadius: '50px',
  margin: '10px auto'
});

const sx = styled(ImageList)({
  position: 'relative',
  marginLeft: '5%',
});

const modalItemStyle = {
  position: 'absolute',
  borderRadius: "5px",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const itemData = [
  {
    img: 'image-meringue-mobile.jpg',
    thumbnailImg: 'image-meringue-thumbnail.jpg',
    title: 'pai',
    detail: 'lemonPai',
    price: 900,
  },
  {
    img: 'image-baklava-mobile.jpg',
    thumbnailImg: 'image-baklava-thumbnail.jpg',
    title: 'baklava',
    detail: 'apple baklava',
    price: 850,
  },
  {
    img: 'image-cake-mobile.jpg',
    thumbnailImg: 'image-cake-thumbnail.jpg',
    title: 'cake',
    detail: 'strovery cake',
    price: 980,
  },
  {
    img: 'image-creme-brulee-mobile.jpg',
    thumbnailImg: 'image-creme-brulee-thumbnail.jpg',
    title: 'cremeBurlee',
    detail: 'creme Burlee',
    price: 890,
  },
  {
    img: 'image-brownie-mobile.jpg',
    thumbnailImg: 'image-brownie-thumbnail.jpg',
    title: 'brownie',
    detail: 'chocolate brownie',
    price: 980,
  },
  {
    img: 'image-panna-cotta-mobile.jpg',
    thumbnailImg: 'image-panna-cotta-thumbnail.jpg',
    title: 'pannaCotta',
    detail: 'mile pannaCotta',
    price: 750,
  },
  {
    img: 'image-tiramisu-mobile.jpg',
    thumbnailImg: 'image-tiramisu-thumbnail.jpg',
    title: 'tiramisu',
    detail: 'coffee tiramisu',
    price: 580,
  },
  {
    img: 'image-waffle-mobile.jpg',
    thumbnailImg: 'image-waffle-thumbnail.jpg',
    title: 'waffle',
    detail: 'fulutu waffle',
    price: 680,
  },
  {
    img: 'image-macaron-mobile.jpg',
    thumbnailImg: 'image-macaron-thumbnail.jpg',
    title: 'macaron',
    detail: 'mix macaron',
    price: 840,
  },
];


export default function Home() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [cartItems, setCartItems] = useState(
    itemData.map(item => ({
      img: item.img,
      thumbnailImg: item.thumbnailImg,
      title: item.title,
      detail: item.detail,
      price: item.price,
      count: 0,
      isAdded: false,
    }))
  );

  // アイテムの総数を計算
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  // 合計金額を計算
  const totalPrice = cartItems.reduce((sum, item, index) => sum + (item.count * itemData[index].price), 0);

  const selectedItems = cartItems
    .map((item, index) => ({ ...item, ...itemData[index] }))  // アイテム情報を追加
    .filter(item => item.count > 0);

  const handleAddToCartClick = (index: number) => () => {
    const newCartItems = [...cartItems];
    newCartItems[index].isAdded = true;
    newCartItems[index].count = 1;
    setCartItems(newCartItems);
  };

  const handleIncrement = (index: number) => () => {
    const newCartItems = [...cartItems];
    newCartItems[index].count += 1;
    setCartItems(newCartItems);
  };

  const handleDecrement = (index: number) => () => {
    const newCartItems = [...cartItems];

    if (newCartItems[index].count > 1) {
      newCartItems[index].count -= 1;
    } else {
      newCartItems[index].isAdded = false;
      newCartItems[index].count = 0;
    }

    setCartItems(newCartItems);

  };

  const handleDelete = (item: { title: string }) => {
    setCartItems(prevItems =>
      prevItems.map(i =>
        i.title === item.title ? { ...i, count: 0, isAdded: false } : i // titleで一致するアイテムを削除
      )
    );
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (

    <>
      <Box sx={{ display: 'flex', height: '100%', width: '100%', flexDirection: isMobile ? 'column' : 'row', backgroundColor: '#FFFAF0' }}>
        
        <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column',width: isMobile ? '100%' : '55%', marginTop: '3%', marginLeft: isMobile ? '0' : '5%', backgroundColor: '#FFFAF0' }}>
          <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
            Dessert
          </Typography>
          <ImageList sx={{ width: '100%', height: isMobile ? 'auto' : '900px', backgroundColor: '#FFFAF0' }} cols={isMobile ? 1 : 3} rowHeight={isMobile ? 380 : 300}>

            {itemData.map((item, index) => (
              <ImageListItem key={item.img}>
                <Box sx={{ position: 'relative', padding: isMobile ? '5px' : '0' ,backgroundColor: '#FFFAF0' }}>
                  <Box sx={{
                    border: cartItems[index].count > 0 ? '5px solid orange' : 'none',
                    borderRadius: cartItems[index].count > 0 ? '8px' : '0',
                    height: '60%',
                    backgroundColor: '#FFFAF0'
                  }}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "5px" }}
                    />
                  </Box>
                  <Stack spacing={1} sx={{ p: 2, backgroundColor: '#FFFAF0', marginTop: '5px' }}>
                    <Typography variant="h6" sx={{ ffontSize:  '1.3rem', color: '#BBBBBB', whidth: '100%', height: '9%', backgroundColor: '#FFFAF0' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize:'1.3rem', color: '#333', whidth: '100%', height: '9%', backgroundColor: '#FFFAF0' }}>
                      {item.detail}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '1.3rem', whidth: '100%', height: '9%', backgroundColor: '#FFFAF0' }}>
                      ¥{item.price}
                    </Typography>
                  </Stack>
                  {!cartItems[index].isAdded ? (
                      <StyledButton
                        variant="contained"
                        color="primary"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={handleAddToCartClick(index)}
                      >
                        Add to Cart
                      </StyledButton>
                    ) : (
                      <StyledButton2
                        variant="contained"
                        color="primary"
                      >
                        <IconButton onClick={handleDecrement(index)} size="small">
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{cartItems[index].count}</Typography>
                        <IconButton onClick={handleIncrement(index)} size="small">
                          <AddIcon />
                        </IconButton>
                      </StyledButton2>
                    )}
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box sx={{
        width: isMobile ? '80%' : '30%',
        margin: isMobile ? 'auto' : '3%',
        marginBottom: isMobile ? '20px' : '0px'
      }}>
          <Card variant="outlined">
            <Typography sx={{ fontSize: isMobile ? 20 : 24, color: '#FF6600', borderRadius: "5px", paddingLeft: '15px' }}>
              Your Cart ({totalItemsCount})
            </Typography>

            {selectedItems.length === 0 ? (
              <Box sx={{ width: '100%', height: '60%', alignItems: 'center', textAlign: 'center' }}>
                <img
                  srcSet={`illustration-empty-cart.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`illustration-empty-cart.svg?w=164&h=164&fit=crop&auto=format`}
                  loading="lazy"
                  style={{ width: isMobile ? '50%' : '30%', height: '30%', objectFit: 'cover', borderRadius: "5px", margin: '10px auto' }}
                />
                <Typography variant="body1" sx={{ scolor: 'gray', width: '100%', textAlign: 'center', margin: '10px auto' }}>
                  Your appneditems will appear here
                </Typography>
              </Box>
            ) : (
              selectedItems.map((item, index) => (
                <Box key={index} sx={{ marginBottom: '2px', border: '1px solid #EEEEEE', borderRadius: "5px", display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '90%' }}>
                    <Typography variant="h5" sx={{fontSize: isMobile ? '1rem' : '1.3rem', paddingLeft: '3px', display: 'inline-block' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ paddingLeft: '3px' }}>
                      {item.count}x ¥{item.price}  ¥{(item.price * item.count).toLocaleString()}
                    </Typography>
                  </Box>
                  <Box sx={{ width: '10%', alignItems: 'center' }}>
                    <IconButton onClick={() => handleDelete(item)} size='large'>
                      <img
                        srcSet={`icon-remove-item.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`icon-remove-item.svg?w=164&h=164&fit=crop&auto=format`}
                      />
                    </IconButton>
                  </Box>
                </Box>
              ))

            )}

            {selectedItems.length > 0 && (
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                    height: '50px'
                  }}
                >
                  <span>Total:</span>
                  <span style={{ fontWeight: 'bold', paddingRight: '5px' }}>¥{totalPrice.toLocaleString()}</span>
                </Typography>
                <Box sx={{ display: 'flex', height: '40px', width: '80%', margin: '5px 10% ', backgroundColor: '#EEEEEE', borderRadius: "5px", alignItems: 'center', }}>
                  <Icon >
                    <img
                      srcSet={`icon-carbon-neutral.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`icon-carbon-neutral.svg?w=164&h=164&fit=crop&auto=format`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', margin: '0px 5px' }}
                    />
                  </Icon>
                  <Typography
                    sx={{ fontSize: '17px', margin: '0px auto' }}
                  >
                    this is a carbon-newtral delivery
                  </Typography>

                </Box>
                <StyledButton3
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                  sx={{
                    width: isMobile ? '90%' : '80%',
                    margin: isMobile ? '10px auto' : '5px 10%',
                  }}
                >
                  confirm Order
                </StyledButton3>
                <OrderModal open={open} handleClose={handleClose} modalItemStyle={modalItemStyle} selectedItems={selectedItems} setCartItems={setCartItems} itemData={itemData} />

              </Box>
            )}
          </Card>

        </Box>
      </Box >



    </>
  );
}



