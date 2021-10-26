import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonCard() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width={210} />
      <Skeleton variant="text" width={210} />
      <Skeleton variant="text" width={210} />
    </Stack>
  )
}

export default SkeletonCard;