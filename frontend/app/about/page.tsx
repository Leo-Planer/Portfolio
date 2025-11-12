import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my skills, experience, and background as a full stack developer.',
};

const skills = [
  {
    category: 'Frontend',
    icon: CodeIcon,
    items: [
      { name: 'React / Next.js', proficiency: 95 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'HTML / CSS', proficiency: 95 },
      { name: 'Tailwind CSS', proficiency: 90 },
      { name: 'Material-UI', proficiency: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: StorageIcon,
    items: [
      { name: 'Node.js / Express', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 80 },
      { name: 'MongoDB', proficiency: 75 },
      { name: 'REST APIs', proficiency: 90 },
      { name: 'GraphQL', proficiency: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: BuildIcon,
    items: [
      { name: 'Git / GitHub', proficiency: 90 },
      { name: 'Docker', proficiency: 75 },
      { name: 'CI/CD', proficiency: 80 },
      { name: 'Testing (Jest/Vitest)', proficiency: 85 },
      { name: 'AWS / Vercel', proficiency: 75 },
    ],
  },
];

export default function AboutPage() {
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
          About Me
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
          Passionate full stack developer with a focus on building exceptional digital experiences
        </Typography>
      </Box>

      {/* Bio Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
          gap: 6,
          mb: 8,
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Hello! I&apos;m Abdullah Jabbar
          </Typography>
          <Typography variant="body1" paragraph>
            I&apos;m a full stack developer based in Pakistan, specializing in building modern web
            applications with React, Next.js, and Node.js. I am passionate about creating
            exceptional digital experiences and have completed multiple projects demonstrating my
            skills in frontend and full-stack development.
          </Typography>
          <Typography variant="body1" paragraph>
            My passion lies in creating intuitive, accessible, and performant web applications that
            solve real-world problems. I believe in writing clean, maintainable code and following
            best practices to ensure scalability and longevity of the applications I build. I hold
            certifications in Responsive Web Design from freeCodeCamp and the IBM AI Developer
            Professional Certificate.
          </Typography>
          <Typography variant="body1" paragraph>
            When I&apos;m not coding, you can find me exploring new technologies, working on
            personal projects, and continuously learning to stay up-to-date with the latest web
            development trends and best practices.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              download
            >
              Download Resume
            </Button>
          </Box>
        </Box>
        <Box>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Facts
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Location
                </Typography>
                <Typography variant="body1">Pakistan</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="body1">abdullahjabbar818@gmail.com</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Certifications
                </Typography>
                <Typography variant="body1">freeCodeCamp RWD, IBM AI Developer</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  GitHub
                </Typography>
                <Typography variant="body1">Leo-Planer</Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Skills & Technologies
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {skills.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
              <Box key={skillGroup.category}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Icon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6">{skillGroup.category}</Typography>
                  </Box>
                  <Stack spacing={2.5}>
                    {skillGroup.items.map((skill) => (
                      <Box key={skill.name}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.proficiency}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.proficiency}
                          sx={{ height: 6, borderRadius: 1 }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h5" gutterBottom>
          Interested in working together?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          I&apos;m always open to discussing new projects and opportunities.
        </Typography>
        <Button variant="contained" size="large" href="/contact">
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
}
