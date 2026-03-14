import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z
  .object({
    NAME: z.string(),
    SYMBOL: z.string(),
  })
  .transform((val) => ({
    name: val.NAME,
    symbol: val.SYMBOL,
  }));

export const CryptoCurrenciesResponseSchema = z
  .object({
    LIST: z.array(CryptoCurrencyResponseSchema),
  })
  .transform((val) => ({
    list: val.LIST,
  }));

export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});

export const CryptoDataResponseSchema = z
  .object({
    PRICE: z.string(),
    IMAGEURL: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string(),
  })
  .transform((val) => ({
    price: val.PRICE,
    imageUrl: val.IMAGEURL,
    highDay: val.HIGHDAY,
    lowDay: val.LOWDAY,
    changePct24Hour: val.CHANGEPCT24HOUR,
    lastUpdate: val.LASTUPDATE,
  }));
