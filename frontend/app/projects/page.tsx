'use client';

import { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import Tag from '@/components/ui/Tag';
import { Project } from '@/lib/types';
import projectsData from '@/data/projects.json';

const projects = projectsData as Project[];

// Get all unique tags from projects
const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Page Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
        >
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
          Explore my portfolio of web applications and projects. Filter by technology to find
          specific examples.
        </Typography>
      </Box>

      {/* Search and Filter Section */}
      <Box sx={{ mb: 6 }}>
        <TextField
          fullWidth
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
          aria-label="Search projects"
        />

        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem', fontWeight: 600 }}>
            Filter by Technology
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
            {allTags.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                selected={selectedTags.includes(tag)}
                onClick={() => handleTagClick(tag)}
              />
            ))}
          </Stack>
          {selectedTags.length > 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2 }}
              role="status"
              aria-live="polite"
            >
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </Typography>
          )}
        </Box>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Box key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Box>
          ))
        ) : (
          <Box sx={{ gridColumn: '1 / -1', textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No projects found matching your criteria
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Try adjusting your search or filter selection
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
