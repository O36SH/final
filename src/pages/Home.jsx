import React from 'react';
import Header from '../components/header/Header';
import UserLevel from '../components/UserLevel';
import PointsDisplay from '../components/PointsDisplay';
import StoreSection from '../components/StoreSection';
import { motion } from 'framer-motion';

function Home() {
  const currentUser = {
    id: "12345678",
    name: "أحمد محمد",
    bio: "مطور تطبيقات ومهتم بالتكنولوجيا",
    points: 15000
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      <Header />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-6 mt-4"
      >
        <motion.div variants={itemVariants}>
          <UserLevel user={currentUser} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <PointsDisplay points={currentUser.points} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <StoreSection />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;