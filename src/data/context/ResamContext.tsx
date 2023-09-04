import { Resam } from '@prisma/client'
import { createContext } from 'react'

type ResamProps = {
  id: string
  title: string
  code: string
  description: string
  note: string
  entry: string
}

const ResamContext = createContext({})

async function byId<ResamProps>(id: string) {
  const resposta = await fetch(`http://localhost:3000/api/busca-resam/${id}`)
  const resam = await resposta.json()
  return resam
}
async function search(search: any) {
  const label = Object.keys(search)[0]
  const value = search[label]

  const resposta = await fetch(
    `http://localhost:3000/api/resam?${label}=${value}`,
  )
  const resam = await resposta.json()
  return resam
}

const resamFind = {
  byId,
  search,
}

export function ResamProvider(props: any) {
  return (
    <ResamContext.Provider value={resamFind}>
      {props.children}
    </ResamContext.Provider>
  )
}

export default ResamContext
