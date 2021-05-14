import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Fade,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';

import mock from '../../mocks/data.json';
import Logo from '../../assets/images/logo.png';
import ScoreButton from '../../components/ScoreButton';

interface IExtraQuestion {
  id?: number;
  question?: string;
  response?: string;
}
interface IQuestions {
  commentTitle: string;
  questions: IExtraQuestion[];
}

const Feedback: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [recommend, setRecommend] = useState(-1);

  const [questions, setQuestions] = useState<IQuestions>({
    commentTitle: '',
    questions: [],
  });
  const [extraQuestions, setExtraQuestions] = useState<IExtraQuestion[]>([]);

  useEffect(() => {
    mock.extra_questions.map((item) =>
      setExtraQuestions((state) => [
        ...state,
        {
          id: item.id,
          question: item.question,
          response: '',
        },
      ]),
    );
  }, []);

  useEffect(() => {
    setQuestions((state) => (state = {...state, questions: extraQuestions}));
  }, [extraQuestions]);

  const theme = useTheme();
  const history = useHistory();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!questions.commentTitle) {
        setSubmitted(true);
        return;
      }

      history.push('/finish');
    },
    [history, questions.commentTitle],
  );

  const handleChangeResponse = useCallback(
    (event, index) =>
      setExtraQuestions((state) => {
        return state.map((oldState, oldStateIndex) => {
          if (index === oldStateIndex) {
            oldState.response = event.target.value;
          }
          return oldState;
        });
      }),
    [],
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

              <Typography variant="h6" align="center">
                {mock.question}
              </Typography>

              <Box
                display="flex"
                justifyContent="center"
                gridGap="8px"
                flexWrap="wrap"
                marginY="32px">
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

              {recommend > -1 && recommend < 11 && (
                <>
                  <Typography variant="h6" align="center">
                    {mock.comment_title}
                  </Typography>

                  <Box width="100%" maxWidth="420px" marginTop={2}>
                    <TextField
                      multiline
                      fullWidth
                      variant="outlined"
                      value={questions.commentTitle}
                      error={!questions.commentTitle && submitted}
                      helperText={
                        !questions.commentTitle &&
                        submitted &&
                        'Campo obrigatório.'
                      }
                      onChange={(e) =>
                        setQuestions(
                          (state) =>
                            (state = {
                              ...state,
                              commentTitle: e.target.value,
                            }),
                        )
                      }
                      InputProps={{
                        style: {
                          minHeight: theme.spacing(16),
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                        },
                      }}
                    />
                  </Box>

                  <Box width="100%" maxWidth="420px">
                    {mock.extra_questions.length > 0 &&
                      mock.extra_questions.map((item, index) => (
                        <Box marginTop={3} key={item.id}>
                          <Typography variant="h6" align="center">
                            {item.question}
                          </Typography>
                          <Box marginTop={2} />
                          <TextField
                            value={extraQuestions[index].response}
                            onChange={(e) => handleChangeResponse(e, index)}
                            multiline
                            fullWidth
                            variant="outlined"
                          />
                        </Box>
                      ))}

                    <Box display="flex" justifyContent="flex-end" marginTop={4}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{color: 'white'}}
                        type="submit">
                        <Typography variant="h6" align="center">
                          Salvar
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </form>
        </Container>
      </Box>
    </Fade>
  );
};

export default Feedback;
