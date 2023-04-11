import { dataDummy } from '../../../src/data/dataDummy';
import { getHeaders } from '../../../src/utils/utiles';

describe('getHeaders', () => {
  it('It should return an array with the data headers correctly.', () => {
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
    const line = dataDummy[0];
    const headers = getHeaders(line);
    expect(headers).toEqual(correctHeaders);
  });
});

export { };
