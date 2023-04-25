import { memo, SVGProps } from 'react';

const Arrow3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.7132 -7.7955e-06C22.7132 -0.828435 22.0416 -1.50001 21.2132 -1.50001H7.7132C6.88478 -1.50001 6.2132 -0.828435 6.2132 -7.7955e-06C6.2132 0.828419 6.88478 1.49999 7.7132 1.49999L19.7132 1.49999L19.7132 13.5C19.7132 14.3284 20.3848 15 21.2132 15C22.0416 15 22.7132 14.3284 22.7132 13.5V-7.7955e-06ZM1.06066 22.2739L22.2739 1.06065L20.1525 -1.06067L-1.06066 20.1525L1.06066 22.2739Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Arrow3Icon);
export { Memo as Arrow3Icon };
