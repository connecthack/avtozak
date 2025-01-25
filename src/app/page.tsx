'use client';

import { Box, Grid2, Typography } from '@mui/material';
import { Page } from './components/Page';
import { usePrisoners } from './apollo/hooks/usePrisoners';
import { CardPZ } from './components/Card';

const DEFAULT_OFFSET = 300;

export default function Home() {
  const { data: prisoners, loading } = usePrisoners(DEFAULT_OFFSET);

  return (
    <Page>
      <Grid2 size={3} gap={2} display="flex" flexDirection="column">
        <Box
          sx={{ boxShadow: 1 }}
          className="rounded-2xl bg-white flex flex-col p-4 w-full"
        >
          <Typography variant="h5" fontWeight={600}>
            Обновления
          </Typography>
        </Box>
        <Box
          sx={{ boxShadow: 1 }}
          className="rounded-2xl bg-white flex flex-col p-4 w-full"
        >
          <Typography variant="h5" fontWeight={600}>
            Предложения
          </Typography>
        </Box>
      </Grid2>

      <Grid2 size={6}>
        <Box
          sx={{ boxShadow: 1 }}
          className="rounded-2xl bg-white flex flex-col p-4 w-full"
        >
          <Typography variant="h5" fontWeight={600}>
            Карточки ПЗК
          </Typography>
          <Grid2 display="flex" spacing={2} container mt={2}>
            {prisoners?.map(({ node: prisoner }) => (
              <Grid2 key={prisoner.id} size={6} display="flex">
                <CardPZ
                  name={prisoner.name}
                  birthdate={prisoner.date_of_birth}
                  birthplace={prisoner.address}
                  articles={prisoner.articles}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Grid2>
    </Page>
  );
}
