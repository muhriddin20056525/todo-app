# React JS Todo App Loyihasi

## Loyihaning maqsadi

Ushbu loyiha foydalanuvchiga yangi vazifalarni qo‘shish, ularni ro‘yxatda ko‘rish va kerak bo‘lsa o‘chirish imkonini beruvchi oddiy **Todo App** hisoblanadi.

## Texnologiyalar

- **React JS** – Interaktiv UI yaratish va ma’lumotlarni boshqarish uchun.
- **UUID** – Har bir vazifa uchun noyob identifikator yaratish uchun.
- **React Hot Toast** – Xabarlarni chiqarish uchun.
- **CSS** – Interfeysning vizual ko‘rinishini yaratish uchun.

## Xususiyatlar

- Foydalanuvchi **matn kiritib, yangi vazifa qo‘shishi** mumkin.
- **Vazifalarni o‘chirish** imkoniyati mavjud.
- Agar kiritish maydoni bo‘sh bo‘lsa, **xatolik xabari chiqadi**.
- Agar vazifalar ro‘yxati bo‘sh bo‘lsa, **maxsus rasm ko‘rsatiladi**.
- **Mobil moslashuv** (responsiveness) qo‘llab-quvvatlanadi.

## Foydalanish bo‘yicha qo‘llanma

1. **Yangi vazifa qo‘shish**: Matn maydoniga vazifani yozing va "Add" tugmasini bosing.
2. **Vazifani o‘chirish**: Ro‘yxatda har bir vazifa yonidagi **o‘chirish tugmachasini** bosing.
3. **Xabarlarni ko‘rish**: Agar bo‘sh maydon bilan qo‘shmoqchi bo‘lsangiz, xatolik xabari chiqadi.

## Kodning tavsifi

- **`App.js`** – Asosiy komponent bo‘lib, unda **vazifalar ro‘yxati**, **qo‘shish funksiyasi**, va **o‘chirish funksiyasi** mavjud.
- **`TodoItem.js`** – Har bir vazifani ko‘rsatish va o‘chirish uchun alohida komponent.
- **CSS** – UI dizayni va animatsiyalar uchun mas’ul.
