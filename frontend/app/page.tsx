'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/lib/types';
import projectsData from '@/data/projects.json';

const projects = projectsData as Project[];
const featuredProjects = projects.filter((p) => p.featured);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box
        component={motion.section}
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        sx={{
          py: { xs: 8, md: 16 },
          background:
            'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <motion.div variants={fadeIn}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textAlign: 'center',
                mb: 2,
              }}
            >
              Hi, I&apos;m{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Abdullah Jabbar
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 3,
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Full Stack Developer
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
                mb: 4,
                fontSize: '1.125rem',
                color: 'text.secondary',
              }}
            >
              Building modern web applications with React, Next.js, and Node.js. Passionate about
              creating exceptional user experiences and clean, maintainable code.
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                View Projects
              </Button>
              <Button component={Link} href="/contact" variant="outlined" size="large">
                Get in Touch
              </Button>
            </Stack>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              flexWrap="wrap"
              sx={{ gap: 2 }}
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'text.secondary',
                  }}
                >
                  <CodeIcon fontSize="small" />
                  <Typography variant="body2">{tech}</Typography>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Featured Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            A selection of my recent work. Check out my full portfolio to see more projects.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}
        >
          {featuredProjects.map((project, index) => (
            <Box key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/projects"
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </>
  );
}
