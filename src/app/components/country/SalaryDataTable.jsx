import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

const SalaryDataTable = ({ data }) => {
  const { title, text, columns, rows, styles } = data || {};
  const {
    componentBoxStyle,
    mainBoxStyle,
    titleAndDescriptionBoxStyle,
    titleStyle,
    textStyle,
    tebleBoxStyle,
    tableContainerStyle,
    tableCellStyle,
    columnStyle,
    rowStyle,
  } = styles || {};
  return (
    <Box sx={componentBoxStyle}>
      <Box sx={mainBoxStyle}>
        <Box width={'100%'}>
          <Box sx={titleAndDescriptionBoxStyle}>
            <Typography sx={titleStyle}>{title}</Typography>
            <Typography sx={textStyle}>{text}</Typography>
          </Box>
          <Box sx={tebleBoxStyle}>
            <TableContainer component={Paper} sx={tableContainerStyle}>
              <Table sx={{ minWidth: 650 }} aria-label="comparison table">
                <TableHead>
                  <TableRow>
                    {columns?.map(({ label }, index) => (
                      <TableCell key={index} sx={tableCellStyle(0, index)}>
                        <Typography sx={columnStyle}>{label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map(
                    ({ label, country_salary, usd_salary, savings }, index) => {
                      const cells = [
                        label,
                        country_salary,
                        usd_salary,
                        savings,
                      ];
                      return (
                        <TableRow key={index}>
                          {cells?.map((cell, idx) => (
                            <TableCell
                              key={idx}
                              sx={tableCellStyle(index + 1, idx)}
                            >
                              <Typography sx={rowStyle}>{cell}</Typography>
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SalaryDataTable;
