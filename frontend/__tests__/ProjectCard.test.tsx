import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/lib/types';

const mockProject: Project = {
  id: '1',
  title: 'Test Project',
  slug: 'test-project',
  description: 'This is a test project description',
  longDescription: 'Long description',
  image: '/test-image.jpg',
  images: ['/test-image.jpg'],
  demoUrl: 'https://demo.example.com',
  repoUrl: 'https://github.com/test/repo',
  tags: ['React', 'TypeScript', 'Next.js'],
  featured: true,
  techStack: ['React', 'TypeScript'],
  year: 2024,
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders project tags', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders demo link when demoUrl is provided', () => {
    render(<ProjectCard project={mockProject} />);
    const demoLink = screen.getByRole('link', { name: /demo/i });
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com');
  });

  it('renders repo link', () => {
    render(<ProjectCard project={mockProject} />);
    const repoLink = screen.getByLabelText(/view test project source code/i);
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo');
  });

  it('does not render demo button when demoUrl is not provided', () => {
    const projectWithoutDemo = { ...mockProject, demoUrl: undefined };
    render(<ProjectCard project={projectWithoutDemo} />);
    expect(screen.queryByRole('link', { name: /demo/i })).not.toBeInTheDocument();
  });
});
