interface Props {
  visible: boolean,
  setVisible: (value: boolean) => void,
  data: any[],
  setData: (value: any[]) => void,
}

interface Form {
  [key: string]: string;
}

interface FooterProps {
  onSave: () => void;
  onCancel: () => void;
}

export { type Props, type Form, type FooterProps };
