const nameGeneratorForm = document.getElementById("name-generator-form");

if (nameGeneratorForm) {
  nameGeneratorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document
      .getElementById("user-name")
      .value
      .trim();

    const season = document.getElementById("season").value;
    const personality = document.getElementById("personality").value;
    const result = document.getElementById("name-result");

    const familyNames = {
      spring: ["桜井", "春川", "花村"],
      summer: ["夏目", "海野", "青木"],
      autumn: ["秋山", "楓谷", "月島"],
      winter: ["冬木", "雪村", "白川"]
    };

    const givenNames = {
      kind: ["優", "結衣", "心"],
      energetic: ["陽斗", "光", "翔"],
      calm: ["静", "凪", "蓮"],
      creative: ["彩", "奏", "創"]
    };

    if (!userName || !season || !personality) {
      result.textContent = "Please complete all fields.";
      return;
    }

    const familyName = getRandomItem(familyNames[season]);
    const givenName = getRandomItem(givenNames[personality]);

    result.innerHTML = `
      <h3>Your Japanese Name</h3>
      <p class="generated-name">${familyName} ${givenName}</p>
      <p>
        ${userName}, this name was inspired by your
        favorite season and personality!
      </p>
    `;
  });
}

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you for your message!");
    contactForm.reset();
  });
}
