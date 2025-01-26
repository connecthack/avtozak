import { Chip } from './Chip';

import { Box } from '@/app/components/Box';
import { Suggestion } from '@/app/helpers/service';

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
    <Typography
      color="lightsteelblue"
      fontSize={10}
      fontWeight={600}
      variant="caption"
    >
      {children}
    </Typography>
  </TableCell>
);

type SuggestionsProps = {
  suggestions: Suggestion[];
};
export const Suggestions: FC<SuggestionsProps> = ({ suggestions }) => {
  return (
    <Box display="flex" gap={2}>
      <Typography fontWeight={600} variant="h5">
        Предложения
      </Typography>
      <TableContainer className="overflow-y-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Статус</TableHeadCell>
              <TableHeadCell>Предложение</TableHeadCell>
              <TableHeadCell>В базе</TableHeadCell>
              <TableHeadCell>Действие</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suggestions.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Chip
                    color={row.probability === 'вероятно' ? 'success' : 'error'}
                  >
                    {row.probability}
                  </Chip>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography
                    component={'div'}
                    fontWeight={600}
                    variant="caption"
                  >
                    {row.prisoner.name}
                  </Typography>
                  <Typography component="div" variant="caption">
                    {row.prisoner.name}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography
                    component={'div'}
                    fontWeight={600}
                    variant="caption"
                  >
                    {row.prisoner.name}
                  </Typography>
                  <Typography component="div" variant="caption">
                    {row.prisoner.name}
                  </Typography>
                </TableCell>
                <TableCell>+ -</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
