import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const CustomSection = styled('section')({
  backgroundColor: '#141414',
  width: '100%',
  height: '100vh',
  minHeight: 'calc(25.5 * var(3.2rem))',
  overflow: 'hidden',
  position: 'relative',
  opacity: 1,
  visibility: 'visible',
  display: 'flex', // add this
  justifyContent: 'center', // add this
  alignItems: 'center', // add this
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
  backgroundImage: 'url(./img/bg.jpg)',
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
        <Box
          sx={{
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '1080px',
          }}
        >
          <Typography variant='h1' fontWeight='bold' sx={{ zIndex: 1 }}>
            I&apos;m Hosam Abdeltawab
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='white'
            sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            I&apos;m a{' '}
            <span style={{ color: 'white', opacity: 1 }}>
              Software Engineer
            </span>{' '}
            who creates awesome and effective applications for companies of all
            sizes. Let&apos;s{' '}
            <span style={{ color: 'white', opacity: 1 }}>start scrolling</span>{' '}
            and learn more{' '}
            <span style={{ color: 'white', opacity: 1 }}>about me.</span>
          </Typography>
        </Box>
      </CustomBox>
    </CustomSection>
  );
};

export default Hero;
