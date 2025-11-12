'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const MotionCard = motion(Card);

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionCard
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:focus-within': {
          outline: '2px solid',
          outlineColor: 'primary.main',
          outlineOffset: '2px',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={`${project.title} screenshot`}
        sx={{
          objectFit: 'cover',
          backgroundColor: 'grey.200',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h3">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />
          ))}
          {project.tags.length > 3 && (
            <Chip label={`+${project.tags.length - 3}`} size="small" variant="outlined" />
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
          <Button
            component={Link}
            href={`/projects/${project.slug}`}
            variant="contained"
            size="small"
            fullWidth
          >
            View Details
          </Button>
          {project.demoUrl && (
            <Button
              component="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<OpenInNewIcon />}
              aria-label={`View ${project.title} demo`}
            >
              Demo
            </Button>
          )}
          <Button
            component="a"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            aria-label={`View ${project.title} source code`}
          >
            <GitHubIcon />
          </Button>
        </Stack>
      </CardActions>
    </MotionCard>
  );
}
