import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { fileURLToPath } from 'node:url';
import { createApp } from './app.js';

process.env.MONGOMS_DOWNLOAD_DIR = fileURLToPath(new URL('../../.cache/mongodb', import.meta.url));
let mongo: MongoMemoryServer | undefined;
const app = createApp();
beforeAll(async () => { mongo = await MongoMemoryServer.create(); await mongoose.connect(mongo.getUri()); });
afterAll(async () => { await mongoose.disconnect(); await mongo?.stop(); });
beforeEach(async () => { await mongoose.connection.db!.dropDatabase(); });

describe('setup and authentication', () => {
  it('creates the first admin and locks setup afterwards', async () => {
    const body = { companyName: 'Acme', name: 'Admin User', email: 'admin@acme.test', password: 'secure-password' };
    await request(app).get('/setup/status').expect(200).expect({ needsSetup: true });
    await request(app).post('/setup').send(body).expect(201);
    await request(app).post('/setup').send(body).expect(409);
  });
  it('requires authentication for sensitive routes', async () => { await request(app).get('/employees').expect(401); });
});
