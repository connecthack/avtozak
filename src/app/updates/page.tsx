'use client';

import { Page } from '../components/Page';

import { Box, Grid2, Typography } from '@mui/material';

export default function Updates() {
  return (
    <Page>
      <Grid2 display="flex" flexDirection="column" gap={2} size={9}>
        <Box
          className="rounded-2xl bg-white flex flex-col p-4 w-full"
          sx={{ boxShadow: 1 }}
        >
          <Typography fontWeight={600} variant="h5">
            Обновления
          </Typography>
        </Box>
      </Grid2>
    </Page>
  );
}
