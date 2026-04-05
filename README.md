# Za ile litr? ⛽

Aplikacja do monitorowania aktualnych cen paliw w Polsce na podstawie oficjalnych obwieszczeń Ministra Finansów.

## 📋 O projekcie

"Za ile litr?" to proste i przejrzyste narzędzie, które pobiera i prezentuje najświeższe dane o cenach paliw. Dane pochodzą bezpośrednio z oficjalnych dokumentów (obwieszczeń), co zapewnia ich rzetelność i aktualność.

## ✨ Funkcje

- **Aktualne ceny:** Prezentacja cen dla benzyny PB95, PB98 oraz oleju napędowego (Diesel).
- **Szczegółowe dane:** Wyświetlanie wartości zarówno netto, jak i brutto za litr paliwa.
- **Źródło danych:** Informacja o konkretnym obwieszczeniu, data publikacji oraz bezpośredni link do dokumentu PDF.
- **Responsywny design:** Aplikacja działa płynnie na urządzeniach mobilnych i desktopowych.

## 🛠️ Technologia

Projekt został zbudowany z wykorzystaniem nowoczesnych narzędzi:

- **Frontend:** React + Vite + TypeScript
- **Stylizacja:** Tailwind CSS + Shadcn UI
- **Pobieranie danych:** TanStack Query (React Query)
- **Ikony:** Lucide React
- **API:** Dedykowany monitor cen paliw (`fuel-monitor.onrender.com`)

## 🚀 Uruchomienie lokalne

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/your-username/za-ile-litr.git
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   # lub
   bun install
   ```

## 🧪 Testy

Aplikacja zawiera zestaw testów:
- **Unit/Integration:** Vitest + React Testing Library (`npm run test`)
- **E2E:** Playwright

---
Projekt stworzony w celach informacyjnych. Dane są pobierane z publicznie dostępnych obwieszczeń Ministra Finansów.
