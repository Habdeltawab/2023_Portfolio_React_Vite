import { styled } from '@mui/system';
import { Box } from '@mui/material';

const CustomSection = styled('section')({
  backgroundColor: '#141414',
  width: '100%',
  height: '100vh',
  minHeight: 'calc(25.5 * var(3.2rem))',
  overflow: 'hidden',
  position: 'relative',
  opacity: 1,
  visibility: 'visible',
});

const CustomBox = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundImage: 'url(./img/hero-image.jpeg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    background: 'black',
    opacity: '0.5',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
});

const Hero = () => {
  return (
    <CustomSection className='hero-section'>
      <CustomBox>
        <h1 style={{ zIndex: 1 }}>Hello hosam</h1>
      </CustomBox>
    </CustomSection>
  );
};

export default Hero;
