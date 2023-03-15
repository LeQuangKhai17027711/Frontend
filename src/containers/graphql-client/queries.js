import { gql } from '@apollo/client'

//Login
export const loginUser = gql`
query Query($email: String!, $passWord: String!) {
  login(email: $email, passWord: $passWord) {
    errCode
    errMessage
    user {
      email
      roleId
    }
  }
}
`

// //Get all user
export const getAllUser = gql`
query Users {
  users {
    errCode
    errMessage
    users {
      email
      firstName
      lastName
      address
      phoneNumber
      gender
      image
      positionId
      roleId
    }
  }
}
  `

//Get user
export const getUser =
  gql`
query User($email: String!) {
  user(email: $email) {
    errCode
    errMessage
    user {
      email
      firstName
      lastName
      address
      phoneNumber
      gender
      image
      roleId
      positionId
    }
  }
}
`

// //Add user
export const addNewUser = gql`
mutation CreateUser($email: String!, $passWord: String, $firstName: String, $lastName: String, $address: String, $gender: Boolean, $image: String, $roleId: String, $phoneNumber: String, $positionId: String) {
  createUser(email: $email, passWord: $passWord, firstName: $firstName, lastName: $lastName, address: $address, gender: $gender, image: $image, roleId: $roleId, phoneNumber: $phoneNumber, positionId: $positionId) {
    errCode
    errMessage
  }
}
`

// //Delete user
export const deleteUser = gql`
mutation DeleteUser($email: String!) {
  deleteUser(email: $email) {
    errCode
    errMessage
  }
}
`
