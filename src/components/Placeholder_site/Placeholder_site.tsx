import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon.js';
import { Arrow2Icon } from './Arrow2Icon.js';
import { Arrow3Icon } from './Arrow3Icon.js';
import { ClipPathGroupIcon } from './ClipPathGroupIcon.js';
import { LogoIcon } from './LogoIcon.js';
import classes from './Placeholder_site.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const Placeholder_site: FC<Props> = memo(function Placeholder_site(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.clipPathGroup}>
        <ClipPathGroupIcon className={classes.icon} />
      </div>
      <div className={classes.logo}>
        <LogoIcon className={classes.icon2} />
      </div>
      <div className={classes.seeYouAtTheGenZHackFest2023}>
        <div className={classes.textBlock}>See you at the</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Gen Z</span>
            <span className={classes.label2}> </span>
            <span className={classes.label3}>HackFest</span>
            <span className={classes.label4}> </span>
            <span className={classes.label5}>2023</span>
          </p>
        </div>
      </div>
      <div className={classes.august2126}>August 21-26.</div>
      <div className={classes.lagosNigeria}>Lagos, Nigeria.</div>
      <button className={classes.button}>
        <div className={classes.frame14}>
          <div className={classes.joinTheCommunity}>Become a Sponsor</div>
        </div>
      </button>
      <button className={classes.button2}>
        <div className={classes.frame142}>
          <div className={classes.joinTheCommunity2}>Speak at HackFest</div>
        </div>
      </button>
      <div className={classes.joinTheCommunity3}>Get Tickets</div>
      <div className={classes.joinTheCommunity4}>View past pictures</div>
      <div className={classes.joinTheCommunity5}>Tweets from 2022 </div>
      <div className={classes.arrow1}>
        <Arrow1Icon className={classes.icon3} />
      </div>
      <div className={classes.arrow2}>
        <Arrow2Icon className={classes.icon4} />
      </div>
      <div className={classes.arrow3}>
        <Arrow3Icon className={classes.icon5} />
      </div>
    </div>
  );
});
