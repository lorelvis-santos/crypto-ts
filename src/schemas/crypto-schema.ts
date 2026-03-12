import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z
  .object({
    NAME: z.string(),
    SYMBOL: z.string(),
    LOGO_URL: z.string(),
  })
  .transform((val) => ({
    name: val.NAME,
    symbol: val.SYMBOL,
    logoUrl: val.LOGO_URL,
  }));

export const CryptoCurrenciesResponseSchema = z
  .object({
    LIST: z.array(CryptoCurrencyResponseSchema),
  })
  .transform((val) => ({
    list: val.LIST,
  }));
