'use client';

import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';

interface TagProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const MotionChip = motion(Chip);

export default function Tag({ label, selected = false, onClick }: TagProps) {
  return (
    <MotionChip
      label={label}
      color={selected ? 'primary' : 'default'}
      variant={selected ? 'filled' : 'outlined'}
      onClick={onClick}
      clickable={!!onClick}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      sx={{
        fontWeight: selected ? 600 : 400,
        cursor: onClick ? 'pointer' : 'default',
      }}
    />
  );
}
