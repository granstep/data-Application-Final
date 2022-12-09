let dataStore = {
  charas: [
    {
      Name: "Dummy",
      Img: "dummy",
      Gender: "None",
      Avatar: false,
      Hair: "Blue",
      Class: "None",
      Start: {
        Lv: 0,
        HP: 0,
        Str: 0,
        Mag: 0,
        Skl: 0,
        Spd: 0,
        Lck: 0,
        Def: 0,
        Res: 0
      },
      Growths: {
        HP: 0,
        Str: 0,
        Mag: 0,
        Skl: 0,
        Spd: 0,
        Lck: 0,
        Def: 0,
        Res: 0
      }
    }
  ],
  subscribers: [],
  subscribe: function (callback) {
    this.subscribers.push(callback);
  },
  updateSubscribers: function () {
    this.subscribers.forEach((callback) => {
      callback();
    });
  },
  loadData: function () {
    fetch("data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        this.charas = data;
        this.updateSubscribers();
      });
  },
  avatarRename: function (reName) {
    this.charas[1].Name = reName.name;
    this.updateSubscribers();
  },
  avatarGender: function (genderSwap) {
    this.charas[1].Gender = genderSwap.gender;
    this.charas[1].Img = genderSwap.image;
    this.updateSubscribers();
  }
};

function ReName(newName) {
  this.name = newName;
}

function GenderSwap(gender, image) {
  this.gender = gender;
  this.image = image;
}

export { dataStore, ReName, GenderSwap };
