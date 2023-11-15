export type ButtonProps = {
  $width: number;
  $height: number;
  $color: string;
  $borderColor: string;
  $backgroundColor: string;
  text?: string;
  hasBorder?: boolean;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
