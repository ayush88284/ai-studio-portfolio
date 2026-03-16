import { Hero } from '@/components/Hero';
import { Bio } from '@/components/Bio';
import { WhatIDo } from '@/components/WhatIDo';
import { FeaturedWork } from '@/components/FeaturedWork';
import { Tools } from '@/components/Tools';
import { Stats } from '@/components/Stats';
import { Timeline } from '@/components/Timeline';
import { CurrentlyBuilding } from '@/components/CurrentlyBuilding';
import { ResumeIntake } from '@/components/ResumeIntake';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { EasterEgg } from '@/components/EasterEgg';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <CustomCursor />
      <EasterEgg />
      
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Bio />
        <WhatIDo />
        <FeaturedWork />
        <Tools />
        <Stats />
        <Timeline />
        <CurrentlyBuilding />
        <ResumeIntake />
        <Footer />
      </div>
    </main>
  );
}
