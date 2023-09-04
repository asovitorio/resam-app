import { useEffect, useState } from 'react'
import Layout from '@/components/template/Layout'
import useResam from '@/data/hook/useResam'
import { useRouter } from 'next/router'

interface Exemplo {
  id: string
  description: string
}
interface ResamProps {
  id: string
  title: string
  code: string
  description: string
  note: string
  entry: string
  Exemplo: Exemplo[]
}
export default function Exemplos() {
  const router = useRouter()
  const id = router.query.id
  const [resam, setResam] = useState<ResamProps>()

  const resamFind: any = useResam()

  useEffect(() => {
    resamFind.byId(String(id)).then((r: any) => setResam(r))
  }, [])

  return (
    <Layout titulo="Exemplos" subtitulo={String(resam?.title)}>
      <div>
        <h1>Nota</h1>
        <p>{resam?.note}</p>
      </div>
      <div>
        {resam?.Exemplo.map((exemplo, i) => (
          <p
            key={exemplo.id}
            className={`${i % 2 == 0 ? 'bg-gray-400' : ''}
          
        `}
          >
            ➡ {exemplo.description}
          </p>
        ))}
      </div>
    </Layout>
  )
}
