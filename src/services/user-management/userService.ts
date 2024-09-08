import { addDoc, collection, limit, onSnapshot, orderBy, query, QuerySnapshot, DocumentData, QueryDocumentSnapshot, getDocs, doc, setDoc, where } from "firebase/firestore";
import { UserList, UserRequest } from "../../models/user-management/userModel";
import { FIREBASE_DB } from "../../utils/constants/firebase";
import { UserState } from "../../enums/user-management/userState.enum";


const saveUser = async (user: UserRequest) => {

    const newUser = doc(collection(FIREBASE_DB, 'persona'));
    //agrego el id 
    user.uid = newUser.id;

    await setDoc(newUser, user);

}

const getAllUsers = (callback: (users: UserList[]) => void) => {

    const usersQuery = query(
        collection(FIREBASE_DB, 'persona'),
        where('estado', '==', UserState.ENABLED),
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

const disabledUser = async (userUid: string) => {

    await setDoc(doc(FIREBASE_DB, 'persona', userUid),
        {
            estado: UserState.DISABLED
        }, {
            merge: true
    });

}

export default {
    saveUser,
    getAllUsers,
    disabledUser,
}