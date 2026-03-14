import { create } from "zustand";
import type { Crypto, CryptoData, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoData, getCryptos } from "../services/crypto.service";

type CryptoStore = {
  cryptocurrencies: Crypto[];
  result: CryptoData;
  fetchCryptos: () => Promise<void>;
  fetchCryptoData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoData,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({ cryptocurrencies }));
    },
    fetchCryptoData: async (pair: Pair) => {
      const result = await fetchCurrentCryptoData(pair);
      set(() => ({ result }));
    },
  })),
);
