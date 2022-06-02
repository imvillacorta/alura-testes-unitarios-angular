import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    //startsWith busca no inicio da string
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  should not generate duplicate IDs`, () => {
    //SET, gera valores q não podem se repetir
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} 
  should return the number of generateIds when called`, () => {

    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should thewo when called with empty`, () => {
    const emptyValues = [null, undefined, ''];

    emptyValues.forEach(emptyValues => {
      // USAR ()=> QUANDO FOR TESTAR EXCEPTIONS 
      expect(() => service.generateUniqueIdWithPrefix(emptyValues)).toThrow();
    });
  });

});
