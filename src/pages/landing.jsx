// src/components/QuizLandingPage.js

import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const QuizLandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Box mb={2}>
          <MenuBookIcon sx={{ fontSize: 40, color: "#3f51b5" }} />
        </Box>

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          React Knowledge Quiz
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Test your knowledge of React, JavaScript, and web development. Answer
          multiple choice questions and see how well you know the fundamentals!
        </Typography>

        <Grid container spacing={2} justifyContent="center" mb={3}>
          <Grid item xs={4}>
            <Box
              sx={{
                bgcolor: "#e8eaf6",
                p: 2,
                borderRadius: 2,
              }}
            >
              <MenuBookIcon color="primary" />
              <Typography variant="h6" fontWeight="medium">
                8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Questions
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                bgcolor: "#f3e5f5",
                p: 2,
                borderRadius: 2,
              }}
            >
              <AccessTimeIcon color="secondary" />
              <Typography variant="h6" fontWeight="medium">
                5:00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Minutes
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                bgcolor: "#e8f5e9",
                p: 2,
                borderRadius: 2,
              }}
            >
              <EmojiEventsIcon color="success" />
              <Typography variant="h6" fontWeight="medium">
                100%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Max Score
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Quiz Rules
        </Typography>

        <List dense sx={{ textAlign: "left", mb: 3 }}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Each question has multiple choice answers"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="You have 5 minutes to complete all questions"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Once you select an answer, you'll see the explanation"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="You can navigate back to previous questions"
            />
          </ListItem>
        </List>

        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "linear-gradient(90deg, #7b1fa2, #512da8)",
            background: "linear-gradient(90deg, #7b1fa2, #512da8)",
            color: "#fff",
            px: 4,
            borderRadius: 2,
            "&:hover": {
              background: "linear-gradient(90deg, #6a1b9a, #4527a0)",
            },
          }}
        >
          Start Quiz
        </Button>
      </Card>
    </Box>
  );
};

export default QuizLandingPage;
