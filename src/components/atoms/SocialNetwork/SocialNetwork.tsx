import { TypographyProps } from '@mui/material';
import React from 'react'
import { SocialNetworkStyled } from './SocialNetwork.styled'

type SocialNetworkProps = TypographyProps;
export const SocialNetwork: React.FC<SocialNetworkProps> = (props) => <SocialNetworkStyled {...props}/>
