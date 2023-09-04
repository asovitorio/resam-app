// @flow
import { IResam } from '@/Interface'
import ButtonDefault from '@/components/ButtonsDefault'
import Layout from '@/components/template/Layout'
import useResam from '@/data/hook/useResam'
import { setColor } from '@/functions'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ViewInfracao(props: IResam) {
  const router = useRouter()
  const id = router.query.id
  const [resam, setResam] = useState<IResam>()

  const resamFind: any = useResam()
  useEffect(() => {
    resamFind.byId(String(id)).then((r: any) => setResam(r))
  }, [resam])

  return (
    <Layout titulo="Infração" subtitulo={String(resam?.title)}>
      <div>
        <Link href="/">Voltar</Link>
        <div
          className={`
        flex justify-center items-center
        `}
        >
          <h1
            className={`
        flex justify-center items-center
        w-[6rem] h-[6rem] text-4xl p-3  text-gray-200
        font-bold
        ${setColor(String(resam?.code))} 
        mb-3 rounded-full 
        w- `}
          >
            {resam?.code}
          </h1>
        </div>
        <div>
          <div className={`flex bg-blue-500 justify-center rounded `}>
            Porta de Entrada
          </div>
          <div
            className={`flex w-full justify-around border-b-2 border-blue-500 mb-2`}
          >
            {resam?.entry.split(',').map((entrada, i) => (
              <span key={i}>{entrada.toUpperCase()}</span>
            ))}
          </div>
        </div>
        <div
          className={`flex  flex-col w-full justify-around border-b-2 border-green-500 mb-2`}
        >
          <div className={`flex bg-green-500 justify-center rounded `}>
            Dscrição
          </div>
          <p className="text-justify">{resam?.description}</p>
        </div>
        <div className="flex justify-around">
          <ButtonDefault
            text="EXE"
            color="bg-orange-600"
            url={`/exemplos/${resam?.id}`}
          />
          <ButtonDefault text="AIA" color="bg-red-600" url="#" />
          <ButtonDefault text="DOC" color="bg-blue-600" url="#" />
        </div>
      </div>
    </Layout>
  )
}
