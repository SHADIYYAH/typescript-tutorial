import  {ReactNode} from "react"


type SectionProps ={
    title?: string ,
    children : ReactNode
}
export const Section  = ({ children , title= "Typescript journey"}: SectionProps) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}