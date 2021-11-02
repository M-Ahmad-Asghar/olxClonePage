import { db } from "../../config/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";


export const fetchData = (setLoading) => async (dispatch) => {
    try {
       
        const q = query(collection(db, "ads"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let ads = []
            ads.push({
                docID: doc.id,
                ...doc.data(),
            });
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            if (ads) {
                dispatch({
                    type: 'FETCH_DATA',
                    payload: 'abs',
                });
                setLoading(false)
            } else {
                setLoading(false)
            }
        });
    } catch (error) {
        console.log("error", error);
        alert(error);
    }
};