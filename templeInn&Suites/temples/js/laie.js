const displayTemple = async () => {
  const response = await fetch(
    "https://kevincastrochavez.github.io/templeInn&Suites/temples.json"
  );
  const templesArray = await response.json();
  const filteredArray = templesArray.filter(
    (temple) => temple.name === "Laie Hawaii Temple"
  );

  filteredArray.map((temple) => {
    const hero = document.createElement("div");
    const img = document.createElement("img");
    const overlay = document.createElement("div");
    const spanHero = document.createElement("span");
    const buttonsHero = document.createElement("div");
    const book = document.createElement("a");
    const contact = document.createElement("a");

    const infoContainer = document.createElement("div");
    const infoH1 = document.createElement("h1");
    const section = document.createElement("section");
    const sectionH2 = document.createElement("h2");
    section.appendChild(sectionH2);

    const sectionServices = document.createElement("section");
    const sectionServicesH2 = document.createElement("h2");
    const services = document.createElement("div");

    const sectionClosures = document.createElement("section");
    const sectionClosuresH2 = document.createElement("h2");

    sectionClosures.appendChild(sectionClosuresH2);

    const sectionContact = document.createElement("section");
    const sectionContactH2 = document.createElement("h2");
    const address = document.createElement("div");
    const phone = document.createElement("div");
    const number = document.createElement("p");

    const templeAddress = Object.entries(temple.address);
    templeAddress.map((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line[1];
      address.appendChild(paragraph);
    });

    const templeClosures = temple.templeClosures;
    templeClosures.map((closure) => {
      const closures = document.createElement("div");
      closures.classList.add("closures");

      const spanClosure = document.createElement("span");

      spanClosure.textContent = Object.entries(closure)[0][0];
      const closuresArray = Object.entries(closure)[0][1];
      closures.appendChild(spanClosure);

      closuresArray.map((el) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = el;
        closures.appendChild(paragraph);
      });

      sectionClosures.appendChild(closures);
    });

    const templeServices = temple.services;
    templeServices.map((service) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = service;
      services.appendChild(paragraph);
    });

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
      section.appendChild(milestoneWrapper);
    });

    hero.classList.add("hero");
    overlay.classList.add("overlay");
    buttonsHero.classList.add("buttons-hero");
    infoContainer.classList.add("info-container");
    section.classList.add("milestones-container");
    sectionServices.classList.add("services-container");
    services.classList.add("services");
    sectionClosures.classList.add("closures-container");
    sectionContact.classList.add("contact-container");
    address.classList.add("address");
    phone.classList.add("phone");

    img.setAttribute(
      "src",
      `https://kevincastrochavez.github.io/templeInn&Suites/images/${temple.image}`
    );
    spanHero.textContent = temple.location;
    book.textContent = "Book Now";
    contact.textContent = "Contact";
    infoH1.textContent = temple.name;
    sectionH2.textContent = "Milestones";
    sectionServicesH2.textContent = "Services";
    sectionClosuresH2.textContent = "Temple Closures";
    sectionContactH2.textContent = "Contact the temple";
    number.textContent = temple.telephone;

    buttonsHero.appendChild(book);
    buttonsHero.appendChild(contact);
    hero.appendChild(img);
    hero.appendChild(overlay);
    hero.appendChild(spanHero);
    hero.appendChild(buttonsHero);
    infoContainer.appendChild(infoH1);
    infoContainer.appendChild(section);
    infoContainer.appendChild(sectionServices);
    infoContainer.appendChild(sectionClosures);
    infoContainer.appendChild(sectionContact);
    sectionServices.appendChild(sectionServicesH2);
    sectionServices.appendChild(services);
    sectionContact.appendChild(sectionContactH2);
    sectionContact.appendChild(address);
    sectionContact.appendChild(phone);
    phone.appendChild(number);

    const main = document.querySelector("main");
    main.appendChild(hero);
    main.appendChild(infoContainer);
  });
};

displayTemple();
