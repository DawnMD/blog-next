import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import NoScrollLink from '../NoScrollLink/NoScrollLink';

interface MobileNavItemProps {
  children: ReactNode;
  onClick: () => void;
  id: string | undefined;
  href: string;
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const MobileNavItem = ({
  children,
  onClick,
  id,
  href,
}: MobileNavItemProps): JSX.Element => {
  return (
    <motion.li
      variants={itemVariants}
      id={id}
      className='text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100'>
      <NoScrollLink href={href}>
        <a onClick={onClick} className='flex w-auto pb-4'>
          {children}
        </a>
      </NoScrollLink>
    </motion.li>
  );
};

export default MobileNavItem;
