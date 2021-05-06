import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  useTheme,
  Paper,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from "@material-ui/core";

import mock from "../../mocks/data.json";
import Logo from "../../assets/images/logo.png";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    privacy: false,
  });

  const theme = useTheme();
  const history = useHistory();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      history.push("/feedback");
    },
    [history]
  );

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="md" style={{ marginTop: 16, marginBottom: 16 }}>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex={1}
            height="100%"
            padding="32px 32px 64px"
            component={Paper}
          >
            <img src={mock.logo || Logo} alt="logo" width="250px" />

            <Box
              width="100%"
              maxWidth="420px"
              height="1px"
              marginBottom={4}
              style={{ backgroundColor: theme.palette.primary.main }}
            />

            <Typography variant="h5" align="center">
              {mock.intro}
            </Typography>

            <Box width="100%" maxWidth="420px" marginTop={4}>
              <Box marginBottom={3}>
                <TextField
                  label="Nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData(
                      (state) =>
                        (state = {
                          ...state,
                          name: e.target.value,
                        })
                    )
                  }
                  required
                  multiline
                  fullWidth
                  variant="outlined"
                />
              </Box>

              <Box marginBottom={3}>
                <TextField
                  label="E-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData(
                      (state) =>
                        (state = {
                          ...state,
                          email: e.target.value,
                        })
                    )
                  }
                  multiline
                  fullWidth
                  variant="outlined"
                />
              </Box>

              <Box marginBottom={3}>
                <TextField
                  label="Celular"
                  type="number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData(
                      (state) =>
                        (state = {
                          ...state,
                          phone: e.target.value,
                        })
                    )
                  }
                  multiline
                  fullWidth
                  variant="outlined"
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    value={formData.privacy}
                    onChange={(e) =>
                      setFormData(
                        (state) =>
                          (state = {
                            ...state,
                            privacy: e.target.checked,
                          })
                      )
                    }
                  />
                }
                label={
                  <>
                    Eu li e concordo com a{" "}
                    <Link href="/"> Política de Privacidade</Link>
                  </>
                }
              />

              <Box display="flex" justifyContent="flex-end" marginTop={2}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  style={{ color: "white" }}
                  type="submit"
                  disabled={formData.name.length === 0 || !formData.privacy}
                >
                  <Typography variant="h6" align="center">
                    Enviar
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Form;
