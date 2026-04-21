import dynamic from 'next/dynamic';
import PaperCutTransition from '@/components/ui/PaperCutTransition';

const Section1_Intro = dynamic(() => import('@/components/sections/Section1_Intro'), { ssr: true });
const Section2_AboutEvent = dynamic(() => import('@/components/sections/Section2_AboutEvent'), { loading: () => <div className="h-screen w-full bg-black/80" /> });
const Section3_NewsRoom = dynamic(() => import('@/components/sections/Section3_NewsRoom'));
const Section4_OfficialVideo = dynamic(() => import('@/components/sections/Section4_OfficialVideo'));
const Section5_AnniversaryTimeline = dynamic(() => import('@/components/sections/Section5_AnniversaryTimeline'));
const Section6_RegisterNow = dynamic(() => import('@/components/sections/Section6_RegisterNow'));
const Section7_OurJourney = dynamic(() => import('@/components/sections/Section7_OurJourney'));
const Section8_PreviousVideos = dynamic(() => import('@/components/sections/Section8_PreviousVideos'));
const Section9_ExcellenceAwards = dynamic(() => import('@/components/sections/Section9_ExcellenceAwards'));

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen overflow-x-hidden text-white">
      <Section1_Intro />
      <Section2_AboutEvent />
      <Section3_NewsRoom />
      <Section4_OfficialVideo />
      <Section5_AnniversaryTimeline />
      <Section6_RegisterNow />
      <Section7_OurJourney />
      <Section8_PreviousVideos />
      <Section9_ExcellenceAwards />
    </main>
  );
}
