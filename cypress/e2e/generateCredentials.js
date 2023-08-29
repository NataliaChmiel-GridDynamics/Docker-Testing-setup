import { faker } from "@faker-js/faker";

export function generateCredentials() {
  const email = faker.internet.email();
  const password = "password";
  return { email, password };
}
