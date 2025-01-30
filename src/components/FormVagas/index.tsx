import { type FormEvent, useState, ChangeEvent } from 'react'
import { Forms, BtnForm, CampoDePesquisa } from './styles'

type Props = {
  pesquisar: (termo: string) => void
}

const FormVagas = ({ pesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    pesquisar(termo.toLocaleLowerCase())
  }

  const aoMudarCampo = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Forms as="form" onSubmit={aoEnviarForm}>
      <CampoDePesquisa
        as="input"
        key="campoDePesquisa"
        onChange={aoMudarCampo}
        value={termo}
      />
      <BtnForm>Pesquisar</BtnForm>
    </Forms>
  )
}

export default FormVagas
