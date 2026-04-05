export interface FuelData {
    id: string;
    title: string;
    publication_date: string;
    detail_url: string;
    pdf_url: string;
    pb95_net: string;
    pb95_gross: string;
    pb98_net: string;
    pb98_gross: string;
    diesel_net: string;
    diesel_gross: string;
}

export const fetchFuelPrices = async (): Promise<FuelData> => {
    const url = "https://fuel-monitor.onrender.com/latest";
    const res = await fetch(url);
    if (!res.ok) throw new Error("Błąd pobierania danych");
    return res.json();
};