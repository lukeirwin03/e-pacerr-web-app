// import React, { useRef } from "react";
// import { motion, useTransform, useScroll } from "framer-motion";
// import Image from "next/image";
// import stock1 from "../../stockImage1.png";
// import stock2 from "../../stockImage2.png";
// import stock3 from "../../stockImage3.png";
// import stock4 from "../../stockImage4.png";

// interface CardProps {
//   url: string;
//   title: string;
//   id: number;
// }

// const cards = [
//   {
//     url: stock1,
//     title: "Introducing Reproducibility in Bioinformatics",
//     id: 1,
//   },
//   {
//     url: stock2,
//     title: "Exploring Reproducibility in Bioinformatics",
//     id: 2,
//   },
//   {
//     url: stock3,
//     title: "Data Management in Bioinformatics",
//     id: 3,
//   },
//   {
//     url: stock4,
//     title: "Code Management in Bioinformatics",
//     id: 4,
//   },
// ];




// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "95%"]);

//   return (
//     <section ref={targetRef} className="relative h-[60vh]">
//       <div className="sticky top-0 flex h-[30vh] items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-10">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }: { card: CardProps }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[300px] w-[450px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScrollCarousel;

