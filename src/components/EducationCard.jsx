import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EducationCard = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    {
      id: 1,
      title: "Academlo",
      subtitle: "Programador FullStack",
    },
    {
      id: 1,
      title: "Academlo",
      subtitle: "Programador FullStack",
    },
    {
      id: 1,
      title: "Academlo",
      subtitle: "Programador FullStack",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <div className="div">
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>

          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

export default EducationCard;
