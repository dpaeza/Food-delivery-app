import { collection, getDoc, query, where } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";

const initialData = {
    key: '',
    value: null,
    collectionName: ''
}

export const filterCollection = async (data=initialData) => {
    const collectionName = data.collectionName;
    const collections = collection(dataBase, collectionName);
    const dataArray = [];
    try {
        const q = data.key ? query(collections, where(data.key, '===', data.value)) : collections;
        const refDocs = await getDoc(q);
        refDocs.forEach( doc => {
            dataArray.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return dataArray
    } catch (error) {
        console.log(error);
        return []
    }
}