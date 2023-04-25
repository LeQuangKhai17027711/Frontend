import { gql } from '@apollo/client'

// //Get all Appointment
export const getAllAppointment = gql`
query Appointments {
    appointments {
      appointments {
        email
        idApp
        name
        note
        phone
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
        email
        idApp
        name
        note
        phone
        time
      }
      errCode
      errMessage
    }
  }
`

//Add Appointment
export const addNewAppointment = gql`
mutation Mutation($idApp: String!, $name: String, $email: String, $phone: String, $time: String, $note: String) {
    createAppointment(idApp: $idApp, name: $name, email: $email, phone: $phone, time: $time, note: $note) {
      errCode
      errMessage
    }
  }
`
//Update Appointment
export const updateAppointment = gql`
mutation UpdateAppointment($idApp: String!, $name: String, $email: String, $phone: String, $time: String, $note: String) {
    updateAppointment(idApp: $idApp, name: $name, email: $email, phone: $phone, time: $time, note: $note) {
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
