import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CartItemType } from '../types/apiCallsTypes';

type itemType = {
    item: CartItemType,
    handleAddToCart: (item: CartItemType) => void,
    
}


const MediaCard: React.FC<itemType> = ({item,handleAddToCart}) => {
     const { id,
        title,
        price,
        description,
        category,
         image,
         
        } = item
  return (
      <Card sx={{  textAlign : 'left'}} key={ id}>
      <CardMedia
              sx={{ height: 140 }}
              image={image}
              title={ title}
      />
          <CardContent>
              <Box sx={{display : 'flex' , alignItems: 'center' , justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="body1" fontWeight={'bold'} component="div"> {title.slice(0, 25)} </Typography>
                <Typography gutterBottom variant="caption" fontWeight={'bold'} component="div" color={'success'}> ${price}  </Typography>
              </Box>
              <Typography color="text.secondary" gutterBottom variant="body2" fontWeight={'bold'}  component="div"> {category.slice(0 , 25)} </Typography>

        <Typography variant="body2" color="text.secondary">
                  { description.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
              <Button sx={{ backgroundColor: '#FFF !important', color: '#666', py: 1, px: 2, mb: 1.5, boxShadow: 1 }} onClick={() => handleAddToCart(item)} size="small" variant='contained'  >Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard