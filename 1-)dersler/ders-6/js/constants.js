const users = ["Ali", "Ayşe", "Veli", "Selin", "Ömer", "Didem"];

const student = {
  name: "Muhammed Fatih",
  surname: "Karaaslan",
  isStudent: true,
  hobies: ["Yazılım", "Spor", "Müzik"],
  kendiniTanıt: function () {
    document.write(
      `Selamlar ben ${this.name} geleceğin başarılı yazılımcısıyım.`
    );
  },
};

export { users, student };
