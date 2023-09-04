import Layout from '@/components/template/Layout'
import { prisma } from '../prisma'
import Lista from '@/components/Lista'
import { setColor } from '@/functions'
import { allResam } from '@/prisma/service/resam'
import useResam from '@/data/hook/useResam'
import { useEffect, useState } from 'react'
import { IResam } from '@/Interface'
import Input from '@/components/Input'

export default function Home(props: any) {
  const [resam, setResam] = useState<IResam[]>()
  const [search, setSearch] = useState<any>('')
  const resamFind: any = useResam()

  useEffect(() => {
    resamFind.search({ description: search }).then((r: any) => setResam(r))
  }, [search])

  return (
    <div
      className={`
    
    `}
    >
      <Layout titulo="Resam" subtitulo="Todos os enquadramentos">
        <Input
          placeholder="Faça sua pesquisa"
          value={search}
          onChange={setSearch}
        />
        {resam?.map((infracao: any) => (
          <Lista
            key={infracao.id}
            color={setColor(infracao.code)}
            list={infracao}
          />
        ))}
      </Layout>
    </div>
  )
}
