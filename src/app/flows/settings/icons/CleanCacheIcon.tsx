import { IconProps } from '@euler/app/components/icons/types';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const CleanCacheIcon = memo(({ size, style }: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="-4 -4 30 30"
    style={style}
  >
    <Path
      d="M6.15385 3.07692V0.769231C6.15385 0.565218 6.23489 0.369561 6.37915 0.225302C6.52341 0.0810437 6.71906 0 6.92308 0H13.0769C13.2809 0 13.4766 0.0810437 13.6209 0.225302C13.7651 0.369561 13.8462 0.565218 13.8462 0.769231V3.07692H19.6154C19.7174 3.07692 19.8152 3.11745 19.8873 3.18957C19.9595 3.2617 20 3.35953 20 3.46154C20 3.56354 19.9595 3.66137 19.8873 3.7335C19.8152 3.80563 19.7174 3.84615 19.6154 3.84615H17.6923V19.2308C17.6923 19.4348 17.6113 19.6304 17.467 19.7747C17.3227 19.919 17.1271 20 16.9231 20H3.07692C2.87291 20 2.67725 19.919 2.53299 19.7747C2.38874 19.6304 2.30769 19.4348 2.30769 19.2308V3.84615H0.384615C0.282609 3.84615 0.184781 3.80563 0.112651 3.7335C0.0405219 3.66137 0 3.56354 0 3.46154C0 3.35953 0.0405219 3.2617 0.112651 3.18957C0.184781 3.11745 0.282609 3.07692 0.384615 3.07692H6.15385ZM6.92308 3.07692H13.0769V0.769231H6.92308V3.07692ZM16.9231 3.84615H3.07692V19.2308H16.9231V3.84615Z"
      fill="#333333"
    />
    <Path
      d="M9.728 6.30186C9.65587 6.37399 9.61535 6.47182 9.61535 6.57382V17.3107C9.61535 17.4128 9.65587 17.5106 9.728 17.5827C9.80013 17.6548 9.89796 17.6954 9.99996 17.6954C10.102 17.6954 10.1998 17.6548 10.2719 17.5827C10.3441 17.5106 10.3846 17.4128 10.3846 17.3107V6.57382C10.3846 6.47182 10.3441 6.37399 10.2719 6.30186C10.1998 6.22973 10.102 6.18921 9.99996 6.18921C9.89796 6.18921 9.80013 6.22973 9.728 6.30186Z"
      fill="#0077FF"
    />
    <Path
      d="M13.7335 16.0612C13.8056 15.989 13.8461 15.8912 13.8461 15.7892V8.08921C13.8461 7.9872 13.8056 7.88937 13.7335 7.81725C13.6613 7.74512 13.5635 7.70459 13.4615 7.70459C13.3595 7.70459 13.2617 7.74512 13.1895 7.81725C13.1174 7.88937 13.0769 7.9872 13.0769 8.08921V15.7892C13.0769 15.8912 13.1174 15.989 13.1895 16.0612C13.2617 16.1333 13.3595 16.1738 13.4615 16.1738C13.5635 16.1738 13.6613 16.1333 13.7335 16.0612Z"
      fill="#0077FF"
    />
    <Path
      d="M6.81039 16.0612C6.88252 15.989 6.92304 15.8912 6.92304 15.7892V8.08921C6.92304 7.9872 6.88252 7.88937 6.81039 7.81725C6.73826 7.74512 6.64043 7.70459 6.53842 7.70459C6.43642 7.70459 6.33859 7.74512 6.26646 7.81725C6.19433 7.88937 6.15381 7.9872 6.15381 8.08921V15.7892C6.15381 15.8912 6.19433 15.989 6.26646 16.0612C6.33859 16.1333 6.43642 16.1738 6.53842 16.1738C6.64043 16.1738 6.73826 16.1333 6.81039 16.0612Z"
      fill="#0077FF"
    />
  </Svg>
));
