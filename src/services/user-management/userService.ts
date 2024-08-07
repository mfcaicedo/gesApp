import { addDoc, collection, limit, onSnapshot, orderBy, query, QuerySnapshot, DocumentData, QueryDocumentSnapshot, getDocs, doc, setDoc } from "firebase/firestore";
import { UserList, UserRequest } from "../../models/user-management/userModel";
import { FIREBASE_DB } from "../../utils/constants/firebase";


const saveUser = async (user: UserRequest) => {
    
    const newUser = doc(collection(FIREBASE_DB, 'persona'));
    //agrego el id 
    user.uid = newUser.id;

    await setDoc(newUser, user);
    
}

const getAllUsers = (callback: (users: UserList[]) => void) => {
    
    const usersQuery = query(
        collection(FIREBASE_DB, 'persona'),
        orderBy('nombre', 'asc'),
        limit(10)
    );

    const unsubscribe = onSnapshot(usersQuery, (snapshot: QuerySnapshot<DocumentData>) => {
        const users: UserList[] = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => doc.data() as UserList);
        callback(users);
    }, (error) => {
        console.error("Error getting users: ", error);
    });

    // Devuelve la función para cancelar la suscripción a los cambios
    return unsubscribe;
}

export default {
    saveUser,
    getAllUsers,
}