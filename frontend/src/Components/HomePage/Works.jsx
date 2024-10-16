import "./styles/works.css"
const Works = (props) =>{
    const {title, description, date, name} = props
    const descriptionItems = description.split("\n").filter(Boolean)

    return(
        <div className="homepage-work">
            <div className="homepage-work-content">
                <div className="homepage-work-date">
                    |&nbsp;&nbsp;&nbsp;{date}
                </div>
                <div className="homepage-work-name">{name}</div>
                <div className="homepage-work-title">{title}</div>
                <div className="homepage-work-description">
                    <ul>
                        {descriptionItems.map((item, index)=>(
                            <li key={index} dangerouslySetInnerHTML={{__html: item}}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Works