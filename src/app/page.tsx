import { PrisonersList } from '@/app/components/PrisonersList';
import { getUpdates } from '@/app/helpers/service';
import { Page } from '@/app/components/Page';
import { Box } from '@/app/components/Box';
import { Updates } from '@/app/components/Updates';

import { Grid2, Typography } from '@mui/material';

export default async function Home() {
  const updates = await getUpdates();

  return (
    <Page>
      <Grid2 columns={9} display="flex" height="100%" spacing={2} container>
        <Grid2 display="flex" flexDirection="column" gap={2} size={3}>
          <Updates updates={updates} />
          <Box>
            <Typography fontWeight={600} variant="h5">
              Предложения
            </Typography>
          </Box>
        </Grid2>

        <Grid2 height="100%" size={6}>
          <Box fullHeight>
            <Typography fontWeight={600} variant="h5">
              Карточки ПЗК
            </Typography>
            <Grid2
              display="flex"
              flex={1}
              mt={2}
              overflow="auto"
              spacing={2}
              container
            >
              <PrisonersList />
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Page>
  );
}
