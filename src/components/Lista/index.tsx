// @flow
import Link from 'next/link'
import { useState } from 'react'

type Resam = {
  id: string
  title:string
  code: string
  description: string
  note: string
  entry: string
}
interface ListaProps {
  color?: 'bg-green-500' | 'bg-yellow-500' | 'bg-orange-500' | 'bg-red-500'
  list?: Resam
}
export default function Lista(props: ListaProps) {
  const [display, setDisplay] = useState(true)
  return (
    <div className="flex  rounded mb-1 ">
      <Link
        href={`/view-infracao/${props.list?.id}`}
        className={`p-3 ${
          props.color ?? 'bg-green-500'
        } w-28 flex justify-center items-center rounded-s 
        text-xl font-bold text-gray-800 dark:text-gray-200
        `}
      >
        <div>{props.list?.code}</div>
      </Link>

      <div
        className={`flex flex-col gap-1 w-full border border-gray-500 dark:border-gray-200 p-1 rounded-e`}
      >
        <h1 className={`uppercase font-bold text-gray-800 dark:text-gray-200`}>
         {props.list?.title}
        </h1>
        <div className="">
          <span>Entrada:</span>
          <span className="uppercase ml-2 bg-indigo-500 px-1 text-xs rounded-full">
            {props.list?.entry}
          </span>
        </div>
        <button
          onClick={() => setDisplay(!display)}
          className={`bg-purple-500  w-[100%] cursor-pointer`}
        >
          Descrição
        </button>
        <p className={`${display ? 'hidden' : 'block'} w-[100] text-justify`}>
          {props.list?.description}
        </p>
      </div>
    </div>
  )
}
