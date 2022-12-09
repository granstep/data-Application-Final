//dummy data to prevent errors
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
  ], //subscribers to handle data changes
  subscribers: [],
  subscribe: function (callback) {
    this.subscribers.push(callback);
  },
  updateSubscribers: function () {
    this.subscribers.forEach((callback) => {
      callback();
    });
  }, //get the json data file
  loadData: function () {
    fetch("data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        this.charas = data;
        this.updateSubscribers();
      });
  }, //the renaming feature for the avatar character
  avatarRename: function (reName) {
    this.charas[1].Name = reName.name;
    this.updateSubscribers();
  }, //the gender change feature for the avatar character
  avatarGender: function (genderSwap) {
    this.charas[1].Gender = genderSwap.gender;
    this.charas[1].Img = genderSwap.image;
    this.updateSubscribers();
  }
};

//the functions for exporting
function ReName(newName) {
  this.name = newName;
}

function GenderSwap(gender, image) {
  this.gender = gender;
  this.image = image;
}

//the export
export { dataStore, ReName, GenderSwap };
