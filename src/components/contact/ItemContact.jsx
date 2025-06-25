import { Link } from "react-router";

function ItemContact({ pitem }) {

    return (
        <Link to={"/detail/" + pitem.name}>
            <li className="contact__item">
                <p className="contact__name">
                    <label className="contact__label">
                        Nombre:</label> {pitem.name + " " + pitem.lastname}
                </p>
                <p className="contact__phone">
                    <label className="contact__label">Teléfono:</label>
                    <a href={'tel:' + pitem.phone} title="Pulsa aquí para llamar a">
                        {pitem.phone}
                    </a>
                </p>
                <p className="contact__mail">
                    <label className="contact__label">Email:</label>
                    <a href={`mailto:${pitem.email}`} title="Pulsa aquí para escribir a">
                        {pitem.email}
                    </a>
                </p>
            </li>
        </Link >
    )

}

export default ItemContact; 