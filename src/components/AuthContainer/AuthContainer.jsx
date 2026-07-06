import './AuthContainer.css'

export const AuthContainer = ({children})=>{
    return(
        <div className="authenticate-layout">
            {children}
        </div>
    )
}