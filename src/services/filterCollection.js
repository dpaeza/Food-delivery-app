import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";

const initialData = {
    key: '',
    value: null,
    collectionName: ''
}

export const filterCollection = async (data = initialData) => {
    console.log(data);
    const collectionName = data.collectionName;
    const collections = collection(dataBase, collectionName);
    const dataArray = [];
    try {
        const q = data.key ? query(collections, where(data.key, '==', data.value)) : collections;
        const refDocs = await getDocs(q);
        console.log(refDocs);
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