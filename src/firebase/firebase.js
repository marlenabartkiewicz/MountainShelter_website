import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.collections = {
      shelters: "shelters",
      ranks: "shelters-ranks",
    };
  }

  getSingleShelter = async (shelterID) => {
    console.log('[firebase] Call: <getSingleShelter>')
    const docSnap = await getDoc(
        doc(this.db, this.collections.shelters, shelterID),
    );
    if (docSnap.exists()) {
      return docSnap.data();
    }
  };

  getAllSheltersID = async () => {
    console.log('[firebase] Call: <getAllSheltersID>')
    const allSheltersID = {};
    const docsSnap = await getDocs(collection(this.db, this.collections.shelters));
    docsSnap.docs.forEach(
        (doc) => (allSheltersID[doc.id] = doc.data().fullName),
    );
    return allSheltersID;
  };

  addShelterRank = async (shelterID, rank) => {
    console.log('[firebase] Call: <addShelterRank> ')
    const docRef = doc(this.db, this.collections.ranks, shelterID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let currentRanks = await this.getShelterRank(shelterID);
      currentRanks = currentRanks.ranks ? currentRanks.ranks : []; // Handles empty 'ranks' field if Doc exists.
      await updateDoc(docRef, { ranks: currentRanks.concat([rank]) });
    } else {
      await setDoc(docRef, { ranks: [rank] });
    }
  };

  getShelterRank = async (shelterID) => {
    console.log('[firebase] Call: <getShelterRank> ')
    const docSnap = await getDoc(doc(this.db, this.collections.ranks, shelterID));
    if (docSnap.exists()) {
      return docSnap.data()
    }
    return {ranks:0}
  };

  addSingleShelter = async (shelterID, shelterData) => {
    console.log('[firebase] Call: <addSingleShelter> ')
    await setDoc(doc(this.db, this.collections.shelters, shelterID),shelterData,);
  };
}

const firebaseInstance = new Firebase();

export default firebaseInstance;