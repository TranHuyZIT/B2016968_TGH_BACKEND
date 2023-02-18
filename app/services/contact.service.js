const { ObjectId } = require("mongodb");
class ContactService {
  constructor(client) {
    this.Contact = client.db().collection("contacts");
  }
  extractData(payload) {
    const contact = {
      name: payload.name,
      email: payload.email,
      address: payload.address,
      phone: payload.phone,
      favourite: payload.favourite,
    };
    Object.keys(contact).forEach(
      (key) => contact[key] === undefined && delete contact[key]
    );
    return contact;
  }
  async create(payload) {
    const contact = this.extractData(payload);
    const result = await this.Contact.findOneAndUpdate(
      payload,
      { $set: { favorite: contact.favourite === true } },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }
}

module.exports = ContactService;
