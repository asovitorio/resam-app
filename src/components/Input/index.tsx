import { Serach } from "../Icons";

interface InputProps {
   
    placeholder?: string
    onChange?: (value: any) => void
    value: any
  }

export default function Input(props:InputProps) {
    return(
        <div className={`
           flex justify-end m-3
        `}>
            <div className={`
            bg-white w-10 rounded-s-full  flex justify-center items-center
            `}><Serach /></div>
            <div className={`
            
            `}>
               <input className={`
                p-2 text-gray-700 rounded-e-full focus:outline-none
            `} 
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange?.(e.target.value)}
            /> 
            </div>
        </div>
    )
}