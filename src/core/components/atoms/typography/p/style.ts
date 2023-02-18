import styled from 'styled-components';
import { device } from '@constants/device';
import { size } from '@constants/size';
import { getColor } from '@/core/utils/colorFormatChange';

export const ParagraphStyle = styled.p`
  color: ${props => {
    const isDark = props.theme.mode.current == 'dark';
    if (props.color && !isDark && props.theme.palette[props.color])
      return props.theme.palette[`${getColor({ ColorLigth: props.color }, isDark)}`];
    else if (props.color) return props.color;
    return props.theme.mode.contrastText;
  }};
  @media ${device.desktop} {
    font-size: ${size.small};
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
  @media ${device.mobile} {
    font-size: 0.875rem;
  }
`;
