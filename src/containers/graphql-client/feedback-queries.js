import { gql } from '@apollo/client'

// //Get all Feedback
export const getAllFeedback = gql`
query Query {
    feedbacks {
      errCode
      errMessage
      feedbacks {
        descript
        idFb
        image
        title
      }
    }
  }
  `

//Get Feedback
export const getFeedback = gql`
query Feedback($idFb: String!) {
    feedback(idFb: $idFb) {
      errCode
      errMessage
      feedback {
        descript
        idFb
        image
        title
      }
    }
  }
`

//Add Feedback
export const addNewFeedback = gql`
mutation Mutation($idFb: String!, $title: String, $image: String, $descript: String) {
    createFeedback(idFb: $idFb, title: $title, image: $image, descript: $descript) {
      errCode
      errMessage
    }
  }
`
//Update Feedback
export const updateFeedback = gql`
mutation UpdateFeedback($idFb: String!, $title: String, $image: String, $descript: String) {
    updateFeedback(idFb: $idFb, title: $title, image: $image, descript: $descript) {
      errCode
      errMessage
    }
  }
`

// //Delete Feedback
export const deleteFeedback = gql`
mutation DeleteFeedback($idFb: String!) {
    deleteFeedback(idFb: $idFb) {
      errCode
      errMessage
    }
  }
`
