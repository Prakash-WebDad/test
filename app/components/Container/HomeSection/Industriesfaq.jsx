"use client";
import MainLayout from "@/app/common/MainLayout";
import { industries } from "@/app/utils/HomemockData";
import linear from "@/app/assets/Images/award-linear.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function IndustriesFaq() {
  return (
    <div className="text-white font-sans">
      <MainLayout className="py-20 px-4">
        <h2 className="text-center text-xl md:text-5xl font-semibold text-white mb-14 tracking-tight">
          Industries We Serve
        </h2>
        <div className="overflow-hidden w-full">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 animate-marquee2 w-max"
          >
            {[...industries, ...industries].map(({ label }, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center gap-3 group cursor-pointer min-w-[120px]"
              >
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center
          border border-purple-700/50 bg-purple-900/20
          group-hover:border-purple-400 group-hover:bg-purple-800/30
          transition-all duration-300 shadow-[0_0_18px_rgba(139,92,246,0.15)]
          group-hover:shadow-[0_0_28px_rgba(139,92,246,0.4)]"
                >
                  <Image src={linear} alt="icon" width={28} height={28} />
                </div>

                <span className="text-center text-md text-white font-medium">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MainLayout>
    </div>
  );
}
