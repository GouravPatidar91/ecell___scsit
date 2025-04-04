
import React from 'react';
import RevealAnimation from './RevealAnimation';
import ImageWithFallback from './ImageWithFallback';

const HODSection: React.FC = () => {
  return (
    <section className="py-24 px-4 lg:px-56">
      <div className="max-w-6xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Message from <span className="text-blue-400">HOD</span></h2>
        </RevealAnimation>
        
        <div className="flex flex-col items-center">
          <RevealAnimation delay={200}>
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-70 blur-sm"></div>
              <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white/80 shadow-xl">
                <ImageWithFallback
                  src="/uploads/18c996a0-29a4-44dd-b049-6893f8b6f568.png"
                  alt="Dr. Ugrasen Suman"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={300}>
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300">
              "SCSIT, established in 1986, is a hub for cutting-edge tech education, offering M.Tech, M.Sc., MBA, PGDCA, and BCA programs tailored to industry needs. With a strong focus on research, innovation, and entrepreneurship, the school provides state-of-the-art labs, ICT-enabled infrastructure, and collaborations with top organizations like DRDO, ISRO, and C-DAC.
              <br /><br />
              Students gain hands-on experience through projects, internships, and real-world problem-solving, fostering technical expertise and leadership. Supported by various student development initiatives and backed by experienced faculty, SCSIT is committed to shaping future-ready IT professionals equipped to drive technological advancements and entrepreneurship."
            </blockquote>
            <p className="text-right mt-4 text-blue-300 font-semibold max-w-4xl mx-auto">- Dr. Ugrasen Suman</p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default HODSection;
