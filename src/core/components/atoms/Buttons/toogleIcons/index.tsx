import { ToggleContainer } from './style';
import { IoMdSunny, IoIosMoon } from 'react-icons/io';
import { buttonTypes } from '@interfaces/components/buttons';
import { color } from '@constants/colors';
export const Toggle = ({ onClick }: Pick<buttonTypes, 'onClick'>) => {
  return (
    <ToggleContainer onClick={onClick}>
      <IoMdSunny color={color.extraAccent} />
      <IoIosMoon color={color.blue_ligth} />
    </ToggleContainer>
  );
};
