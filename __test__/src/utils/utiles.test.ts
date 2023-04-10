import dataDummy from '../../../src/data/dataDummy';
import { getHeaders } from '../../../src/utils/utiles';

describe('getHeaders', () => {
  const correctHeaders = [
    'Mes',
    'Nombre',
    'ID',
    'Fecha de ingreso',
    'Sueldo bruto',
    'División',
    'Area',
    'Subarea',
    'ID Lider',
    'Nivel Jerárquico',
  ];

  const wrongHeaders = [
    'Mes',
    'Nombre',
    'ID',
    'Fecha de ingreso',
    'Sueldo bruto',
    'División',
    'Area',
    'Subarea',
  ];

  it('It should return an array with the data headers correctly.', () => {
    const line = dataDummy[0];
    const headers = getHeaders(line);
    expect(headers).toEqual(correctHeaders);
  });
  it('It should return an array with the data headers wrong.', () => {
    const line = dataDummy[0];
    const headers = getHeaders(line);
    expect(headers).not.toEqual(wrongHeaders);
  });
});

export {};
