// src/database.js
import { openDB } from 'idb';

async function initDB() {
  return openDB('BudgetApp', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('years')) {
        db.createObjectStore('years');
      }
    },
  });
}

export async function saveYearData(year, data) {
  const db = await initDB();
  await db.put('years', data, year);
}

export async function getYearData(year) {
  const db = await initDB();
  return db.get('years', year);
}

export async function getAllYears() {
  const db = await initDB();
  const tx = db.transaction('years', 'readonly');
  const store = tx.objectStore('years');
  return store.getAllKeys();
}
