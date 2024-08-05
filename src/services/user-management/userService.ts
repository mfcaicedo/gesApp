import { addDoc, collection } from "firebase/firestore";
import { UserRequest } from "../../models/user-management/userModel";
import { FIREBASE_DB } from "../../utils/constants/firebase";


const saveUser = async (user: UserRequest) => {
    console.log('User saved', user);
    const docRef = await addDoc(collection(FIREBASE_DB, 'persona'),user);
    console.log('User saved', docRef.id);
}

export default{
    saveUser
}