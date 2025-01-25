'use client';

import { Page } from './components/Page';
import { usePrisoners } from './apollo/hooks/usePrisoners';
import { CardPZ } from './components/Card';

import { Box, Grid2, Typography } from '@mui/material';

const DEFAULT_OFFSET = 300;

export default function Home() {
  const { data: prisoners, loading } = usePrisoners(DEFAULT_OFFSET);

  return (
    <Page>
      <Grid2 display="flex" flexDirection="column" gap={2} size={3}>
        <Box
          className="rounded-2xl bg-white flex flex-col p-4 w-full"
          sx={{ boxShadow: 1 }}
        >
          <Typography fontWeight={600} variant="h5">
            Обновления
          </Typography>
        </Box>
        <Box
          className="rounded-2xl bg-white flex flex-col p-4 w-full"
          sx={{ boxShadow: 1 }}
        >
          <Typography fontWeight={600} variant="h5">
            Предложения
          </Typography>
        </Box>
      </Grid2>

      <Grid2 size={6}>
        <Box
          className="rounded-2xl bg-white flex flex-col p-4 w-full"
          sx={{ boxShadow: 1 }}
        >
          <Typography fontWeight={600} variant="h5">
            Карточки ПЗК
          </Typography>
          {loading ? (
            <Typography>Загрузка...</Typography>
          ) : (
            <Grid2 display="flex" mt={2} spacing={2} container>
              {prisoners?.map(({ node: prisoner }) => (
                <Grid2 display="flex" key={prisoner.id} size={6}>
                  <CardPZ
                    articles={prisoner.articles}
                    birthdate={prisoner.date_of_birth}
                    id={prisoner.id}
                    location={prisoner.region}
                    name={prisoner.name}
                  />
                </Grid2>
              ))}
            </Grid2>
          )}
        </Box>
      </Grid2>
    </Page>
  );
}
