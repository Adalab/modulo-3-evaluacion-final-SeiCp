import { useParams } from "react-router";

function DetailContact({ pcontactsList }) {

    const params = useParams();
    const name = params.name;

    //const {name} = useParams(); 
    const contact = pcontactsList.find(item => item.name === name)
    return (
        <>
            <h2>Detalle de un componente</h2>
            <p>{contact.name}</p>
            <p>{contact.lastname}</p>
            <p>{contact.location}</p>
        </>
    )

}
export default DetailContact;  