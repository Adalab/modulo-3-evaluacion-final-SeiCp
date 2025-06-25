import ItemContact from "./ItemContact";


function ListContacts({ pcontactsList }) {

    return (
        <>
            <main>
                {/* contact list */}
                <ul className="contact__list">
                    {
                        pcontactsList.map((item, index) =>
                            <ItemContact key={index} pitem={item} />
                        )
                    }
                </ul>
            </main >
        </>
    )

}
export default ListContacts;  