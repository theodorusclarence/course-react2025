import db from '@/lib/firebase-admin';

export default async (_, res) => {
    const snapshot = await db.collection('sites').get();

    let sites = [];
    snapshot.forEach((doc) => {
        sites.push({ id: doc.id, ...doc.data() });
    });

    // https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date
    sites.sort((a, b) => {
        return a.createdAt < b.createdAt
            ? -1
            : a.createdAt > b.createdAt
            ? 1
            : 0;
    });

    res.status(200).json({ sites });
};
