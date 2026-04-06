import {useQuery} from "@tanstack/react-query";
import {Fuel, Droplets, TrendingUp, Calendar, FileText} from "lucide-react";

import {fetchFuelPrices} from '@/api/fetchFuelPrices.ts'

const FuelCard = ({
                      name,
                      gross,
                      net,
                      icon: Icon,
                      colorClass,
                  }: {
    name: string;
    gross: string;
    net: string;
    icon: typeof Fuel;
    colorClass: string;
}) => (
    <div
        className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className={`absolute top-0 left-0 w-full h-1 ${colorClass}`}/>
        <div className="flex items-center gap-3 mb-4">
            <div className={`p-2.5 rounded-lg ${colorClass} text-primary-foreground`}>
                <Icon className="w-5 h-5"/>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        </div>
        <div className="space-y-2">
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{gross}</span>
                <span className="text-sm text-muted-foreground">zł/l brutto</span>
            </div>
            <div className="text-sm text-muted-foreground">
                {net} zł/l netto
            </div>
        </div>
    </div>
);

const Index = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ["fuel-prices"],
        queryFn: fetchFuelPrices,
    });

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-3xl mx-auto px-4 py-12">
                <header className="text-center mb-10">
                    <div
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        <TrendingUp className="w-4 h-4"/>
                        Aktualne ceny paliw
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        Ceny paliw w Polsce
                    </h1>
                    <p className="text-muted-foreground">
                        Na podstawie obwieszczenia Ministra Energii
                    </p>
                </header>

                {isLoading && (
                    <div className="flex items-center gap-2 justify-center py-12">
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        {/*Now I'm AI Startup :)*/}
                        <span className="text-gray-700 animate-pulse">Myślenie...</span>
                    </div>
                )}

                {error && (
                    <div className="text-center py-12 text-destructive">
                        Nie udało się pobrać danych. Spróbuj ponownie później.
                    </div>
                )}

                {data && (
                    <>
                        <div className="grid gap-4 md:grid-cols-3 mb-8">
                            <FuelCard
                                name="PB95"
                                gross={data.pb95_gross}
                                net={data.pb95_net}
                                icon={Fuel}
                                colorClass="bg-[hsl(var(--fuel-pb95))]"
                            />
                            <FuelCard
                                name="PB98"
                                gross={data.pb98_gross}
                                net={data.pb98_net}
                                icon={Fuel}
                                colorClass="bg-[hsl(var(--fuel-pb98))]"
                            />
                            <FuelCard
                                name="Diesel"
                                gross={data.diesel_gross}
                                net={data.diesel_net}
                                icon={Fuel}
                                colorClass="bg-[hsl(var(--fuel-diesel))]"
                            />
                        </div>

                        <div
                            className="bg-card border border-border rounded-xl p-5 text-sm text-muted-foreground space-y-2">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4"/>
                                <span>Data publikacji: {new Date(data.publication_date).toLocaleDateString("pl-PL")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4"/>
                                <span>{data.title}</span>
                                <span className="mx-1">·</span>
                                <a href={data.pdf_url} target="_blank" rel="noopener noreferrer"
                                   className="text-primary hover:underline">
                                    PDF
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Index;
