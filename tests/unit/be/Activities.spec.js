import request from 'supertest';
import server from '@root/routes/server'
import { setupDb, createUserAndLogin }from '../setupDb'

function createActvitiy(token, activity) {
  return request(server)
    .post('/api/activities')
    .set('Authorization', token)
    .send(activity)
    .expect(201)
}

setupDb()
describe('/api/activities', () => {
  describe('GET', () => {
    it('should return 401 for non-auth user', async () => {
      await request(server)
        .get('/api/activities')
        .expect(401)
    })

    it('should return 401 for wrong token', async () => {
      await request(server)
        .get('/api/activities')
        .set('Authorization', 'abc')
        .expect(401)
    })
    
    it('returns empty array for empty db', async () => {
      const token = await createUserAndLogin()
      const { body } = await request(server)
        .get('/api/activities')
        .set('Authorization', token)
        .expect(200)
      expect(body).toEqual([])
    })

    it('returns activities', async () => {
      const token = await createUserAndLogin()
      await createActvitiy(token, { title: 'A' })
      await createActvitiy(token, { title: 'B' })
      const { body } = await request(server)
        .get('/api/activities')
        .set('Authorization', token)
        .expect(200)
      expect(body).toEqual([
        expect.objectContaining({
          _id: expect.any(String),
          title: "A",
        }),
        expect.objectContaining({
          _id: expect.any(String),
          title: "B",
        }),
      ])
    })
  })
})