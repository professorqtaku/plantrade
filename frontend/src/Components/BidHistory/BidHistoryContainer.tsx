import Card from '@mui/material/Card';
import { useState } from 'react';
import BidHistory from './BidHistory';
import { Auction, User } from '../../Interfaces/Interfaces';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

interface Props {
  auction: Auction,
  whoAmI: User
}

function BidHistoryContainer({ auction, whoAmI }: Props) {
  const [expand, setExpand] = useState(false);

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
      <Card onClick={() => setExpand(!expand)} sx={{marginBottom: '70px'}}>
        <CardActions disableSpacing>
          <p>Budhistorik</p>
          <ExpandMore
            expand={expand} 
          >
            <KeyboardArrowDownIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <BidHistory auction={auction} whoAmI={whoAmI} />
        </Collapse>
      </Card>  
  )
}

export default BidHistoryContainer;