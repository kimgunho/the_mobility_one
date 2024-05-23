import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import GlobalLayout from '@/components/layout/GlobalLayout';
import Seo from '@/components/global/Seo';
import S01 from './main/S01';
import S02 from './main/S02';
import S03 from './main/S03';
import S04 from './main/S04';
import S05 from './main/S05';

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div>
      <Seo title="The Mobility One" description="모빌리티원에 오신걸 환영합니다." />
      <div>
        <S01 />
        <S02 />
        <S03 />
        <S04 />
        <S05 />
      </div>
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
