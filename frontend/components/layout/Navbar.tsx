'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useState } from 'react';
import { useThemeMode } from '@/lib/ThemeProvider';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }} role="navigation" aria-label="Mobile navigation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} aria-label="Close menu" edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              onClick={handleDrawerToggle}
              selected={pathname === link.href}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{ backgroundColor: 'background.paper' }}
    >
      <Toolbar className="max-w-7xl w-full mx-auto">
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'text.primary',
            fontWeight: 700,
            '&:hover': { color: 'primary.main' },
            transition: 'color 0.2s',
          }}
        >
          Portfolio
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              color={pathname === link.href ? 'primary' : 'inherit'}
              sx={{
                fontWeight: pathname === link.href ? 600 : 400,
              }}
            >
              {link.label}
            </Button>
          ))}
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>

        {/* Mobile Navigation */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Open menu"
            edge="end"
            onClick={handleDrawerToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          id="mobile-menu"
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
