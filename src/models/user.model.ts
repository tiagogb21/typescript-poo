import { ResultSetHeader } from 'mysql2';
import { IUser, IModel } from '../interfaces/user.interface';
import connection from './connection';

export default class Model implements IModel {
  async create(newUser: Omit<IUser, 'id'>): Promise<IUser> {
    const query = 'INSERT INTO login_database.users (name, email, role, age) VALUES (?,?,?,?)'
    const [user] = await connection
      .execute<ResultSetHeader>(query, [newUser.name, newUser.email, newUser.role, newUser.age]);
    return { id: user.insertId, ...newUser };
  }
}