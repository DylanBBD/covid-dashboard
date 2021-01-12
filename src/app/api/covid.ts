interface BaseData {
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
}

export interface CountryData extends BaseData {
    country: string;
    code: string;
    latitude: number;
    longitude: number;
  }

export interface TotalData extends BaseData {
    lastUpdate: Date;
}

