import { User } from "@/api/mockApi";
import { mockApi } from "@/api/mockApi";
import { useQuery } from "@tanstack/react-query";

/**
 * TEST CASE
 *
 * 1. useSuspenseQuery
 *
 * 2. React 에서 테스트
 *
 * 3. App router에서 RSC 구현
 */

function List() {
  const { data } = useQuery<User[]>({
    queryFn: () => mockApi(),
    queryKey: ["key"],
    suspense: true,
  });

  return (
    <ul>
      {data!.map(({ name, phone }) => (
        <li key={name}>
          <p>name: {name}</p>
          <p>phone: {phone}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
