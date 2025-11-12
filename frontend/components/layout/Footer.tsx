'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Leo-Planer', icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/leo-planer', icon: LinkedInIcon },
  { name: 'Twitter', url: 'https://twitter.com/@AbdullahJa57382', icon: TwitterIcon },
  { name: 'Email', url: 'mailto:abdullahjabbar818@gmail.com', icon: EmailIcon },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary" textAlign="center">
            © {new Date().getFullYear()} Abdullah Jabbar. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  size="small"
                  sx={{
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
