import { ValidationError, ApolloError } from 'apollo-server';
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: 'projectdougscore'
});

const collection = firebase.firestore().collection('vehicles');

// TODO: Verify error cases, search for security vulnerabilities

export const vehicleQueries = {
    async vehicles() {
        try {
            const snapshot = await collection.get();
            return snapshot.docs.map(doc => doc.data());
        } catch (err) {
            return new ApolloError('Cannot retrieve vehicles.');
        }
    },

    async vehicle(_, args) {
        const id: number = parseInt(args.id);
        const snapshot = await collection.where('id', '==', id).get();
        return (
            snapshot.docs.map(doc => doc.data())[0] ||
            new ValidationError('Vehicle not found')
        );
    }
};

export const vehicleMutations = {
    async createVehicle(_, args) {
        await collection.add(args);
        const id: number = parseInt(args.id);
        const snapshot = await collection.where('id', '==', id).get();
        return (
            snapshot.docs.map(doc => doc.data())[0] ||
            new ValidationError('Vehicle not found')
        );
    },
    async updateVehicle(_, args) {
        const id: number = parseInt(args.id);
        const snapshot = await collection.where('id', '==', id).get();
        if (!snapshot.length) {
            return new ValidationError('ID not found');
        }
        return (
            snapshot.docs.map(doc => doc.data())[0] ||
            new ValidationError('Vehicle not found')
        );
        
    },
    async deleteVehicle(_, args) {
        const id: number = parseInt(args.id);
        const snapshot = await collection.where('id', '==', id).get();
        snapshot.forEach(function(doc) {
            doc.ref.delete();
        });
        const total = await collection.get();
        return total.docs.map(doc => doc.data());
    }
};
