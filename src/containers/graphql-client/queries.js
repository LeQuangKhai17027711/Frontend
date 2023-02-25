import { gql } from '@apollo/client'


export const getAllUser = gql`
query UsersQuery {
    users {
      address
      email
      firstName
      gender
      image
      lastName
      passWord
      phoneNumber
      positionId
      roleId
    }
  }
`



