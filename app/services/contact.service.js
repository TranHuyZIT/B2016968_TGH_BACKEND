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
  async find(filter) {
    const cursor = await this.Contact.find(filter);
    return await cursor.toArray();
  }
  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }
  async findById(id) {
    return await this.Contact.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async update(id, payload) {
    const filter = { _id: ObjectId.isValid(id) ? new ObjectId(id) : null };
    const newContact = this.extractData(payload);
    const result = await this.Contact.findOneAndUpdate(
      filter,
      { $set: newContact },
      { returnDocument: "after" }
    );
    return result;
  }
}

module.exports = ContactService;
