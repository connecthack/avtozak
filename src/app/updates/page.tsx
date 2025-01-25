'use client';

import { Box, Grid2, Typography } from '@mui/material';
import { Page } from '../components/Page';

export default function Updates() {
  return (
    <Page>
      <Grid2 size={9} gap={2} display="flex" flexDirection="column">
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
    </Page>
  );
}
