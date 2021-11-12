import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Auction, Bid, User } from '../../Interfaces/Interfaces';
import { StyledCell } from './StyledBidHistory';

interface Props {
  auction: Auction,
  whoAmI: User
}

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

const columns: Column[] = [
  { id: 'username', label: 'Användarnamn'},
  { id: 'bids', label: 'Bud (kr)', minWidth: 70},
  { id: 'date', label: 'Datum'}
]

function BidHistory({ auction, whoAmI }: Props) {
  const me = whoAmI?.username;
  const bids = auction.bids;

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column: Column) => (
              <TableCell
                key={column.id}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bids && bids.map((bid: Bid, index: number) => {
            const isMe = me === bid.user.username;
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={bid.id} sx={{backgroundColor: index % 2 ? 'lightgrey' : 'white'}}>
                    <TableCell>
                      <StyledCell me={isMe}>{bid.user.username}</StyledCell>
                    </TableCell>
                    <TableCell>
                  <StyledCell me={isMe}>{bid.price}</StyledCell>
                    </TableCell>
                    <TableCell>
                      <StyledCell me={isMe}>{new Date(bid.createdDate).toLocaleString("sv-SV")}</StyledCell>
                    </TableCell>
              </TableRow>
            )
          }).reverse()}
          </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BidHistory;