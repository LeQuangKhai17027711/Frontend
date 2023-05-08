import { gql } from '@apollo/client'

// //Get all Appointment
export const getAllAppointment = gql`
query Appointments {
  appointments {
    appointments {
      check
      email
      idApp
      name
      note
      phone
      product
      time
    }
    errCode
    errMessage
  }
}
  `

//Get Service
export const getAppointment = gql`
query Appointment($idApp: String!) {
  appointment(idApp: $idApp) {
    appointment {
      check
      email
      idApp
      name
      note
      phone
      product
      time
    }
    errCode
    errMessage
  }
}
`

//Add Appointment
export const addNewAppointment = gql`
mutation Mutation($idApp: String!, $name: String, $email: String, $phone: String, $product: String, $time: String, $note: String, $check: Boolean) {
  createAppointment(idApp: $idApp, name: $name, email: $email, phone: $phone, product: $product, time: $time, note: $note, check: $check) {
    errCode
    errMessage
  }
}
`
//Update Appointment
export const updateAppointment = gql`
mutation Mutation($idApp: String!, $name: String, $email: String, $phone: String, $product: String, $time: String, $note: String, $check: Boolean) {
  updateAppointment(idApp: $idApp, name: $name, email: $email, phone: $phone, product: $product, time: $time, note: $note, check: $check) {
    errCode
    errMessage
  }
}
`

// //Delete Appointment
export const deleteAppointment = gql`
mutation DeleteAppointment($idApp: String!) {
  deleteAppointment(idApp: $idApp) {
    errCode
    errMessage
  }
}
`
