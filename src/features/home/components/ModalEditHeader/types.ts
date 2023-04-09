interface Props {
  visible: boolean,
  setVisible: (value: boolean) => void,
  data: any[],
  setData: (value: any[]) => void,
}

interface Form {
  [key: string]: string;
}
export { type Props, type Form };
