import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomSection = styled('section')({
  paddingTop: 'calc(6 * 3.2rem)',
  paddingBottom: 'calc(4 * 3.2rem)',
  backgroundColor: '#282828',
  height: '100vh',
});

const CustomImg = styled('img')({
  boxShadow:
    '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
  overflow: 'clip',
  maxWidth: '25%',
  maxHeight: '50%',
});

const About = () => (
  <CustomSection>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 10,
        width: '100%',
        height: '100%',
      }}
    >
      <CustomImg src='./img/hosam.jpeg' alt='hosam' loading='lazy' />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant='h3' color='white'>
          About Me
        </Typography>
        <Typography variant='body1'>
          I came from Cairo, Egypt to the States to get my degree in Software
          Engineering. Received both my Bachelor&apos;s and Master&apos;s
          degrees from Iowa State University. Now, I work as a Developer for
          StoneX Group
        </Typography>
      </Box>
    </Box>
  </CustomSection>
);

export default About;
