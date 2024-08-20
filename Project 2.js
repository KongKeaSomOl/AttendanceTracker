let students = [];

const nameInput = document.querySelector("#name");
const seatInput = document.querySelector("#seat");
const addButton = document.querySelector("#add-btn");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-btn");
const tableBody = document.querySelector("tbody");

addButton.addEventListener("click", addStudent);
searchButton.addEventListener("click", () => {
	let searchName = searchInput.value;
	for (let i = 0; i < students.length; i++) {
		let student = students[i];
		if (student.name === searchName) {
			alert(`${student.name} is sitting in seat ${student.seat}.`);
			return;
		}
	}
	alert(`No student with the name ${searchName} found.`);
});

function addStudent() {
	let name = nameInput.value;
	let seat = seatInput.value;

	if (name === "" || seat === "") {
		alert("Please enter both name and seat number.");
		return;
	}

	let student = {
		name: name,
		seat: seat,
		present: false
	};

	students.push(student);
	updateTable();
	nameInput.value = "";
	seatInput.value = "";
}

function updateTable() {
	tableBody.innerHTML = "";
	for (let i = 0; i < students.length; i++) {
		let student = students[i];
		let row = document.createElement("tr");
		row.innerHTML = `
			<td>${student.name}</td>
			<td>${student.seat}</td>
			<td class="${student.present ? "present" : "absent"}">${student.present ? "Present" : "Absent"}</td>
			<td>
				<button class="present-btn ${student.present ? "hidden" : ""}" data-index="${i}">Present</button>
				<button class="absent-btn ${student.present ? "" : "hidden"}" data-index="${i}">Absent</button>
				<button class="delete-btn" data-index="${i}">Delete</button>
			</td>
		`;
		tableBody.appendChild(row);
	}

	const presentButtons = document.querySelectorAll(".present-btn");
	const absentButtons = document.querySelectorAll(".absent-btn");
	const deleteButtons = document.querySelectorAll(".delete-btn");

	presentButtons.forEach((button) => {
		button.addEventListener("click", markPresent);
	});

	absentButtons.forEach((button) => {
		button.addEventListener("click", markAbsent);
	});

	deleteButtons.forEach((button) => {
		button.addEventListener("click", deleteStudent);
	});

	function markPresent(e) {
		let index = e.target.getAttribute("data-index");
		students[index].present = true;
		updateTable();
	}

	function markAbsent(e) {
		let index = e.target.getAttribute("data-index");
		students[index].present = false;
		updateTable();
	}

	function deleteStudent(e) {
		let index = e.target.getAttribute("data-index");
		students.splice(index, 1);
		updateTable();
	}

	const searchStudent = () => {
		let searchName = searchInput.value.toLowerCase();
		for (let i = 0; i < students.length; i++) {
		
			if (student.name === searchName) {
				alert(`${student.name} is sitting in seat ${student.seat}.`);
				return;
			}else {
                alert(`No student with the name ${searchName} found.`);
               }
            let student = students[i].textContent.toLowerCase();
		}
		alert(`No student with the name ${searchName} found.`);
	}
}