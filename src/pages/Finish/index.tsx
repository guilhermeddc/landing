import React from 'react';

import {
  Box,
  Container,
  useTheme,
  Paper,
  Typography,
  IconButton,
  Fade,
} from '@material-ui/core';
import {Facebook, Instagram} from '@material-ui/icons';

import mock from '../../mocks/data.json';
import Logo from '../../assets/images/logo.png';
import LogoHorizontal from '../../assets/images/logo_horizontal_black.png';

const Finish: React.FC = () => {
  const theme = useTheme();

  return (
    <Fade in={true} timeout={500}>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Container maxWidth="md" style={{marginTop: 16, marginBottom: 16}}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex={1}
            height="100%"
            padding="32px 32px 64px"
            component={Paper}>
            <img src={mock.logo || Logo} alt="logo" width="250px" />

            <Box
              width="100%"
              maxWidth="420px"
              height="1px"
              marginBottom={4}
              style={{backgroundColor: theme.palette.primary.main}}
            />

            <Typography variant="h4" align="center">
              {mock.final}
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingY="32px">
            <img src={LogoHorizontal} alt="logo horizontal" width="200px" />

            <Typography variant="subtitle2" align="center">
              Ei, você curtiu essa pesquisa?
            </Typography>
            <Typography variant="subtitle2" align="center">
              Seu negócio também precisa dela!
            </Typography>
            <Typography variant="subtitle2" align="center">
              Conheça a OnlyAsk e teste grátis por 7 dias agora mesmo!
            </Typography>
            <Typography variant="subtitle2" align="center">
              contato@onlyask.me | (54) 3286.6622
            </Typography>

            <Box display="flex" justifyContent="center">
              <IconButton color="primary">
                <Facebook />
              </IconButton>
              <IconButton color="primary">
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default Finish;
