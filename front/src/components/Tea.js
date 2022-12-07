const CupOfTea = ({CupOfTea}) => {

    const {title, desc, category, prix, date} = CupOfTea;
    
    return(
        <tr>
            <td>{title}</td>
            <td>{desc}</td>
            <td>{category}</td>
            <td>{prix}</td>
            <td>{date}</td>
        </tr>
    )
}


export default CupOfTea;