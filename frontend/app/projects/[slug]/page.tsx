'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import projectsData from '@/data/projects.json';

const projects = projectsData as Project[];

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const [project, setProject] = useState<Project | null>(null);
  const [slug, setSlug] = useState<string>('');

  useEffect(() => {
    params.then(({ slug: resolvedSlug }) => {
      setSlug(resolvedSlug);
      const foundProject = projects.find((p) => p.slug === resolvedSlug);
      if (foundProject) {
        setProject(foundProject);
      }
    });
  }, [params]);

  if (!project && slug) {
    notFound();
  }

  if (!project) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
        >
          {project.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 2, mb: 3 }}>
          {project.demoUrl && (
            <Button
              component="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<OpenInNewIcon />}
            >
              View Live Demo
            </Button>
          )}
          <Button
            component="a"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            View Source Code
          </Button>
        </Stack>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} color="primary" variant="outlined" />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Project Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 250, md: 400 },
          mb: 4,
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: 'grey.200',
        }}
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Project Description */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          About This Project
        </Typography>
        <Typography variant="body1" paragraph>
          {project.longDescription}
        </Typography>
      </Box>

      {/* Tech Stack */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Tech Stack
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
          {project.techStack.map((tech) => (
            <Chip key={tech} label={tech} variant="filled" />
          ))}
        </Stack>
      </Box>

      {/* Problem */}
      {project.problem && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Problem
          </Typography>
          <Typography variant="body1" paragraph>
            {project.problem}
          </Typography>
        </Box>
      )}

      {/* Solution */}
      {project.solution && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Solution
          </Typography>
          <Typography variant="body1" paragraph>
            {project.solution}
          </Typography>
        </Box>
      )}

      {/* Lessons Learned */}
      {project.lessonsLearned && project.lessonsLearned.length > 0 && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Lessons Learned
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            {project.lessonsLearned.map((lesson, index) => (
              <Typography component="li" variant="body1" key={index} paragraph>
                {lesson}
              </Typography>
            ))}
          </Box>
        </Box>
      )}

      {/* Back to Projects */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Button component={Link} href="/projects" variant="outlined" size="large">
          Back to All Projects
        </Button>
      </Box>
    </Container>
  );
}
