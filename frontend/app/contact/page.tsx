'use client';

import { useState, FormEvent } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Leo-Planer', icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/leo-planer', icon: LinkedInIcon },
  { name: 'Email', url: 'mailto:abdullahjabbar818@gmail.com', icon: EmailIcon },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Hidden field for spam protection
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Honeypot check
    if (formData.honeypot) {
      setStatus('error');
      setErrorMessage('Spam detected');
      return;
    }

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
        >
          Get In Touch
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
          Have a question or want to work together? I&apos;d love to hear from you!
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' },
          gap: 6,
        }}
      >
        {/* Contact Form */}
        <Box>
          <Paper sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  inputProps={{ 'aria-label': 'Your name' }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  inputProps={{ 'aria-label': 'Your email address' }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  inputProps={{ 'aria-label': 'Your message' }}
                />
                {/* Honeypot field - hidden from users */}
                <TextField
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  sx={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                {status === 'success' && (
                  <Alert severity="success">
                    Thank you for your message! I&apos;ll get back to you soon.
                  </Alert>
                )}
                {status === 'error' && <Alert severity="error">{errorMessage}</Alert>}
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={status === 'loading'}
                  startIcon={status === 'loading' ? <CircularProgress size={20} /> : <EmailIcon />}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>

        {/* Contact Info */}
        <Box>
          <Stack spacing={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    <a
                      href="mailto:abdullahjabbar818@gmail.com"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      abdullahjabbar818@gmail.com
                    </a>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Location
                  </Typography>
                  <Typography variant="body1">Pakistan</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Availability
                  </Typography>
                  <Typography variant="body1">Open to opportunities</Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Connect With Me
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
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
                      sx={{
                        border: 1,
                        borderColor: 'divider',
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  );
                })}
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
