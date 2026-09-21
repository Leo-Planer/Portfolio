'use client';

import Button from '@mui/material/Button';
import Link from 'next/link';

export default function ContactButton() {
  return (
    <Button component={Link} variant="contained" size="large" href="/contact">
      Get In Touch
    </Button>
  );
}