import React, { useState } from "react";

import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";

import Logo from "../../assets/images/logo.png";
import LogoHorizontal from "../../assets/images/logo_horizontal_black.png";
import ScoreButton from "../../components/ScoreButton";

const Home: React.FC = () => {
  const [recommend, setRecommend] = useState(0);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100vw"
        padding="32px 32px 64px"
        component={Paper}
      >
        <img src={Logo} alt="logo" width="250px" />

        <Typography variant="h6" align="center">
          Teste de nova funcionalidade em prol de atender a necessidade do
          cliente.
        </Typography>
        <Typography variant="h6" align="center">
          Numa escala de 0 a 10, qual a probabilidade de você nos recomendar
          para um amigo ou familiar?
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          gridGap="8px"
          flexWrap="wrap"
          marginY="32px"
        >
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={0}
            color="#EF778D"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={1}
            color="#F19587"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={2}
            color="#F2A384"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={3}
            color="#F1B27F"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={4}
            color="#F3C17D"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={5}
            color="#F4D079"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={6}
            color="#EFE77A"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={7}
            color="#D8E97D"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={8}
            color="#BDE37F"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={9}
            color="#A5DD81"
          />
          <ScoreButton
            value={recommend}
            setValue={setRecommend}
            score={10}
            color="#91D683"
          />
        </Box>

        <Box width="420px" paddingX="16px">
          <TextField
            label="O que motivou sua nota?"
            multiline
            fullWidth
            variant="outlined"
          />

          <Box marginTop="16px" />

          <TextField
            label="O que podemos fazer para melhorar?"
            multiline
            fullWidth
            variant="outlined"
          />

          <Box display="flex" justifyContent="flex-end" marginTop="16px">
            <Button
              variant="contained"
              color="primary"
              style={{ color: "white" }}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingY="32px"
      >
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
    </>
  );
};

export default Home;
