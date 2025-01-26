import { Box } from '@/app/components/Box';
import { Update } from '@/app/helpers/service';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const TableHeadCell: FC<PropsWithChildren> = ({ children }) => (
  <TableCell className="uppercase">
    <Typography color="lightsteelblue" fontWeight={600} variant="caption">
      {children}
    </Typography>
  </TableCell>
);

type UpdateProps = {
  updates: Update[];
};
export const Updates: FC<UpdateProps> = ({ updates }) => {
  return (
    <Box display="flex" gap={2} scrollable>
      <Typography fontWeight={600} variant="h5">
        Обновления
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Имя</TableHeadCell>
              <TableHeadCell>Уведомление</TableHeadCell>
              <TableHeadCell>Дата</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {updates.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography
                    component={'div'}
                    fontWeight={600}
                    variant="caption"
                  >
                    {row.lastName}
                  </Typography>
                  <Typography component={'div'} variant="caption">
                    {row.firstName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    component={'div'}
                    fontWeight={600}
                    variant="caption"
                  >
                    {row.eventTitle}
                  </Typography>
                  <Typography component={'div'} variant="caption">
                    {row.eventBody}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    component={'div'}
                    fontWeight={600}
                    variant="caption"
                  >
                    {row.date}
                  </Typography>
                  <Typography component={'div'} variant="caption">
                    {row.time}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
