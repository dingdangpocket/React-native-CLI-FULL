import { IconProps } from '@euler/app/components/icons/types';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const InviteCollegueIcon = memo(({ size, style }: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="-4 -4 30 30"
    style={style}
  >
    <Path
      d="M9.65175 0C6.34098 0 3.65698 2.684 3.65698 5.99477C3.65698 9.30553 6.34098 11.9895 9.65175 11.9895C12.9625 11.9895 15.6465 9.30553 15.6465 5.99477C15.6465 2.684 12.9625 0 9.65175 0ZM9.65175 1.2403C12.2775 1.2403 14.4062 3.36906 14.4062 5.99477C14.4062 8.62048 12.2775 10.7492 9.65175 10.7492C7.02604 10.7492 4.89728 8.62048 4.89728 5.99477C4.89728 3.36906 7.02604 1.2403 9.65175 1.2403Z"
      fill="#333333"
    />
    <Path
      d="M9.65169 10.7491C9.81616 10.7491 9.9739 10.8145 10.0902 10.9308C10.2065 11.0471 10.2718 11.2048 10.2718 11.3693C10.2718 11.5338 10.2065 11.6915 10.0902 11.8078C9.9739 11.9241 9.81616 11.9894 9.65169 11.9894C5.34373 11.9894 1.73364 15.2212 1.23462 19.4635C1.21269 19.6245 1.12844 19.7704 0.999994 19.87C0.871549 19.9695 0.70917 20.0146 0.547787 19.9957C0.386404 19.9767 0.238909 19.8952 0.13703 19.7686C0.0351506 19.642 -0.0129735 19.4805 0.00300875 19.3188C0.575199 14.4535 4.71283 10.7491 9.65169 10.7491Z"
      fill="#333333"
    />
    <Path
      d="M18.954 15.297C19.1133 15.2971 19.2664 15.3584 19.3816 15.4683C19.4969 15.5782 19.5655 15.7283 19.5731 15.8873C19.5808 16.0464 19.5269 16.2023 19.4228 16.3228C19.3186 16.4433 19.172 16.519 19.0135 16.5344L18.954 16.5373H12.3391C12.1798 16.5372 12.0267 16.4759 11.9114 16.366C11.7962 16.2561 11.7276 16.106 11.72 15.9469C11.7123 15.7879 11.7661 15.6319 11.8703 15.5115C11.9745 15.391 12.121 15.3153 12.2795 15.2999L12.3391 15.297H18.954Z"
      fill="#0077FF"
    />
    <Path
      d="M16.2665 19.2245C16.2665 19.3838 16.2051 19.5369 16.0952 19.6522C15.9853 19.7674 15.8353 19.836 15.6762 19.8436C15.5171 19.8513 15.3612 19.7974 15.2407 19.6933C15.1203 19.5891 15.0445 19.4426 15.0291 19.284L15.0262 19.2245V12.6096C15.0263 12.4503 15.0877 12.2972 15.1976 12.1819C15.3075 12.0667 15.4575 11.9981 15.6166 11.9905C15.7757 11.9828 15.9316 12.0366 16.0521 12.1408C16.1725 12.245 16.2483 12.3915 16.2636 12.5501L16.2665 12.6096V19.2245V19.2245Z"
      fill="#0077FF"
    />
  </Svg>
));
