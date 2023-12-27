var i = document.querySelector("input");
data = [
  {
    name: "begam",
    src: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22",
  },
  {
    name: "jenny",
    src: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef",
  },
  {
    name: "bella",
    src: "https://images.unsplash.com/photo-1613317898586-a5f478937f2d",
  },
  {
    name: "stella",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  },
  {
    name: "sabrina",
    src: "https://images.unsplash.com/photo-1638431919260-af6cbc16dcfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "becca",
    src: "https://images.unsplash.com/photo-1645342682688-247f1172166a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "joanna",
    src: "https://images.unsplash.com/photo-1549971362-9ce69d0fb764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "jessie",
    src: "https://images.unsplash.com/photo-1697921814050-c48df12df6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "barbie",
    src: "https://plus.unsplash.com/premium_photo-1661548271175-6163149fc57c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];
var person = ""; //so our person doesn't have an undefined value
data.forEach(function (elem) {
  person += `<div class="person">
        <div class="img">
          <img
            src="${elem.src}"
            alt=""
          />
        </div>
        <h1>${elem.name}</h1>
      </div>`;
});
document.querySelector(".people").innerHTML = person;

i.addEventListener("input", () => {
  var matching = data.filter((e) => {
    return e.name.startsWith(i.value);
  });
  var newUsers = "";
  matching.forEach(function (elem) {
    newUsers += `<div class="person">
        <div class="img">
          <img
            src="${elem.src}"
            alt=""
          />
        </div>
        <h1>${elem.name}</h1>
      </div>`;
  });
  document.querySelector(".people").innerHTML = newUsers;
});
