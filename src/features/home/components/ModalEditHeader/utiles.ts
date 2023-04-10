import ObjectGeneric from '../../../../models/ObjectGeneric';

const getInitForm = (headers: string[]) => headers.reduce((acc, el) => {
  acc[el] = el;
  return acc;
}, {} as ObjectGeneric);

const getDataWithNewHeader = (data: any[], form: ObjectGeneric) => data.map((line:any) => {
  const newLine = {} as ObjectGeneric;
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
