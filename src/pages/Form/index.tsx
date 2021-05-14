import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import InputMask from 'react-input-mask';

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
  Fade,
} from '@material-ui/core';

import mock from '../../mocks/data.json';
import Logo from '../../assets/images/logo.png';
import {feedback} from '../../services/alertService';

const Form: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    privacy: false,
  });

  const theme = useTheme();
  const history = useHistory();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!formData.privacy) {
        feedback('Leu e concordo com a Política de Privacidade?', 'info');
        return;
      }

      if (!formData.name) {
        setSubmitted(true);
        return;
      }

      if (!formData.email && formData.phone.length === 0) {
        setSubmitted(true);
        return;
      }

      if (!formData.phone && formData.email.length === 0) {
        setSubmitted(true);
        return;
      }

      history.push('/feedback');
    },
    [formData.email, formData.name, formData.phone, formData.privacy, history],
  );

  return (
    <Fade in={true} timeout={500}>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Container maxWidth="md" style={{marginTop: 16, marginBottom: 16}}>
          <form onSubmit={handleSubmit}>
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

              <Typography variant="h5" align="center">
                {mock.intro}
              </Typography>

              <Box width="100%" maxWidth="420px" marginTop={4}>
                <Box marginBottom={3}>
                  <TextField
                    label="Nome *"
                    value={formData.name}
                    error={!formData.name && submitted}
                    helperText={
                      !formData.name && submitted && 'Campo obrigatório.'
                    }
                    onChange={(e) =>
                      setFormData(
                        (state) =>
                          (state = {
                            ...state,
                            name: e.target.value,
                          }),
                      )
                    }
                    multiline
                    fullWidth
                    variant="outlined"
                  />
                </Box>

                <Box marginBottom={3}>
                  <TextField
                    label="E-mail"
                    error={
                      !formData.email &&
                      formData.phone.length === 0 &&
                      submitted
                    }
                    helperText={
                      !formData.email &&
                      formData.phone.length === 0 &&
                      submitted &&
                      'Preencha o e-mail ou celular.'
                    }
                    value={formData.email}
                    onChange={(e) =>
                      setFormData(
                        (state) =>
                          (state = {
                            ...state,
                            email: e.target.value,
                          }),
                      )
                    }
                    multiline
                    fullWidth
                    variant="outlined"
                  />
                </Box>

                <Box marginBottom={3}>
                  <InputMask
                    mask="(99) 99999 9999"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData(
                        (state) =>
                          (state = {
                            ...state,
                            phone: e.target.value,
                          }),
                      )
                    }>
                    {() => (
                      <TextField
                        type="tel"
                        label="Celular"
                        error={
                          !formData.phone &&
                          formData.email.length === 0 &&
                          submitted
                        }
                        helperText={
                          !formData.phone &&
                          formData.email.length === 0 &&
                          submitted &&
                          'Preencha o e-mail ou celular.'
                        }
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  </InputMask>
                </Box>

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      value={formData.privacy}
                      onChange={(e) =>
                        setFormData(
                          (state) =>
                            (state = {
                              ...state,
                              privacy: e.target.checked,
                            }),
                        )
                      }
                    />
                  }
                  label={
                    <>
                      Eu li e concordo com a{' '}
                      <Link href="/"> Política de Privacidade</Link>
                    </>
                  }
                />

                <Box display="flex" justifyContent="flex-end" marginTop={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    style={{color: 'white'}}
                    type="submit">
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
    </Fade>
  );
};

export default Form;
