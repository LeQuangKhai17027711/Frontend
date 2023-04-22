import { gql } from '@apollo/client'

// //Get all Service
export const getAllService = gql`
query Services {
    services {
      errCode
      errMessage
      services {
        descript
        fee
        idSer
        image
        title
        type
      }
    }
  }
  `

//Get Service
export const getService = gql`
query Service($idSer: String!) {
    service(idSer: $idSer) {
      errCode
      errMessage
      service {
        descript
        fee
        idSer
        image
        title
      }
    }
  }
`

//Add Service
export const addNewService = gql`
mutation CreateService($idSer: String!, $title: String, $image: String, $fee: String, $descript: String, $type: Type) {
    createService(idSer: $idSer, title: $title, image: $image, fee: $fee, descript: $descript, type: $type) {
      errCode
      errMessage
    }
  }
`
//Update Service
export const updateService = gql`
mutation UpdateService($idSer: String!, $title: String, $image: String, $fee: String, $descript: String, $type: Type) {
    updateService(idSer: $idSer, title: $title, image: $image, fee: $fee, descript: $descript, type: $type) {
      errCode
      errMessage
    }
  }
`

// //Delete user
export const deleteService = gql`
mutation Mutation($email: String!) {
  deleteUser(email: $email) {
    errCode
    errMessage
  }
}
`
