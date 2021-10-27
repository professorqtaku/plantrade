import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {StyledPaper} from '../../../Pages/AuctionDetailPage/StyledAuctionDetailPage';

function SkeletonCard() {
  return (
    <StyledPaper>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={300} height={118} />
        <Skeleton variant="circular" width={50} height={50} />
        <Skeleton variant="text" width={300} />
        <Skeleton variant="text" width={300} />
        <Skeleton variant="text" width={300} />
      </Stack>
      </StyledPaper>
  )
}

export default SkeletonCard;