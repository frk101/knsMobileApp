import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../theme';

const ArrowLeft = ({variant, sizeIcon}) => {
  const size = {
    sm: 20,
    md: 50,
    lg: 75,
  };
  return (
    <Svg
      width={size[sizeIcon]}
      height={size[sizeIcon]}
      viewBox="0 0 34.72 28.838"
      fill={COLORS.white}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M32.768,53.37l.054.012H9.589l7.3-7.32a1.918,1.918,0,0,0,0-2.7l-1.136-1.137a1.9,1.9,0,0,0-2.683,0L.553,54.746a1.914,1.914,0,0,0,0,2.693l12.52,12.52a1.9,1.9,0,0,0,2.683,0l1.136-1.137a1.881,1.881,0,0,0,.554-1.341,1.824,1.824,0,0,0-.554-1.316L9.507,58.8H32.794a1.968,1.968,0,0,0,1.926-1.948V55.248A1.93,1.93,0,0,0,32.768,53.37Z"
        transform="translate(0 -41.674)"
      />
    </Svg>
  );
};
ArrowLeft.defaultProps = {
  sizeIcon: 'sm',
};
export default ArrowLeft;
