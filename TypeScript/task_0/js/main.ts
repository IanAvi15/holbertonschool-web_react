interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();

  const firstNameCell: HTMLTableCellElement = row.insertCell(0);
  const locationCell: HTMLTableCellElement = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});