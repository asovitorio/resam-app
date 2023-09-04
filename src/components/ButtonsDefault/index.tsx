import { setColor } from '@/functions'
import Link from 'next/link'

interface ButtonsProps {
  text: string
  color: string
  url: string
  
}

export default function ButtonDefault(props: ButtonsProps) {
  return (
    <Link
      href={props?.url}
      className={`
     ${props.color}
     px-3 py-1 max-w-3xl rounded-md text-gray-200
    `}
    >
      {props.text}
    </Link>
  )
}
