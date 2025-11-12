import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for this portfolio website.',
};

export default function PrivacyPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
      >
        Privacy Policy
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          This website is a personal portfolio and collects minimal information. When you use the
          contact form, we collect your name, email address, and message content solely for the
          purpose of responding to your inquiry.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          The information you provide through the contact form is used exclusively to respond to
          your message. We do not sell, trade, or otherwise transfer your personal information to
          outside parties.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          This website uses minimal cookies to remember your theme preference (light or dark mode).
          These are stored locally in your browser and are not shared with third parties.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Third-Party Services
        </Typography>
        <Typography variant="body1" paragraph>
          This website is hosted on Vercel and may be subject to their privacy policies. We do not
          use analytics or tracking services that collect personal data.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to request deletion of any personal information you&apos;ve submitted
          through our contact form. Please contact us at your.email@example.com to make such a
          request.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Contact
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this privacy policy, please contact us at
          your.email@example.com.
        </Typography>
      </Box>
    </Container>
  );
}
