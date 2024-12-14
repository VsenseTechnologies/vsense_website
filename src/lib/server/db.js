import path from 'path';
import Database from 'better-sqlite3';

const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath, { verbose: console.log });

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Function to create a new contact
export function createContact(contact) {
  try {
    if (!contact.name || !contact.email || !contact.message) {
      throw new Error('All fields (name, email, message) are required.');
    }

    const stmt = db.prepare(`
      INSERT INTO contacts (id, name, email, message)
      VALUES (?, ?, ?, ?)
    `);

    const id = crypto.randomUUID();
    stmt.run(id, contact.name, contact.email, contact.message);
    return { id, ...contact };
  } catch (error) {
    console.error('Error creating contact:', error.message);
    throw error;
  }
}

// Function to create a new newsletter subscriber
export function createNewsletterSubscriber(email) {
  try {
    if (!email) {
      throw new Error('Email is required.');
    }

    const stmt = db.prepare(`
      INSERT OR IGNORE INTO newsletter_subscribers (id, email)
      VALUES (?, ?)
    `);

    const id = crypto.randomUUID();
    stmt.run(id, email);
    return { id, email };
  } catch (error) {
    console.error('Error creating newsletter subscriber:', error.message);
    throw error;
  }
}

// Function to find a newsletter subscriber by email
export function findNewsletterSubscriber(email) {
  try {
    if (!email) {
      throw new Error('Email is required.');
    }

    const stmt = db.prepare('SELECT * FROM newsletter_subscribers WHERE email = ?');
    return stmt.get(email);
  } catch (error) {
    console.error('Error finding newsletter subscriber:', error.message);
    throw error;
  }
}

// Exporting the database instance for direct queries if needed
export default db;
