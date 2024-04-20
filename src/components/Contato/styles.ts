import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #eefaa8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};

  &:hover {
    background-color: ${variaveis.vermelhoClaro};
  }
`

export const Input = styled.input`
  color: black;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  background-color: transparent;

  &:focus {
    outline: none;
    border-color: black;
  }
`
