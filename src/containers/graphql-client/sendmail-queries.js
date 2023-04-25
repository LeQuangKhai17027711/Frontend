import { gql } from '@apollo/client'


export const sendMail = gql`
mutation Mutation($nameFrom: String!, $nameTo: String, $emailFrom: String, $emailTo: String, $phoneFrom: String, $time: String, $content: String) {
    sendMail(nameFrom: $nameFrom, nameTo: $nameTo, emailFrom: $emailFrom, emailTo: $emailTo, phoneFrom: $phoneFrom, time: $time, content: $content) {
      errCode
      errMessage
    }
  }
`
