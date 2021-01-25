import { useContext } from 'react';
import { LeadsContext } from '../App';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@material-ui/core';


export function Lead() {
    const { leads } = useContext(LeadsContext),
        { id } = useParams(),
        lead = leads.find(item => item.id === Number(id));

    return <div>
        <div>
            Заявка {lead?.title}
        </div>
    </div>
}

function Leads() {
    const { leads } = useContext(LeadsContext);

    return <div>
        {leads.map( ({ id, title, status, phone }) => <div key={id}>
            <Card>
                <Link to={`/leads/${id}`}>
                    <div>id: {id} - {title} ({status})</div>
                    <div>{phone}</div>
                </Link>
            </Card>
        </div>)}
    </div>;
};

export default Leads;
