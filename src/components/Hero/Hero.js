import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Img } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding lg_col>
      <LeftSection>
        <SectionTitle main center nopadding>
          Emad Mazen Al-lahham
        </SectionTitle>
        <SectionText>
          An AI Engineer and Backend Developer with a passion for learning and
          achievement, Outstanding time management and organizational abilities,
          eager to be challenged to grow and improve my skills.
        </SectionText>
        <Link href="#about">
          <Button>Learn More</Button>
        </Link>
      </LeftSection>
      <Img src="/images/emad.png" />
    </Section>
  </>
);

export default Hero;
