import { initializeApp } from 'firebase/app'

let
    resolve,
    firebaseInstance,
    firestoreInstance

const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
    projectId: import.meta.env.PUBLIC_PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
    appId: import.meta.env.PUBLIC_APP_ID,
};

const promise = new Promise(res => resolve = res)

export const initialize = async () => {
    if (import.meta.env.SSR) return undefined
    if (firebaseInstance) return firebaseInstance
    firebaseInstance = initializeApp(firebaseConfig)
    resolve(firebaseInstance)
    return firebaseInstance
}

export const getInstance = async () => {
    if (import.meta.env.SSR) {
        return undefined
    }
    if (firebaseInstance) {
        return firebaseInstance
    }
    return promise
}

export const getFirestore = async () => {
    if (firestoreInstance) return firestoreInstance

    const { getFirestore } = import('firebase/firestore')
    firestoreInstance = getFirestore(await getInstance())
    return firestoreInstance
}

export const getAuth = async () => {
    if (firestoreInstance) return firestoreInstance
    const { getAuth } = import('firebase/auth')
    firestoreInstance = getAuth(await getInstance())
    return firestoreInstance
}

export const getAnalytics = async () => {
    if (firestoreInstance) return firestoreInstance
    const { getAuth } = import('firebase/analytics')
    firestoreInstance = getAuth(await getInstance())
    return firestoreInstance
}