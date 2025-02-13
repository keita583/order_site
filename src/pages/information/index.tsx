import { Box, TextField, Typography, Button, Paper } from "@mui/material";
import styled from '@emotion/styled';
import React, { useState } from "react";
import { z } from 'zod';
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


const items = [
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

const StyledButton = styled(Button)({
    width: "80%",
    height: '40px',
    backgroundColor: 'orange',
    color: 'black',
    borderRadius: '50px',
    margin: '20px auto'
});

const fullWidthRegex = /^[^\x01-\x7E]{1,20}$/;

const emailSchema = z.string().email("正しいメールアドレスを入力してください");
const firstNameSchema = z.string().max(20, "姓は20文字以内にしてください。").regex(fullWidthRegex, "全角文字のみで入力してください。");
const lastNameSchema = z.string().max(20, "名は20文字以内にしてください。").regex(fullWidthRegex, "全角文字のみで入力してください。");
const firstPostSchema = z.string().length(3, "郵便番号は3文字で入力してください。").regex(/^[0-9]{3}$/, "半角数字のみで3文字入力してください。");
const lastPostSchema = z.string().length(4, "郵便番号は4文字で入力してください。").regex(/^[0-9]{4}$/, "半角数字のみで3文字入力してください。");
const addressSchema = z.string().regex(fullWidthRegex, "全角文字のみで入力してください。");
const telSchema = z.string().regex(/^[0-9]+$/, "半角数字のみで入力してください。");


export default function Infomation() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstPostCode, setFirstPostCode] = useState("");
    const [lastPostCode, setLastPostCode] = useState("");
    const [address, setAddress] = useState("");
    const [tel, setTel] = useState("");

    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleFirstPostCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstPostCode(event.target.value);
    };

    const handleLastPostCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastPostCode(event.target.value);
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleTesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTel(event.target.value);
    };



    const [emailError, setEmailError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [firstPostCodeError, setFirstPostCodeError] = useState("");
    const [lastPostCodeError, setLastPostCodeError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [telError, setTelError] = useState("");

    const validateEmail = () => {
        const result = emailSchema.safeParse(email);
        setEmailError(result.success ? "" : result.error.errors[0].message);
    };

    const validateFirstName = () => {
        const result = firstNameSchema.safeParse(firstName);
        setFirstNameError(result.success ? "" : result.error.errors[0].message);
    };

    const validateLastName = () => {
        const result = lastNameSchema.safeParse(lastName);
        setLastNameError(result.success ? "" : result.error.errors[0].message);
    };

    const validateFirstPostCode = () => {
        const result = firstPostSchema.safeParse(firstPostCode);
        setFirstPostCodeError(result.success ? "" : result.error.errors[0].message);
    };

    const validateLastPostCode = () => {
        const result = lastPostSchema.safeParse(lastPostCode);
        setLastPostCodeError(result.success ? "" : result.error.errors[0].message);
    };

    const validateAddress = () => {
        const result = addressSchema.safeParse(address);
        setAddressError(result.success ? "" : result.error.errors[0].message);
    };

    const validateTel = () => {
        const result = telSchema.safeParse(tel);
        setTelError(result.success ? "" : result.error.errors[0].message);
    };
    return (

        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#E6FFE9",
                display: "flex",
                justifyContent: "center",  // 縦方向の中央揃え
                alignItems: "center",      // 横方向の中央揃え
                flexDirection: "column",   // 縦に並べる
            }}
        >
            <Carousel animation="slide" interval={3000} indicators={true} navButtonsAlwaysVisible={true} sx={{ width: "80%", height: '500vh', margin: "0 auto", mb: 2 }}>
                {items.map((item, index) => (
                    <CarouselItem key={index} item={item} />
                ))}
            </Carousel>
            <Box
                sx={{
                    width: "60%",
                    height: "70%",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    borderRadius: "5px",
                    padding: "20px",
                }}
            >
                <Typography variant="h4" sx={{ color: "black", fontWeight: "bold", mb: 2 }}>
                    Infomation
                </Typography>

                <Box sx={{ width: "100%", mb: 2, display: "flex", flexDirection: "row", }}>
                    <Box sx={{ width: '50%' }}>
                        <Typography sx={{ color: "black", fontSize: 20, marginBottom: '10px' }}>
                            姓
                        </Typography>
                        <TextField
                            fullWidth
                            label="姓"
                            variant="outlined"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            onBlur={validateFirstName} // フォーカスが外れたときにバリデーションを実行
                            error={!!firstNameError}
                            helperText={firstNameError}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: "40px",  // 外枠の高さを設定
                                    width: '90%'
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "8px",  // 入力フィールド内の余白を調整
                                },

                            }}
                        />
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <Typography sx={{ color: "black", fontSize: 20, marginBottom: '10px' }}>
                            名
                        </Typography>
                        <TextField
                            fullWidth
                            label="名"
                            variant="outlined"
                            onChange={handleLastNameChange}
                            onBlur={validateLastName} // フォーカスが外れたときにバリデーションを実行
                            error={!!lastNameError}
                            helperText={lastNameError}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: "40px",  // 外枠の高さを設定
                                    width: '90%'
                                },

                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', mb: 2 }}>
                    <Typography sx={{ color: "black", fontSize: 20, marginBottom: '10px' }}>
                        郵便番号
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                        <TextField
                            label="郵便番号"
                            variant="outlined"
                            onChange={handleFirstPostCodeChange}
                            onBlur={validateFirstPostCode} // フォーカスが外れたときにバリデーションを実行
                            error={!!firstPostCodeError}
                            helperText={firstPostCodeError}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: "40px",  // 外枠の高さを設定
                                    width: '100%',
                                },

                            }}
                        />
                        <Typography sx={{ color: "black", mx: 1 }}>
                            ー
                        </Typography>
                        <TextField
                            label="郵便番号"
                            variant="outlined"
                            onChange={handleLastPostCodeChange}
                            onBlur={validateLastPostCode} // フォーカスが外れたときにバリデーションを実行
                            error={!!lastPostCodeError}
                            helperText={lastPostCodeError}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: "40px",  // 外枠の高さを設定
                                    width: '100%',
                                },

                            }}
                        />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', mb: 2 }}>
                    <Typography sx={{ color: "black", fontSize: 20, marginBottom: '10px' }}>
                        住所
                    </Typography>
                    <TextField
                        fullWidth
                        label="住所"
                        variant="outlined"
                        onChange={handleAddressChange}
                        onBlur={validateAddress} // フォーカスが外れたときにバリデーションを実行
                        error={!!addressError}
                        helperText={addressError}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: "40px",  // 外枠の高さを設定
                                width: '90%'
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: '100%', mb: 2 }}>
                    <Typography sx={{ color: "black", fontSize: 20, marginBottom: '10px' }}>
                        電話番号
                    </Typography>
                    <TextField
                        fullWidth
                        label="電話番号"
                        variant="outlined"
                        onChange={handleTesChange}
                        onBlur={validateTel} // フォーカスが外れたときにバリデーションを実行
                        error={!!telError}
                        helperText={telError}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: "40px",  // 外枠の高さを設定
                                width: '50%'
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: '100%', mb: 2 }}>
                    <Typography sx={{ color: "black", fontSize: 20, marginBottom: '10px' }}>
                        メールアドレス
                    </Typography>
                    <TextField
                        fullWidth
                        label="メールアドレス"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={validateEmail} // フォーカスが外れたときにバリデーションを実行
                        error={!!emailError}
                        helperText={emailError}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: "40px",  // 外枠の高さを設定
                                width: '90%'
                            },
                        }}
                    />
                </Box>
                <StyledButton
                    variant="contained"
                    color="primary"

                >
                    注文確定
                </StyledButton>
            </Box>
            <Box sx={{ width: 200 }}>
                <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                    <VolumeDown />
                    <Slider aria-label="Volume" value={value} onChange={handleChange} />
                    <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            </Box>
        </Box>
    );
}

function CarouselItem({ item }: { item: { img: string; title: string; detail: string; price: number } }) {
    return (
        <Paper
            sx={{
                padding: 2,
                textAlign: "center",
                borderRadius: 2,
                backgroundColor: "orange",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <img src={item.img} alt={item.title} style={{ width: '30vh', borderRadius: "8px" }} />
            <Typography variant="h5" gutterBottom>
                {item.title}
            </Typography>
            <Typography variant="body2">{item.detail}</Typography>
        </Paper>
    );
}
