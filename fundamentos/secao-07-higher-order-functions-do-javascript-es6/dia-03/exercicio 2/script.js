//🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult = 20;
const countA = () => {
  const letters = names.join('').toLowerCase().split('');
  const count = () => {
    return letters.reduce((acc, currValue) => {
      return currValue === 'a' ? acc += 1 : acc;
    })
  }
}
