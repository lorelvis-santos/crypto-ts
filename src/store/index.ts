import { create } from "zustand";
import type { Crypto } from "../types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "../services/crypto.service";

type CryptoStore = {
  cryptoCurrencies: Crypto[];
  fetchCryptos: () => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({ cryptoCurrencies }));
    },
  })),
);
