import { gql } from "@apollo/client";
import { getClient } from "./ApolloClient";
import Link from "next/link";
import User from "./User"; 

// Only available when `User` is a Server Component
console.log(User.fragments.user);

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const userQuery = gql`
  query {
    getUser(id: "1") {
      ...User_user
    }
  }
  ${User.fragments.user}
`;

export default async function Home() {
  const { data } = await getClient().query({ query: userQuery });

  return (
    <div>
      <User user={data.getUser} />
      <p>
        <Link href="/ssr">SSR examples are here</Link>
      </p>
    </div>
  );
}
