import styled from 'styled-components';
import { ReturnCommonProps } from '@interfaces/utils';
import { getColor } from '@/core/utils/colorFormatChange';
import { motion } from 'framer-motion';

export const Title = styled.h2<ReturnCommonProps>`
  color: ${props => {
    const isDark = props.theme.mode.current == 'dark';
    if (props.color && !isDark && props.theme.palette[props.color])
      return props.theme.palette[`${getColor({ ColorLigth: props.color }, isDark)}`];
    else if (props.color) return props.color;
    return props.theme.mode.contrastText;
  }};
  font-weight: ${props => (!props.weight ? '900' : props.weight)};
  font-size: ${props =>
    props.size && props.theme.size[props.size]
      ? props.theme.size[props.size]
      : props.size
      ? props.size
      : props.theme.size.huge};
  letter-spacing: 2px;
`;
