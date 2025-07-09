/* eslint-disable no-debugger */
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import QuizResults from "../components/Result";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [option, setOption] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(150);
  const [quizEnded, setQuizEnded] = useState(false);
  const timerRef = useRef(null);
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setQuizData(data))
  }, [])

  useEffect(() => {
    if (quizEnded) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setQuizEnded(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [quizEnded]);

  const handleNextQuestion = (index, selectedOption) => {
    if (selectedOption === quizData[index].correctAnswer) {
      setOption([...option, selectedOption])
    }
    setSelectedOption(selectedOption);

    // Only move to next question after delay
    setTimeout(() => {
      if (index === quizData.length - 1) {
        setQuizEnded(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null); // Reset for next question
      }
    }, 500);
    return;
  }

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f7fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: "#f0f4f8", width: '50%', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            General Knowledge Quiz
          </Typography>
          <Typography variant="subtitle1">
            Test your general knowledge with these questions.
          </Typography>
          <Typography variant="h6" color="secondary" mt={2}>
            Time Left: {formatTime(timeLeft)}
          </Typography>
        </Paper>

        <Paper elevation={3} style={{ padding: "20px", width: "50%", textAlign: "center" }}>
          <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
            {timeLeft === 0 ? (
              <Typography variant="h5" color="error" textAlign="center">
                Time's up! Quiz Ended.
              </Typography>
            ) : quizEnded ? (
              <QuizResults totalQuestions={quizData.length}
                correctAnswers={option.length} onRestart={() => {
                  navigate('/');
                }}/>
            ) : (
              <Grid container spacing={0} justifyContent="center">
                <Grid item xs={12} md={8} sx={{ width: "100%" }} >
                  <Card variant="outlined" sx={{ width: "100%", maxWidth: "1000px" }}>
                    <CardContent >

                      {
                        quizData[currentIndex] && (
                          <>
                            <Typography variant="h5" gutterBottom>
                              {quizData[currentIndex].question}
                            </Typography>
                            <Grid container spacing={2} direction="column" alignItems="stretch">
                              {quizData[currentIndex].options?.map((opt, index) => {
                                const isCorrect = opt === quizData[currentIndex].correctAnswer;
                                // const isSelected = selectedOption === opt;
                                const showAnswer = selectedOption !== null;
                                let borderColor;
                                let color;
                                if (showAnswer) {
                                  if (isCorrect) {
                                    borderColor = '#4caf50';
                                    color = '#4caf50';
                                  } else{
                                    borderColor = '#f44336';
                                    color = '#f44336';
                                  }
                                }
                                return (
                                  <Grid item key={index} sx={{ width: '100%' }}>
                                    <Button
                                      variant="outlined"
                                      fullWidth
                                      disabled={selectedOption !== null}
                                      onClick={() => handleNextQuestion(currentIndex, opt)}
                                      sx={{
                                        mb: 1,
                                        color: `${color} !important`,
                                        borderColor: `${borderColor} !important`,
                                        '&:hover': {
                                          borderColor: `${borderColor} !important`,
                                          backgroundColor: 'rgba(0,0,0,0.04)',
                                        },
                                      }}
                                    >
                                      {opt}
                                    </Button>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </>
                        )
                      }
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Box>
        </Paper>
      </Box >
    </>

  );
};

export default Quiz;
