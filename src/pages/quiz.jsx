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

const Quiz = () => {
  const [option, setOption] = useState([])
  const [quizData, setQuizData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(150); 
  const [quizEnded, setQuizEnded] = useState(false);
  const timerRef = useRef(null);
  const URL = import.meta.env.VITE_BASE_URL;

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
    // debugger;
    if (selectedOption === quizData[index].correctAnswer) {
      setOption([...option, selectedOption])
      console.log(option);
    }

    if (index === quizData.length - 1) {
      console.log(option.length / 10 * 100);
      setQuizEnded(true);
    }

    if (index < quizData.length) {
      let updatedInedx = index + 1;
      setCurrentIndex(updatedInedx);
      console.log(currentIndex);
    }
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
                correctAnswers={option.length} />
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
                              {quizData[currentIndex].options?.map((opt, index) => (
                                <Grid item key={index} sx={{ width: '100%' }}>
                                  <Button
                                    variant="outlined"
                                    fullWidth
                                    className=""
                                    style={{ marginBottom: "8px" }}
                                    onClick={() => handleNextQuestion(currentIndex, opt)}
                                    disabled={quizEnded}
                                  >
                                    {opt}
                                  </Button>
                                </Grid>
                              ))}
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
