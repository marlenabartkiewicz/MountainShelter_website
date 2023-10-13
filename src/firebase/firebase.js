import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    query,
    where,
    Timestamp,
    orderBy,
} from "firebase/firestore";

class Firebase {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.collections = {
            shelters: "shelters",
            ranks: "shelters-ranks",
            comments: "shelters-comments",
        };
    }

    getSingleShelterData = async (shelterID) => {
        console.log('[firebase] Call: <getSingleShelter>')
        const docSnap = await getDoc(
            doc(this.db, this.collections.shelters, shelterID),
        );
        if (docSnap.exists()) {
            return docSnap.data();
        }
        return {}
    };

    getAllSheltersData = async () => {
        console.log('[firebase] Call: <getAllShelters>')
        const allSheltersData = {};
        const docsSnap = await getDocs(collection(this.db, this.collections.shelters));
        docsSnap.docs.forEach(
            (doc) => (allSheltersData[doc.id] = doc.data()),
        );
        return allSheltersData;
    };

    getShelterRanks = async (shelterID) => {
        console.log('[firebase] Call: <getShelterRank> ')
        const shelterRanks = [];
        const ranksQuery = query(collection(this.db, this.collections.ranks), where("shelterID", "==", shelterID));
        const querySnapshot = await getDocs(ranksQuery);
        querySnapshot.forEach((doc) => {
            shelterRanks.push(doc.data().rank)
        })
        return shelterRanks
    };

    addShelterRank = async (shelterID, rank) => {
        console.log('[firebase] Call: <addShelterRank>')
        await addDoc(collection(this.db, this.collections.ranks), {
            shelterID: shelterID,
            rank: rank
        });
    };

    getShelterComments = async (shelterID) => {
        console.log('[firebase] Call: <getShelterComments>')
        const shelterComments = {};
        const commentsQuery = query(collection(this.db, this.collections.comments), where("shelterID", "==", shelterID), orderBy("date", "desc"));
        const querySnapshot = await getDocs(commentsQuery);
        querySnapshot.forEach((doc) => {
            shelterComments[doc.id] = doc.data()
        });
        return shelterComments
    };

    addShelterComment = async (shelterID, formData) => {
        console.log('[firebase] Call: <addShelterComment>')
        await addDoc(collection(this.db, this.collections.comments), {
            shelterID: shelterID,
            user: formData.user,
            comment: formData.comment,
            date: Timestamp.fromDate(new Date())
        });
    };

    // addSingleShelter = async (shelterID, shelterData) => {
    //   console.log('[firebase] Call: <addSingleShelter> ')
    //   await setDoc(doc(this.db, this.collections.shelters, shelterID),shelterData,);
    // };
}

const firebaseInstance = new Firebase();

export default firebaseInstance;