export const contact = () => {
    content.textContent = ''
    const address = document.createElement('div');
    const addressTopic = document.createElement('h3');
    const addressDetails = document.createElement('p');
    addressTopic.textContent = 'Company Address';
    addressDetails.textContent = '#StreetNumber, City, State'

    address.append(addressTopic, addressDetails);
    content.append(address);
}