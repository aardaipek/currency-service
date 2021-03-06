import { Currency } from "../models/currency";
import config from "../config/config";
import { ExchangeType } from "../objects/enums";
import firebaseApp from "../config/firebase.config";

export class CurrencyService {
  private firestore = firebaseApp.firestore();
  private currencyCollection = config.collections.currencyCollection;

  async saveCurrency(data) {
    try {
      const user = data.userUid;
      const pair = data.pair;
      const exchangeType =
        data.exchangeType == 1 ? ExchangeType.Binance : ExchangeType.Gate;
      const currrencyRef = this.firestore
        .collection(this.currencyCollection)
        .doc(user)
        .collection(exchangeType)
        .doc(pair);
      const result = await currrencyRef.set(data);
      return "saved";
    } catch (err) {
      return err.message;
    }
  }

  async getUserCurrencies(uid,exchangeType) {
    try {
      exchangeType = exchangeType == 1 ? ExchangeType.Binance : ExchangeType.Gate;
      let currencies = [];
      await this.firestore
        .collection(this.currencyCollection)
        .doc(uid)
        .collection(exchangeType)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            currencies.push(doc.data());
          });
        });
      return currencies;
    } catch (err) {
      return err.message
    }
  }
}
