export const useSpreadCardAnimations = () => {
  const cards = {
    loading: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    loaded: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const card = {
    loading: {
      opacity: 0,
      x: -10,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 1 },
      },
    },
    loaded: {
      opacity: 1,
      x: 0,
      transition: {
        x: { stiffness: 1000 },
        opacity: { duration: 1 },
      },
    },
  };
  return { card, cards };
};
