'use client';
import { BannerV2 } from './components/banner/banner-v2';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { NavBarV2 } from './components/nav-bar/nav-bar-v2';
import { MySkills } from './components/skills/skills';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <NavBarV2 />
      <BannerV2 />
      {/* <MySkills />
      <Contact />
      <Footer /> */}
    </div>
  );
}
