import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.7132 0.142143C22.7132 -0.686284 22.0416 -1.35786 21.2132 -1.35786H7.7132C6.88478 -1.35786 6.2132 -0.686284 6.2132 0.142143C6.2132 0.97057 6.88478 1.64214 7.7132 1.64214L19.7132 1.64214L19.7132 13.6421C19.7132 14.4706 20.3848 15.1421 21.2132 15.1421C22.0416 15.1421 22.7132 14.4706 22.7132 13.6421V0.142143ZM1.06066 22.416L22.2739 1.2028L20.1525 -0.918517L-1.06066 20.2947L1.06066 22.416Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
