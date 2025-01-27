import { ProfileHead } from './ProfileHead';
import { ProfileInfo } from './ProfileInfo';

import { Page } from '@/app/components/Page';
import {
  Prisoner,
  PrisonersDocument,
  PrisonersQueryResult,
} from '@/app/apollo/hooks/usePrisoners';
import { makeClient } from '@/app/helpers/makeClient';
import { Updates } from '@/app/components/Updates';
import { getUpdates } from '@/app/helpers/service';

import { Grid2 } from '@mui/material';

export default async function PrisonerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const prisoner = await getPrisoner(id);
  const updates = await getUpdates();

  return (
    <Page title={prisoner?.name ?? 'Страница политзаключенного'}>
      <Grid2
        columns={9}
        display="flex"
        flexDirection="column"
        height={{ xs: 'auto', md: '100%' }}
        container
      >
        <Grid2
          display="flex"
          flex={1}
          flexDirection="column"
          gap={4}
          height={{ xs: 'auto', md: '100%' }}
          size={9}
        >
          {prisoner && (
            <>
              <ProfileHead prisoner={prisoner} />
              <Grid2 flex={1} height={0} size={9} spacing={2} container>
                <Grid2
                  display="flex"
                  flexDirection="column"
                  height={{ xs: 'auto', md: '100%' }}
                  size={{ xs: 12, md: 4 }}
                >
                  <ProfileInfo prisoner={prisoner} />
                </Grid2>
                <Grid2
                  display="flex"
                  flexDirection="column"
                  height={{ xs: 'auto', md: '100%' }}
                  size={{ xs: 12, md: 4 }}
                >
                  <Updates updates={updates} />
                </Grid2>
              </Grid2>
            </>
          )}
        </Grid2>
      </Grid2>
    </Page>
  );
}

const getPrisoner = async (id: string): Promise<Prisoner | null> => {
  const client = makeClient();

  const res: Partial<PrisonersQueryResult> = await client.query({
    query: PrisonersDocument,
    variables: { offset: 1, filter: { id: { eq: id } } },
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  });

  return res.data?.airtable_data_edgeCollection?.edges[0]?.node ?? null;
};
