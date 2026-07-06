import './WarningPopup.css'

export const WarningPopup=({titleWarning,detailsWarning,warning})=>{

    return(
        <div className={`remove-advise ${warning? 'active':''}`}>
            <p>{titleWarning}</p>
            <p><i className="ri-error-warning-line"></i> {detailsWarning}</p>
        </div>
    )
}