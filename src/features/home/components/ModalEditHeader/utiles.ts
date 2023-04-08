import { Form } from './types';

const getInitForm = (headers: string[]) => headers.reduce((acc, el) => {
  acc[el] = el;
  return acc;
}, {} as Form);

const getDataWithNewHeader = (data: any[], form: Form) => data.map((line:any) => {
  const newLine = {} as Form;
  Object.keys(line).forEach((label:string) => {
    if (label !== form[label]) {
      newLine[form[label]] = line[label];
    } else {
      newLine[label] = line[label];
    }
  });
  return newLine;
});

export { getInitForm, getDataWithNewHeader };
