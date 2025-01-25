'use client';

import { Box } from '../components/Box';
import { Page } from '../components/Page';

import { Grid2, Typography } from '@mui/material';

export default function Suggestions() {
  return (
    <Page>
      <Grid2 display="flex" flexDirection="column" gap={2} size={9}>
        <Box>
          <Typography fontWeight={600} variant="h5">
            Предложения
          </Typography>
        </Box>
      </Grid2>
    </Page>
  );
}
