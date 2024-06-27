import { ICedulas } from "@/@Types/ICedulas";

export class Cedulas implements ICedulas {
  public "100": number;
  public "50": number;
  public "20": number;
  public "10": number;
  public "5": number;
  public "2": number;

  constructor(cedulas?: ICedulas) {
    this["100"] = cedulas?.["100"] ?? 0;
    this["50"] = cedulas?.["50"] ?? 0;
    this["20"] = cedulas?.["20"] ?? 0;
    this["10"] = cedulas?.["10"] ?? 0;
    this["5"] = cedulas?.["5"] ?? 0;
    this["2"] = cedulas?.["2"] ?? 0;
  }
}
