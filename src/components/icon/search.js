import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../theme';

const Search = ({variant, sizeIcon}) => {
  const size = {
    sm: 20,
    md: 50,
    lg: 75,
  };
  return (
    <Svg
      width={size[sizeIcon]}
      height={size[sizeIcon]}
      viewBox="0 0 16.675 16.673"
      fill={COLORS.white}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.391,14.965l-2.906-2.906A7.509,7.509,0,0,0,6.76.039a7.509,7.509,0,1,0,5.3,13.446l2.9,2.9,0,0a1.008,1.008,0,0,0,1.426-1.426M13,7.521A5.481,5.481,0,1,1,7.521,2.041,5.5,5.5,0,0,1,13,7.521"
        transform="translate(0 0)"
        fill="#fff"
      />
    </Svg>
  );
};
Search.defaultProps = {
  sizeIcon: 'sm',
};
export default Search;
