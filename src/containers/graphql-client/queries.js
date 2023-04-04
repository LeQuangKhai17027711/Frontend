import { gql } from '@apollo/client'



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
      position
      role
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
      role
      position
    }
  }
}
`

//Login
export const loginUser = gql`
mutation Mutation($email: String!, $passWord: String!) {
  login(email: $email, passWord: $passWord) {
    accessToken
    errCode
    errMessage
    user {
      lastName
      role
      position
      phoneNumber
      image
      gender
      firstName
      email
      address
    }
  }
}
`

//Add user
export const addNewUser = gql`
mutation Mutation($email: String!, $passWord: String, $firstName: String, $lastName: String, $address: String, $gender: Boolean, $image: String, $role: Role, $phoneNumber: String, $position: Position) {
  createUser(email: $email, passWord: $passWord, firstName: $firstName, lastName: $lastName, address: $address, gender: $gender, image: $image, role: $role, phoneNumber: $phoneNumber, position: $position) {
    errCode
    errMessage
  }
}
`
//Update user
export const updateUser = gql`
mutation UpdateUser($email: String!, $passWord: String, $firstName: String, $lastName: String, $address: String, $gender: Boolean, $image: String, $role: Role, $phoneNumber: String, $position: Position) {
  updateUser(email: $email, passWord: $passWord, firstName: $firstName, lastName: $lastName, address: $address, gender: $gender, image: $image, role: $role, phoneNumber: $phoneNumber, position: $position) {
    errCode
    errMessage
  }
}
`

// //Delete user
export const deleteUser = gql`
mutation Mutation($email: String!) {
  deleteUser(email: $email) {
    errCode
    errMessage
  }
}
`
