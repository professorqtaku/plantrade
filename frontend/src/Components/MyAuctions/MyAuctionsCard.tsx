import { Auction } from '../../Interfaces/Interfaces';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import AuctionItem from '../AuctionItem/AuctionItem';
import Chip from '@mui/material/Chip';
import { StyledChip } from './StyledMyAuctionsCard';

interface Props {
  title?: string,
  expandState?: boolean,
  userAuctionsListByStatus?: Auction[]
}

function MyAuctionsCard(props: Props) {
  const length = !props?.userAuctionsListByStatus ? 0 : props.userAuctionsListByStatus.length;
  
  const ExpandMore = styled((props) => {
  const { expand, ...other }: any = props;
  return <IconButton {...other} />;
      })(({ theme, expand}: any) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      }));
  
  return (
    <>
      <CardActions disableSpacing>
        <p>{props.title}</p><StyledChip><Chip label={`${length}`} /></StyledChip>
        <ExpandMore
          expand={props.expandState} 
        >
          <KeyboardArrowDownIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={props.expandState} timeout="auto" unmountOnExit>
        {props.userAuctionsListByStatus && props.userAuctionsListByStatus.map((auction: Auction) => {
          return <AuctionItem key={auction.id} auction={auction} />
        })}
      </Collapse>
    </>  
  )

}

export default MyAuctionsCard;