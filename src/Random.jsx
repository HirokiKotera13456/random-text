import { useState, useEffect, useCallback, memo } from 'react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  Container,
  Chip,
  Stack,
} from '@mui/material';

export const Random = memo(() => {
  const [start, setStart] = useState(false);
  const [indices, setIndices] = useState([0, 1]);

  const rouletteContents = [
    '文凱',
    '周',
    '金子',
    '堀田',
    '石',
    'パク',
    '林',
    'ミック',
    'リー',
  ];

  const commentedOutPeople = ['植本', '小寺'];

  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndices(() => {
          const firstIndex = Math.floor(
            Math.random() * rouletteContents.length
          );
          let secondIndex = Math.floor(Math.random() * rouletteContents.length);
          while (secondIndex === firstIndex) {
            secondIndex = Math.floor(Math.random() * rouletteContents.length);
          }
          return [firstIndex, secondIndex];
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [start]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: 'center' }}>
      <Card sx={{ bgcolor: 'white', boxShadow: 5, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            🎤 次回の発表者 🎤
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ my: 2, color: 'black' }}
          >
            {rouletteContents[indices[0]]} と {rouletteContents[indices[1]]}
          </Typography>
          <Button
            variant="contained"
            size="large"
            color={start ? 'secondary' : 'primary'}
            onClick={startRoulette}
            sx={{
              mt: 3,
              fontSize: '1.2rem',
              px: 4,
              py: 1.5,
              borderRadius: 3,
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            {start ? 'ストップ' : 'ルーレットスタート 🚀'}
          </Button>
        </CardContent>
      </Card>

      <Card
        sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', boxShadow: 3, borderRadius: 2 }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 1, color: 'gray' }}
        >
          🏆 発表済みの人
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
        >
          {commentedOutPeople.map(person => (
            <Chip
              key={person}
              label={person}
              color="default"
              variant="outlined"
            />
          ))}
        </Stack>
      </Card>
    </Container>
  );
});
