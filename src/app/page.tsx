'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import AboutMe from './components/sections/AboutMe';
import MainCover from './components/sections/MainCover';
import Project from './components/sections/Project';
import Skills from './components/sections/Skills';
import {title} from 'process';

export interface onClickbtn {
  (e: React.MouseEvent<HTMLDivElement, MouseEvent>, title: string): void;
}

export default function Home() {
  const mainSection = useRef<HTMLDivElement | null>(null);
  const aboutSection = useRef<HTMLDivElement | null>(null);
  const SkillSection = useRef<HTMLDivElement | null>(null);
  const ProjectSection = useRef<HTMLDivElement | null>(null);

  const btnHandler: onClickbtn = useCallback(
    (e, title) => {
      const tab: {[key: string]: HTMLDivElement | null} = {
        Home: mainSection.current,
        About: aboutSection.current,
        Skills: SkillSection.current,
        Portfolio: ProjectSection.current,
      };
      console.log(tab[title]);
      tab[title]?.scrollIntoView({behavior: 'smooth'});
    },
    [title],
  );

  return (
    <>
      <MainCover ref={mainSection} btnHandler={btnHandler}></MainCover>
      <AboutMe ref={aboutSection}></AboutMe>
      <Skills ref={SkillSection}></Skills>
      <Project ref={ProjectSection}></Project>
    </>
  );
}
