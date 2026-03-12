import z from "zod";
import {
  CryptoCurrencyResponseSchema,
  CurrencySchema,
} from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Crypto = z.infer<typeof CryptoCurrencyResponseSchema>;
