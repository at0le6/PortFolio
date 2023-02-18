import { Title as H1 } from './style';
import { ReturnCommonProps } from '@interfaces/utils';
export const Title = ({
  className = '',
  children,
  size,
  color,
  weight,
  as = 'h1'
}: Pick<ReturnCommonProps, 'className' | 'size' | 'children' | 'color' | 'weight'> & {
  as?: React.ElementType;
}) => {
  return (
    <H1 as={as} className={`${className}`} color={color} size={size} weight={weight}>
      {children}
    </H1>
  );
};
