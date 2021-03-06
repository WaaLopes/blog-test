import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, author, description, position },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          author
          description
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper className="Profile-wrapper">
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
