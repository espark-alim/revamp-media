import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const ComparisonTable = ({ data }) => {
  const { title, text, columns, rows, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    textStyle,
    tableContainerStyle,
    tableCellStyle,
    columnStyle,
    rowStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography gutterBottom sx={titleStyle}>
        {title}
      </Typography>
      <Typography sx={textStyle}>{text}</Typography>
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table sx={{ minWidth: 650 }} aria-label="comparison table">
          <TableHead>
            <TableRow>
              {columns?.map(({ label }, index) => (
                <TableCell key={index} sx={tableCellStyle(index)}>
                  <Typography sx={columnStyle}>{label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map(({ label, inHouse, offshore }, index) => {
              const cells = [label, inHouse, offshore];
              return (
                <TableRow key={index}>
                  {cells?.map((cell, idx) => (
                    <TableCell key={idx} sx={tableCellStyle(index)}>
                      <Typography sx={rowStyle}>{cell}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ComparisonTable;
