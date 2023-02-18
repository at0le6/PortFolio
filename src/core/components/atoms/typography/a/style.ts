import { ReturnCommonProps } from '@interfaces/utils';
import styled from 'styled-components';
import { getColor } from '@/core/utils/colorFormatChange';

export const StyledLink = styled.span<ReturnCommonProps>`
  transition: all .25s ease-out;
  color: ${props => {
    const isDark = props.theme.mode.current == 'dark';
    if (props.color && !isDark && props.theme.palette[props.color])
      return props.theme.palette[`${getColor({ ColorLigth: props.color }, isDark)}`];
    else if (props.color) return props.color;
    return props.theme.mode.contrastText;
  }};
  background: transparent;
  font-size:${props =>
    props.size && props.theme.size[props.size]
      ? props.theme.size[props.size]
      : props.size
      ? props.size
      : props.theme.size.big}
  text-decoration: none;
  &:hover{
    color:${props => props.theme.palette.accent}
  }
  font-weight: ${props => (!props.weight ? 'bold' : props.weight)};
`;
