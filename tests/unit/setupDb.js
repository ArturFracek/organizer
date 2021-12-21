import dbConfigFile from "@root/config/keys";
import { execSync } from 'child_process';
import request from 'supertest';
import server from '@root/routes/server'
const dbConfig = dbConfigFile.test;

function setupDb () {
  beforeEach(() => {
    execSync(`mongo ${dbConfig.mongoURI} --eval "db.dropDatabase()"`);
  })
}

async function createUserAndLogin({
  name = 'testuser',
  username = 'test',
  email = 'test@test.com',
  password = '123',
} = {}) {
  await request(server)
    .post('/api/users/register')
    .send({
      name,
      username,
      email,
      password,
      confirm_password: password,
    })
    .expect(201)
  const { body } = await request(server)
    .post('/api/users/login')
    .send({
      username,
      password,
    })
    .expect(200)
  return body.token
}

module.exports = {
  setupDb,
  createUserAndLogin
}