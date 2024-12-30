export interface User {
  name: string;
  phone: string;
}

export const mockApi = async (options?: unknown): Promise<User[]> => {
  console.log(`==== mockApi ====`);
  console.log(`==== ${options} ====`);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result: User[] = await response.json();
  return result;
};
