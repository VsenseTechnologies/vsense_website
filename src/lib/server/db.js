import Database from 'better-sqlite3';

const db = new Database('database.sqlite', { verbose: console.log });

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

export function createContact(contact) {
  const stmt = db.prepare(`
    INSERT INTO contacts (id, name, email, message)
    VALUES (?, ?, ?, ?)
  `);
  
  const id = crypto.randomUUID();
  stmt.run(id, contact.name, contact.email, contact.message);
  return { id, ...contact };
}

export function createNewsletterSubscriber(email) {
  const stmt = db.prepare(`
    INSERT INTO newsletter_subscribers (id, email)
    VALUES (?, ?)
  `);
  
  const id = crypto.randomUUID();
  stmt.run(id, email);
  return { id, email };
}

export function findNewsletterSubscriber(email) {
  const stmt = db.prepare('SELECT * FROM newsletter_subscribers WHERE email = ?');
  return stmt.get(email);
}

export default db;