import mongoose from "mongoose"

const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@usermanagement.emwsmhe.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database Connected Successfully');
    } catch (err) {
        console.log('Error while connecting with Database', err);
    }
}

export default Connection