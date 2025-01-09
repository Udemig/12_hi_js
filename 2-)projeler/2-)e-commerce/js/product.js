export const fetchProducts = async () => {
  try {
    const res = await fetch("db.json");

    const data = await res.json();
    // Eğer bir sıkıntı varsa hata fırlat
    if (!res.ok) {
      throw new Error("İşlem sırasında bir hata oluştu");
    }
    // Bir hata yoksa data'yı dönder
    return data;
  } catch (err) {
    console.log(`Hataaa: ${err}`);
    return [];
  }
};
