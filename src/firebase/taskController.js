//Fichero donde almacena toda la lógica de DB(CRUD)
import { db } from "./index";
import { collection, addDoc, setDoc, getDocs, doc, deleteDoc } from "firebase/firestore"; 


export const addNewTask = async task => {
    await addDoc(collection(db, 'tasks'), task);
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    //console.log(querySnapshot);
    // querySnapshot.forEach(doc => {
    //     console.log(doc.id, ' => ', doc.data())
    // })

    const tasks = querySnapshot.docs.map(doc => {
        return{ ...doc.data(), id: doc.id }
    })
    //console.log(tasks);
    return tasks;
};

export const updateTask = async (task) => {
    await setDoc(doc(db, 'tasks', task.id), {
        title: task.title,
        description: task.description
    });
}

export const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id))
}