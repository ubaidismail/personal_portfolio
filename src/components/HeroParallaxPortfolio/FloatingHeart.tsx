"use client";
// components/FloatingHearts.tsx
import { motion } from 'framer-motion';

function FloatingHeart () {
    return (
        <>

            <motion.div>
                <div className="wrapper">
                    <div className="heart x1"></div>
                    <div className="heart x2"></div>
                    <div className="heart x3"></div>
                    <div className="heart x4"></div>
                    <div className="heart x5"> </div>
                    <div className="altheart x6"></div>
                </div>
            </motion.div>
            {/* ))} */}
        </>
    );
};
export default FloatingHeart;