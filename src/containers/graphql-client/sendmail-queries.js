import { gql } from '@apollo/client'


export const sendMail = gql`
mutation SendMail($idApp: String!, $nameFrom: String!, $nameTo: String, $emailFrom: String, $emailTo: String, $phoneFrom: String, $time: String, $content: String) {
  sendMail(idApp: $idApp, nameFrom: $nameFrom, nameTo: $nameTo, emailFrom: $emailFrom, emailTo: $emailTo, phoneFrom: $phoneFrom, time: $time, content: $content) {
    errCode
    errMessage
    idApp
  }
}
`
