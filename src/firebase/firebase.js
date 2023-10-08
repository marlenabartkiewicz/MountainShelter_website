import firebaseConfig from "./config";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { collection } from "firebase/firestore"


class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);

    this.collections = {
      shelters: "shelters"
    }
  }

  getSingleShelter = async (shelterID) => {
    const docSnap = await getDoc(doc(this.db, this.collections["shelters"], shelterID))
    if (docSnap.exists()) {
      return docSnap.data()
    }
  }

  getAllSheltersID = async () => {
    const allSheltersID = {}
    const docsSnap = await getDocs(collection(this.db, this.collections["shelters"]))
    docsSnap.docs.forEach((doc) => (
        allSheltersID[doc.id]= doc.data()["fullName"]
    ))
    return allSheltersID
  }

  addSingleShelter = async (shelterID, shelterData) => {
    await setDoc(doc(this.db, this.collections["shelters"], shelterID), shelterData)
  }
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
