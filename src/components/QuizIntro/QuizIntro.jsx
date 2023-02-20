import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

import styles from './QuizIntro.module.css';

function QuizIntro(props) {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h2>Analyze your skin type</h2>
      <h3>Welcome to the future of skin care!</h3>
      <p>
        Please answer a few questions and get a recommendation based on your
        skin type. This test will take up to 5 minutes.
      </p>
      <Button
        onClick={() => {
          navigate('/test');
        }}
        variant="contained"
        sx={{
          backgroundColor: '#0d5b48',
          marginTop: 5,
        }}
      >
        Let's start
      </Button>
    </section>
  );
}

export default QuizIntro;
