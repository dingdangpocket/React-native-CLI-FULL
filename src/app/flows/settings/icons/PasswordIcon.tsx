import { IconProps } from '@euler/app/components/icons/types';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const PasswordIcon = memo(({ size, style }: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="-4 -4 30 30"
    style={style}
  >
    <Path
      d="M16.0613 7.69231C16.3418 7.69231 16.6107 7.80371 16.809 8.002C17.0073 8.2003 17.1187 8.46924 17.1187 8.74967V17.8853C17.1187 18.0241 17.0913 18.1616 17.0382 18.2899C16.9851 18.4182 16.9072 18.5348 16.809 18.6329C16.7108 18.7311 16.5942 18.809 16.466 18.8622C16.3377 18.9153 16.2002 18.9426 16.0613 18.9426H2.11472C1.97587 18.9426 1.83837 18.9153 1.71009 18.8622C1.5818 18.809 1.46524 18.7311 1.36706 18.6329C1.26887 18.5348 1.19099 18.4182 1.13785 18.2899C1.08471 18.1616 1.05736 18.0241 1.05736 17.8853V8.74967C1.05736 8.46924 1.16876 8.2003 1.36706 8.002C1.56535 7.80371 1.83429 7.69231 2.11472 7.69231H16.0613ZM16.0613 6.63495H2.11472C1.55386 6.63495 1.01598 6.85775 0.619388 7.25434C0.222801 7.65092 0 8.18881 0 8.74967V17.8853C0 18.4461 0.222801 18.984 0.619388 19.3806C1.01598 19.7772 1.55386 20 2.11472 20H16.0613C16.6222 20 17.1601 19.7772 17.5567 19.3806C17.9532 18.984 18.176 18.4461 18.176 17.8853V8.74967C18.176 8.18881 17.9532 7.65092 17.5567 7.25434C17.1601 6.85775 16.6222 6.63495 16.0613 6.63495V6.63495Z"
      fill="#333333"
    />
    <Path
      d="M15.0621 7.08432H14.0047V5.97409C14.0047 4.6701 13.4867 3.41951 12.5646 2.49744C11.6426 1.57537 10.392 1.05736 9.08799 1.05736C7.78399 1.05736 6.5334 1.57537 5.61133 2.49744C4.68926 3.41951 4.17125 4.6701 4.17125 5.97409V7.08432H3.11389V5.97409C3.11389 4.38967 3.7433 2.87013 4.86366 1.74977C5.98402 0.629412 7.50356 0 9.08799 0C10.6724 0 12.1919 0.629412 13.3123 1.74977C14.4327 2.87013 15.0621 4.38967 15.0621 5.97409V7.08432Z"
      fill="#333333"
    />
    <Path
      d="M9.05099 10.1665H9.12501C10.0555 10.1665 10.5207 10.6318 10.5207 11.5622V11.6363C10.5207 12.5667 10.0555 13.032 9.12501 13.032H9.05099C8.12051 13.032 7.65527 12.5667 7.65527 11.6363V11.5622C7.65527 10.6318 8.12051 10.1665 9.05099 10.1665Z"
      fill="#0077FF"
    />
    <Path
      d="M9.07217 11.0864H9.0986C9.46515 11.0864 9.64843 11.2697 9.64843 11.6363V15.6278C9.64843 15.9944 9.46515 16.1776 9.0986 16.1776H9.07217C8.70562 16.1776 8.52234 15.9944 8.52234 15.6278V11.6363C8.52234 11.2697 8.70562 11.0864 9.07217 11.0864Z"
      fill="#0077FF"
    />
  </Svg>
));
