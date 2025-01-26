import { PrisonersList } from '@/app/components/PrisonersList';
import { getSuggestions, getUpdates } from '@/app/helpers/service';
import { Page } from '@/app/components/Page';
import { Box } from '@/app/components/Box';
import { Updates } from '@/app/components/Updates';
import { Suggestions } from '@/app/components/Suggestions';

import { Box as MUIBox } from '@mui/material';
import { Grid2, Typography } from '@mui/material';

export default async function Home() {
  const updates = await getUpdates();
  const suggestions = await getSuggestions();

  return (
    <Page title="Главная">
      <Grid2
        columns={{ xs: 12, md: 9 }}
        display="flex"
        height={{ xs: 'auto', md: '100%' }}
        spacing={2}
        container
      >
        <Grid2 height={{ xs: 'auto', md: '100%' }} size={{ xs: 12, md: 4 }}>
          <MUIBox
            display="flex"
            flexDirection="column"
            gap={2}
            height={{ xs: 'auto', md: '100%' }}
          >
            <Updates updates={updates} />
            <Suggestions suggestions={suggestions} />
          </MUIBox>
        </Grid2>

        <Grid2
          display="flex"
          flexDirection="column"
          height={{ xs: 'auto', md: '100%' }}
          size={{ xs: 12, md: 5 }}
        >
          <Box fullHeight>
            <Typography fontWeight={600} variant="h5">
              Карточки ПЗК
            </Typography>

            <Grid2
              className="overflow-y-auto"
              display="flex"
              flex={1}
              mt={2}
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
