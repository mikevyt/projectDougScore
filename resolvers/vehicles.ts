import { ValidationError, ApolloError } from 'apollo-server';
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: 'AIzaSyB3I8sBayixeR9yQFYLQML_5O6bGZqb0HI',
    projectId: 'projectdougscore'
});

const collection = firebase.firestore().collection('vehicles');

// TODO: Verify error cases, search for security vulnerabilities

export const vehicleQueries = {
    async vehicles() {
        try {
            const snapshot = await collection.where('isDeleted', '==', false).get();
            return snapshot.docs.map(doc => doc.data());
        } catch (err) {
            return new ApolloError('Cannot retrieve vehicles');
        }
    },

    async vehicle(_, args) {
        const snapshot = await collection.where('licensePlate', '==', args.licensePlate).where('isDeleted', '==', false).get();
        return (
            snapshot.docs.map(doc => doc.data())[0] ||
            new ValidationError('Vehicle not found')
        );
    }
};

export const vehicleMutations = {
    async createVehicle(_, args) {
        await collection.add(args);
        const snapshot = await collection.where('licensePlate', '==', args.licensePlate).where('isDeleted', '==', false).get();
        return (
            snapshot.docs.map(doc => doc.data())[0] ||
            new ValidationError('Vehicle not found')
        );
    },

    async updateVehicle(_, args) {
        const { licensePlate, ...newProperties } = args;
        await collection.where('licensePlate', '==', licensePlate)
        .get()
        .then(
            querySnapshot => querySnapshot.forEach(
                doc => collection.doc(doc.id).update( {...newProperties} )
            )
        );

        const snapshot = await collection.where('licensePlate', '==', licensePlate).where('isDeleted', '==', false).get()
        return (
            snapshot.docs.map(doc => doc.data())[0] ||
            new ValidationError('Vehicle not found')
        );
    },

    async deleteVehicle(_, args) {
        const licensePlate: string = args.licensePlate
        const snapshot = await collection.where('licensePlate', '==', licensePlate).get();
        await snapshot.forEach(function(doc) {
            collection.doc(doc.id).update({ isDeleted: true });
        });
        return `Vehicle '${licensePlate}' deleted`;
    }
};
