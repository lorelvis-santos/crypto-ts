import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoDataResponseSchema,
} from "../schemas/crypto-schema";
import type { Crypto, Pair } from "../types";

export async function getCryptos(): Promise<Crypto[]> {
  const url =
    "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD";

  const {
    data: { Data },
  } = await axios(url);

  const result = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (result.success) {
    return result.data.list;
  }

  return [];
}

export async function fetchCurrentCryptoData(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;

  const {
    data: { DISPLAY },
  } = await axios(url);

  const data = DISPLAY[pair.cryptocurrency][pair.currency];

  const result = CryptoDataResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
}
