import z from "zod";
import {
  CryptoCurrencyResponseSchema,
  CurrencySchema,
  PairSchema,
  CryptoDataResponseSchema,
} from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Crypto = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoData = z.infer<typeof CryptoDataResponseSchema>;
