import { create } from "zustand";
import type { Crypto } from "../types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "../services/crypto.service";

type CryptoStore = {
  cryptocurrencies: Crypto[];
  fetchCryptos: () => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({ cryptocurrencies }));
    },
  })),
);
