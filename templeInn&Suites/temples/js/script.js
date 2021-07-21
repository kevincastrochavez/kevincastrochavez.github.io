const displayTemples = async () => {
  const response = await fetch("../../temples.json");
  const templesArray = await response.json();

  templesArray.map((temple) => {
    console.log(temple);

    const link = document.createElement("a");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const infoContainer = document.createElement("div");
    const infoSpan = document.createElement("span");
    const infoH2 = document.createElement("h2");
    const milestonesContainer = document.createElement("div");

    link.classList.add("card");
    imgContainer.classList.add("img-container");
    infoContainer.classList.add("info-container");
    milestonesContainer.classList.add("milestones-container");

    img.setAttribute("src", `../../images/${temple.image}`);
    img.setAttribute("alt", `../../images/${temple.name}`);
    infoSpan.textContent = temple.location;
    infoH2.textContent = temple.name;

    const milestones = Object.entries(temple.milestones);

    milestones.map((milestone) => {
      const milestoneWrapper = document.createElement("div");
      const event = document.createElement("div");
      const date = document.createElement("div");

      milestoneWrapper.classList.add("milestone");
      event.classList.add("event");
      date.classList.add("date");

      event.textContent = milestone[0];
      date.textContent = milestone[1];

      milestoneWrapper.appendChild(event);
      milestoneWrapper.appendChild(date);
      milestonesContainer.appendChild(milestoneWrapper);
    });

    infoContainer.appendChild(infoSpan);
    infoContainer.appendChild(infoH2);
    infoContainer.appendChild(milestonesContainer);

    imgContainer.appendChild(img);

    link.appendChild(imgContainer);
    link.appendChild(infoContainer);

    document.querySelector(".cards-container").appendChild(link);
  });
};

displayTemples();
