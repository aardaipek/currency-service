import firebaseApp from '../config/firebase.config';

export class UserService {
  private auth = firebaseApp.auth();

  async createUser(email,password) {
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email,password);
      return user;
    } catch (err) {
      return err.message;
    }
  }

  async loginUser(email,password){
      try{
        const user = await this.auth.signInWithEmailAndPassword(email,password);
        return user;
      }catch(err){
        return err.message;
      }
  }
}
