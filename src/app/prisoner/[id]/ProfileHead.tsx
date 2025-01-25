import { Prisoner } from '@/app/apollo/hooks/usePrisoners';
import { getPrisonerPicture } from '@/app/helpers/getPrisonerPicture';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

type ProfileHeadProps = {
  prisoner: Prisoner;
};
export const ProfileHead: FC<ProfileHeadProps> = async ({ prisoner }) => {
  return (
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
        <Box
          className={`bg-[#ffffff80] rounded-2xl bg-gray border-white border-[1px] border-solid box-border py-5 px-8`}
          sx={{ boxShadow: 1 }}
        >
          <div className="flex items-center gap-6">
            <Image
              alt=""
              className={`w-[70px] relative ${prisoner?.photo && 'rounded-2xl'} h-[70px] object-cover`}
              height={70}
              src={getPrisonerPicture(prisoner?.photo, prisoner?.gender)}
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
        </Box>
      </div>
    </div>
  );
};
