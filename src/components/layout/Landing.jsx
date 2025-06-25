function Landing({ psearchName, psetSearchName, pcities, pfilterLocation, psetFilterLocation, pcontactsList }) {
    return (
        <>
            <Filters psearchName={psearchName} psetSearchName={psetSearchName} pcities={pcities} pfilterLocation={pfilterLocation} psetFilterLocation={psetFilterLocation} />
            <ListContacts pcontactsList={pfilteredList} />
        </>
    )

}
export default Landing; 