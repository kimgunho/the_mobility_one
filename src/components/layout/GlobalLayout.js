import localFont from 'next/font/local';
import { Jost } from 'next/font/google';

import Header from '../global/Header';
import Footer from '../global/Footer';

const jost = Jost({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-jost' });
const pretendard = localFont({
  variable: '--font-pretendard',
  src: [
    {
      path: '../../../public/assets/ko_font/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/assets/ko_font/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../../public/assets/ko_font/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'bold',
    },
  ],
});

const GlobalLayout = ({ children }) => (
  <div className={`root ${pretendard.variable} ${jost.variable}`}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default GlobalLayout;
