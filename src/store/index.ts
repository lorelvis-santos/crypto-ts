import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";

async function getCryptos() {
  const url =
    "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD";

  const {
    data: { Data },
  } = await axios(url);

  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  console.log(result);
}

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    getCryptos();
  },
}));
