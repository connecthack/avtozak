import { Page } from '../../components/Page';

import {
  Prisoner,
  PrisonersDocument,
  PrisonersQueryResult,
} from '@/app/apollo/hooks/usePrisoners';
import { Chip } from '@/app/components/Chip';
import { getPrisonerPicture } from '@/app/helpers/getPrisonerPicture';
import { makeClient } from '@/app/helpers/makeClient';

import { Grid2, Typography } from '@mui/material';
import Image from 'next/image';

export default async function PrisonerPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const prisoner = await getPrisoner(id);

  console.log(prisoner);

  return (
    <Page>
      <Grid2 display="flex" flexDirection="column" gap={4} size={9}>
        <div className="relative w-full">
          <div className="flex-1 rounded-2xl h-[266px] py-5 px-4 bg-profile_bg bg-cover bg-no-repeat bg-[top]">
            <div className="flex flex-col items-start justify-start gap-2">
              <Typography color="white" fontWeight={600} variant="h5">
                Профиль
              </Typography>
              <div>
                <Typography color="lightsteelblue" variant="caption">
                  Страницы
                </Typography>
                <Typography color="white" variant="caption">
                  {' '}
                  / Профиль
                </Typography>
              </div>
            </div>
          </div>
          <div className="[backdrop-filter:blur(17.3px)] w-[90%] mt-[-40px] mx-auto">
            <div className="shadow-[0px_1px_18px_rgba(0,_0,_0,_0.06)] bg-[#ffffff80] rounded-2xl bg-gray border-white border-[1px] border-solid box-border py-5 px-8">
              <div className="flex items-center gap-6">
                <Image
                  alt=""
                  className="w-[70px] relative rounded-[17px] h-[70px] object-cover"
                  height={70}
                  src={getPrisonerPicture(prisoner?.photo)}
                  width={70}
                />
                <div className="flex flex-col gap-2">
                  <Typography fontWeight={600} variant="h5">
                    {prisoner?.name?.split(' ')[0]}
                  </Typography>

                  <Typography variant="body1">
                    {prisoner?.name?.split(' ').slice(1).join(' ')}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid2 size={12} container>
          <Grid2
            className="rounded-2xl bg-white flex flex-col p-4 w-full"
            display="flex"
            flexDirection="column"
            gap={2}
            size={3}
            sx={{ boxShadow: 1 }}
          >
            <Typography fontWeight={600} variant="h5">
              Информация
            </Typography>
            <div className="text-lightsteelblue">
              <div>
                <Typography display="inline" variant="caption">
                  {prisoner?.description}
                </Typography>
              </div>
              <hr className="my-4" />
              <div>
                <Typography display="inline" variant="caption">
                  ФИО:{' '}
                </Typography>
                <Typography display="inline" fontWeight={600} variant="caption">
                  {prisoner?.name}
                </Typography>
              </div>
              {prisoner?.date_of_birth && (
                <div>
                  <Typography display="inline" variant="caption">
                    Дата рождения:{' '}
                  </Typography>
                  <Typography
                    display="inline"
                    fontWeight={600}
                    variant="caption"
                  >
                    {prisoner.date_of_birth}
                  </Typography>
                </div>
              )}
              {prisoner?.region && (
                <div>
                  <Typography display="inline" variant="caption">
                    Регион :{' '}
                  </Typography>
                  <Typography
                    display="inline"
                    fontWeight={600}
                    variant="caption"
                  >
                    {prisoner.region}
                  </Typography>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {prisoner?.articles?.map((article, index) => (
                <Chip key={index}>{article}</Chip>
              ))}
            </div>
          </Grid2>
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
