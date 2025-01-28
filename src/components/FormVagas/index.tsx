import { FormEvent, useState } from 'react'
import { Form, BtnForm, CampoDePesquisa } from './styles'

type Props = {
  pesquisar: (termo: string) => void
}

const FormVagas = ({ pesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const enviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    pesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={enviarForm}>
      <CampoDePesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnForm type="submit">Pesquisar</BtnForm>
    </Form>
  )
}

export default FormVagas
