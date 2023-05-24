// Turning this component into a Client Component causes the reference in the
// owner component to be changed into a lazy reference where the static fragment
// is not available.

// 'use client';

import { gql } from "@apollo/client";

type Props = {
  user: {
    id: string;
    name: string;
  }
}

export default function User({user}: Props) {
  return <p>Received from RSC render: {JSON.stringify(user)}</p>
}

User.fragments = {
  user: gql`
    fragment User_user on User {
      id
      name
    }
  `
}
