/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";

const Quiz = () => {
  const [submitted, setSubmitted] = useState(false);
  const [quizData, setQuizData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setQuizData(data))
  }, [])

  const handleNextQuestion = (index) => {
    if (index < quizData.length) {
      let updatedInedx = index + 1;
      setCurrentIndex(updatedInedx);
      console.log(currentIndex);
    }
    return;
  }

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f7fa",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          p: 2,
        }}
      >

        <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: "#f0f4f8" }}>
          <Typography variant="h4" gutterBottom color="primary">
            General Knowledge Quiz
          </Typography>
          <Typography variant="subtitle1">
            Test your general knowledge with these questions.
          </Typography>
        </Paper>

        <Paper elevation={3} style={{ padding: "20px", width: "50%", textAlign: "center" }}>
          <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>


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

                          <Grid container spacing={2}>
                            {quizData[currentIndex].options?.map((opt, index) => (
                              <Grid item key={index}>
                                <Button
                                  variant="outlined"
                                  fullWidth
                                  style={{ marginBottom: "8px" }}
                                  onClick={() => handleNextQuestion(opt)}
                                >
                                  {opt}
                                </Button>
                              </Grid>
                            ))}
                          </Grid>

                        </>
                      )

                    }


                    {submitted && (
                      <Typography color="green" mt={1}>
                        Correct
                      </Typography>
                    )}
                  </CardContent>


                </Card>

                {/* Submit Button */}

                <Box textAlign="center" mt={4}>
                  <Button variant="contained" color="primary" size="large"
                    onClick={() => handleNextQuestion(currentIndex)}>
                    Submit Answer
                  </Button>
                </Box>

              </Grid>

            </Grid>

          </Box>
        </Paper>



      </Box >
    </>

  );
};

export default Quiz;
