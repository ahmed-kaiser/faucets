import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const transactionsHistory = [
  {
    transactionType: "ETH",
    transactions: [
      {
        index: 1,
        time: "12:30 AM",
        amount: 487,
        hash: "4s8er5s5fe57rjmxnfuewrurks",
      },
      { index: 2, time: "10:30 AM", amount: 875, hash: "sf7s7ers4e7r7wser" },
      { index: 3, time: "11:30 AM", amount: 797, hash: "se4s7er7" },
    ],
  },
  {
    transactionType: "TestLink",
    transactions: [
      { index: 1, time: "08:30 AM", amount: 748, hash: "7s7effkeurusue4" },
      { index: 2, time: "10:23 AM", amount: 974, hash: "sfe7r7sr4fer" },
      { index: 3, time: "11:10 AM", amount: 874, hash: "s4e7s8er" },
    ],
  },
];

const TransactionHistory = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(
    transactionsHistory[0]
  );
  return (
    <Box component="section">
      <Typography sx={{ fontWeight: 600 }}>Request History</Typography>
      <Grid
        container
        columns={{ xs: 6, md: 12 }}
        rowSpacing={1}
        columnSpacing={1}
        sx={{ maxWidth: 600, my: 2 }}
      >
        {transactionsHistory.map((transaction, index) => (
          <Grid item xs={6} md={5} key={index}>
            <Button
              onClick={() => setSelectedTransaction(transaction)}
              key={transaction.transactionType}
              variant={
                selectedTransaction.transactionType ===
                transaction.transactionType
                  ? "contained"
                  : "outlined"
              }
              sx={{ textTransform: "capitalize", mr: 1 }}
              fullWidth
            >
              {transaction.transactionType} Transaction History
            </Button>
          </Grid>
        ))}
      </Grid>
      <History transactions={selectedTransaction.transactions} />
    </Box>
  );
};

const History = ({ transactions }) => {
  return (
    <TableContainer>
      <Table
        sx={{ maxWidth: 650, my: 2, border: "1px solid gray" }}
        size="small"
        aria-label="transaction table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Sr
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Time
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Amount
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Hash
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{transaction.index}</TableCell>
              <TableCell align="center">{transaction.time}</TableCell>
              <TableCell align="center">{transaction.amount}</TableCell>
              <TableCell align="center">{transaction.hash}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionHistory;
