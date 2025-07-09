import React from "react";
import { Box, Card, Typography, Button, Grid, Paper } from "@mui/material";

// Props: totalQuestions, correctAnswers, onRestart
const QuizResults = ({ totalQuestions, correctAnswers, onRestart }) => {
  const wrongAnswers = totalQuestions - correctAnswers;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa"
      }}
    >
      <Card
        sx={{
          p: 4,
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
          borderRadius: 3
        }}
        elevation={3}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          🎉 Quiz Results
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={3}>
          Here is your performance summary
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                bgcolor: "#e3f2fd",
                borderRadius: 2
              }}
              elevation={0}
            >
              <Typography variant="h6">{totalQuestions}</Typography>
              <Typography variant="body2">Total Questions</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                bgcolor: "#c8e6c9",
                borderRadius: 2
              }}
              elevation={0}
            >
              <Typography variant="h6">{correctAnswers}</Typography>
              <Typography variant="body2">Correct Answers</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                bgcolor: "#f8bbd0",
                borderRadius: 2
              }}
              elevation={0}
            >
              <Typography variant="h6">{percentage}%</Typography>
              <Typography variant="body2">Score</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Typography mt={3} color="text.secondary">
          You answered {correctAnswers} correctly and {wrongAnswers} incorrectly.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={onRestart}
        >
          Retake Quiz
        </Button>
      </Card>
    </Box>
  );
};

export default QuizResults;
