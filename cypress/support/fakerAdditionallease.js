import { faker } from '@faker-js/faker';

export const generateFakeleasedata = () => {
  const area = faker.number.int();
  const designation = faker.person.jobTitle();
  const comments = faker.internet.displayName();
  return {
    area,
    designation,
    comments
  };
};