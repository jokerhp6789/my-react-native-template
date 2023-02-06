import React from 'react';
import IcoMoon, {iconList, IconProps} from 'react-icomoon';
import {Svg, Path} from 'react-native-svg';
import iconSet from './collection/bootstrap.json';
import iconSetElegant from './collection/elegant.json';

const list = iconList(iconSet);

export interface IIconProps extends Omit<IconProps, 'icon'> {
  icon: string;
}

const Icon: React.FC<IIconProps> = ({icon, ...props}) => {
  return (
    <IcoMoon
      native
      SvgComponent={Svg}
      PathComponent={Path}
      iconSet={iconSet}
      {...props}
      icon={icon}
    />
  );
};

export default Icon;
