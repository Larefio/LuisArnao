const students = [
  {
    name: "John Doe",
    age: 20,
    grade: "A",
  },
  {
    name: "Jane Smith",
    age: 22,
    grade: "B",
  },
  {
    name: "Michael Johnson",
    age: 19,
    grade: "A",
  },
  {
    name: "Emily Davis",
    age: 21,
    grade: "C",
  },
  {
    name: "David Wilson",
    age: 23,
    grade: "B",
  },
];

const containerCards = document.getElementById("containerCards");

students.forEach((element) => {
  containerCards.innerHTML += `
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">
            ${element.age} | ${element.grade}
          </p>
        </div>
      </div>
    </div>
  `;
});
