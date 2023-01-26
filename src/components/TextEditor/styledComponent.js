import styled from 'styled-components'

export const BoldBtn = styled.button`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`

export const ItalicBtn = styled(BoldBtn)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const UnderlineBtn = styled(BoldBtn)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.activeBold ? 'bold' : 'normal')};
  font-style: ${props => (props.activeItalic ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.activeUnderline === true ? 'underline' : 'normal'};
`
