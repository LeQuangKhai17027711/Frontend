import { gql } from '@apollo/client'



// //Get all user
export const getAllUser = gql`
query User {
  users {
    users {
      address
      email
      firstName
      gender
      lastName
      phoneNumber
      role
    }
    errCode
    errMessage
  }
}
  `

//Get user
export const getUser = gql`
  query Query($email: String!) {
    user(email: $email) {
      accessToken
      errCode
      errMessage
      user {
        address
        email
        firstName
        gender
        lastName
        phoneNumber
        role
      }
    }
  }
`

//Login
export const loginUser = gql`
mutation Login($email: String!, $passWord: String!, $role: String!) {
  login(email: $email, passWord: $passWord, role: $role) {
    accessToken
    errCode
    errMessage
    user {
      address
      email
      firstName
      gender
      lastName
      phoneNumber
      role
    }
  }
}
`

export const registerUser = gql`
mutation Register($email: String!, $passWord: String, $firstName: String, $lastName: String, $address: String, $gender: Boolean, $role: Role, $phoneNumber: String) {
  register(email: $email, passWord: $passWord, firstName: $firstName, lastName: $lastName, address: $address, gender: $gender, role: $role, phoneNumber: $phoneNumber) {
    errCode
    errMessage
  }
}
`

//Add user
export const addNewUser = gql`
mutation Mutation($email: String!, $passWord: String, $firstName: String, $lastName: String, $address: String, $gender: Boolean, $role: Role, $phoneNumber: String) {
  createUser(email: $email, passWord: $passWord, firstName: $firstName, lastName: $lastName, address: $address, gender: $gender, role: $role, phoneNumber: $phoneNumber) {
    errCode
    errMessage
  }
}
`
//Update user
export const updateUser = gql`
mutation UpdateUser($email: String!, $passWord: String, $firstName: String, $lastName: String, $address: String, $gender: Boolean, $role: Role, $phoneNumber: String) {
  updateUser(email: $email, passWord: $passWord, firstName: $firstName, lastName: $lastName, address: $address, gender: $gender, role: $role, phoneNumber: $phoneNumber) {
    errCode
    errMessage
  }
}
`

// //Delete user
export const deleteUser = gql`
mutation DeleteService($idSer: String!) {
  deleteService(idSer: $idSer) {
    errCode
    errMessage
  }
}
`
