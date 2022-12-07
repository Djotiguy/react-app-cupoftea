import Table from 'react-bootstrap/Table';
import CupOfTea from './CupOfTea';

const CupOfTeas = ({cupOfTeas}) => {
    return(
        <Table striped bordered hover style={{ width:'50%', margin:"20px auto 50px"}}>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Prix</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {cupOfTeas.map((cupOfTea,i) => <CupOfTea  cupOfTea={cupOfTea} key={i} />)}
            </tbody>
        </Table>
    )
}

export default CupOfTeas;