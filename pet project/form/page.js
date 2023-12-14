class Person{
    constructor(name, gender,yearBirth,homeTown ,image, address, note){
        this.name= name;
        this.gender=gender
        this.yearBirth= yearBirth;
        this.homeTown=homeTown;
        this.image=image;
        this.address=address;
        this.note=note;
    }


}
const newPerson = new person('A','B','1000','Ha Noi','text','C','LMAO');






// Take years
function getYearSelect() {
    let selectYear = document.getElementById("yearBirth");

    // Lấy năm hiện tại
    let currentYear = new Date().getFullYear();

    // Tạo danh sách các năm từ 1900 đến năm hiện tại và thêm vào select
    for (let year = 1900; year <= currentYear; year++) {
      let option = document.createElement("option");
      option.value = year;
      option.text = year;
      selectYear.add(option);
    }
  }
  getYearSelect();