import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import  { useState } from 'react'
import styled from '@emotion/styled';

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBotom: "20px"
});

const AddBtn = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Tooltip onClick={() => setShowModal(true)} title="add post" sx={{
                position: "fixed", bottom: 20,
                left: {
                    "xs": "calc(50% - 20px)",
                    "sm": "calc(10%)"
                }
            }} >
                <Fab color="primary" aria-label="add" >
                    <Add />
                </Fab>
            </Tooltip>
            <Modal sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                open={showModal}
                onClose={() => setShowModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box color={"text.primary"} bgcolor={"background.default"} width={400} height={280} padding={3} borderRadius={5}>
                    <Typography variant="h6" sx={{ mt: 2, textAlign: "center", color: "grey" }}>Create Post</Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            sx={{ height: 30, width: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack mt={2} marginBottom={3} direction="row" gap={1}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup variant="contained"
                        fullWidth
                    >
                        <Button >Post</Button>
                        <Button sx={{ width: "100px" }}> <DateRange /> </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    )
}

export default AddBtn
