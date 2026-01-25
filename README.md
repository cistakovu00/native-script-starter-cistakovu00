[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Uu9lUx8_)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22284751&assignment_repo_type=AssignmentRepo)
# NativeScript: Scan Inventory

## Cel
Zbuduj podstawową aplikację w **NativeScript używając framework Angular**, która używa **natywnej funkcji** oraz **komunikuje się z API**, z **3–4 widokami**.

## Opis projektu
Scan Inventory to mobilna aplikacja stworzona z wykorzystaniem NativeScript oraz frameworka Angular.  
Aplikacja umożliwia zarządzanie prostą listą produktów magazynowych, w tym przeglądanie listy produktów, wyświetlanie szczegółów wybranego produktu oraz dodawanie nowych pozycji.

Projekt został wykonany w ramach zadania zaliczeniowego i ma na celu zaprezentowanie:
- wykorzystania natywnych funkcji urządzenia mobilnego,
- komunikacji z zewnętrznym API REST,
- nawigacji pomiędzy wieloma widokami aplikacji.

---

## Wykorzystane technologie
- NativeScript
- Angular
- TypeScript
- Android SDK
- NativeScript Camera Plugin
- HttpClient (komunikacja z API REST)

---

## Widoki aplikacji
Aplikacja składa się z następujących widoków:
1. Lista produktów
   - wyświetlenie listy produktów,
   - prezentacja nazwy oraz kodu produktu.
2. Szczegóły produktu
   - wyświetlenie szczegółowych informacji o produkcie,
   - możliwość powrotu do listy produktów.
3. Dodaj produkt
   - formularz umożliwiający dodanie nowego produktu,
   - wykorzystanie natywnej funkcji aparatu.

---

## Funkcja natywna
W aplikacji wykorzystano aparat urządzenia mobilnego do wykonania zdjęcia produktu.  
Zastosowanie tej funkcji demonstruje integrację z natywnymi możliwościami systemu Android oraz obsługę uprawnień.

---

## Integracja z API
Aplikacja komunikuje się z zewnętrznym API REST przy użyciu protokołu HTTP:
- GET – pobieranie listy produktów,
- POST – dodawanie nowego produktu,
- DELETE – usuwanie produktu.

Podczas developmentu użyto przykładowego (mockowego) API.

---

## Walidacja formularzy
Zaimplementowano podstawową walidację formularzy:
- pola wymagane (nazwa produktu, kod produktu),
- prosta obsługa błędów.

---

## Zrzuty ekranu
![1](image.png)
![2](image-1.png)

---

## Uruchomienie projektu
```bash
npm install
ns run android
