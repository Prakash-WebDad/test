"use client";
import React from "react";
import { motion } from "framer-motion";
import White_logo from "@/app/assets/Images/award-white.svg";
import Image from "next/image";
import MainLayout from "@/app/common/MainLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const cards = [
  {
    label: "Mission",
    text: "To help businesses across India unlock the full potential of their technology by delivering expert SAP and Odoo consulting services that are practical, scalable and built around real business needs.",
  },
  {
    label: "Vision",
    text: "To be the most trusted SAP and Odoo consulting partner in India, known for building intelligent, future-ready business systems that empower organizations to grow without limits.",
  },
];

const AnimatedText = ({ text }) => {
  return (
    <p className=" text-sm leading-relaxed">
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          viewport={{ once: true }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

const AboutMission = () => {
  return (
    <MainLayout className="relative w-full bg-[#0d0a1a] overflow-hidden py-16 px-6 md:px-30">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"

      />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[100px] bg-[#7c3aed] opacity-15 rounded-full blur-[100px]" />
      <div className="relative z-10 flex flex-col gap-9">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white font-black text-2xl leading-snug mb-5">
            We Are Bee Waave and We Mean Business
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=" text-sm leading-relaxed"
          >
            Bee Waave is a Chennai based SAP and Odoo consulting company
            built for businesses that refuse to settle for average
            technology. We are a team of experienced SAP consultants, cloud
            architects and AI engineers driven by one shared goal: Helping
            businesses run smarter and grow faster. Our expertise covers SAP
            S/4HANA implementation, Odoo ERP delivery, cloud transformation
            and AI powered automation through our very own beeAI platform.
            Everything your business needs under one roof. We do not just
            deliver technology. We show up as partners, stay through every
            challenge and remain by your side well after we go live.
          </motion.p>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4">
          {cards?.map((card, i) => (
            <motion.div
              key={card.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="
  relative flex-1 p-px rounded-2xl 
  bg-[linear-gradient(to_top_left,#8239D7,rgba(116,0,250,0)_55%)]
  hover:bg-[linear-gradient(to_top_left,#a855f7,rgba(116,0,250,0)_70%)]
  transition-all duration-300
"
            >
              <div
                className="relative h-full w-full rounded-2xl p-10 border border-white/10 overflow-hidden flex flex-col"
                style={{
                  background: "linear-gradient(135deg, rgba(116,0,250,0.15), rgba(10,5,30,0.92))",
                  backdropFilter: "blur(16px)",
                }}
              >
                <Image src={White_logo} alt="icon" width={10} height={40} className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-3 text-white">
                  {card.label}
                </h3>
                <AnimatedText text={card.text} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
};

export default AboutMission;