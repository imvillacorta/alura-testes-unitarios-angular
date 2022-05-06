import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    let service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id).toContain('app-');
  });
});
