import { useState } from "react";

const aboutInfo = [
  {
    img: "img/message-svgrepo-com.svg",
    title: "Communication",
    info: "Single point of contact, in sync with the tools you use. We speak your language.",
  },
  {
    img: "img/keyhole-in-a-shield-black-shape-svgrepo-com.svg",
    title: "Reliability",
    info: "We keep our promises, provide upfront timelines and bring predictability",
  },
  {
    img: "img/magic-wand-svgrepo-com.svg",
    title: "Quality First",
    info: "Quality first. All projects are backed by our fanatic support & 100% satisfaction guarantee.",
  },
  {
    img: "img/person-button-svgrepo-com.svg",
    title: "Families",
    info: "Rent a beautiful house for your family. Choose from flats in societies and individual apartments.",
  },
];

const destination = [
  {
    name: "Stella Marina B&B",
    price: 230,
    bedroom: "2",
    rating: "4.8",
    location: "Italy",
    bio: "Rooms have a flat-screen TV. Certain units include a seating area for your convenience. Certain rooms feature views of the pool or garden. Rooms are equipped with a private bathroom. The bed and breakfast also offers bike hire and car hire. Otranto is 44 km from STELLA MARINA B&amp;B, while San Cassiano is 27 km from the property. The nearest airport is Brindisi - Salento Airport, 85 km from STELLA MARINA B&B.",
    images:
      "imgApartments/306979342.jpg, imgApartments/312598469.jpg, imgApartments/319124304.jpg, imgApartments/306706636.jpg, imgApartments/319124304.jpg",
  },
  {
    name: "Terra di Vento",
    price: 266,
    bedroom: "1",
    rating: "3.4",
    location: "Italy",
    bio: "All units are fitted with air conditioning, a flat-screen TV with streaming services, a coffee machine, a bidet, a hair dryer and a wardrobe. With a private bathroom fitted with a shower and free toiletries, units at the bed and breakfast also boast free WiFi, while some rooms include a balcony. At the bed and breakfast, each unit has bed linen and towels.",
    images:
      "imgApartments/364941722.jpg, imgApartments/364939788.jpg, imgApartments/522931607.jpg, imgApartments/524138347.jpg, imgApartments/531055790.jpg",
  },
  {
    name: "Hotel Victoria",
    price: 120,
    bedroom: "1",
    rating: "1.7",
    location: "Germany",
    bio: "The 4-star Hotel Victoria offers air-conditioned and soundproofed rooms and suites with wooden floors and colourful pop art paintings. All rooms include a satellite TV, mini-fridge and safety deposit box.",
    images:
      "imgApartments/7517397.jpg, imgApartments/47201544.jpg, imgApartments/71853559.jpg, imgApartments/71971701.jpg",
  },
  {
    name: "Secret cottage",
    price: 155,
    bedroom: "1",
    rating: "4.3",
    location: "England",
    bio: "This holiday home features 1 bedroom, a kitchen with a dishwasher and an oven, a flat-screen TV, a seating area and 1 bathroom fitted with a walk-in shower. Towels and bed linen are available in the holiday home. The accommodation offers a fireplace.",
    images:
      "imgApartments/cot1.jpg, imgApartments/cot2.jpg, imgApartments/cot3.jpg, imgApartments/cot4.jpg, imgApartments/cot5.jpg",
  },
  {
    name: "Smarthotel Bodø",
    price: 95,
    bedroom: "1",
    rating: "4.1",
    location: "Norway",
    bio: "All rooms in the hotel are fitted with a flat-screen TV. Featuring a private bathroom with a shower and a hairdryer, some units at Smarthotel Bodø also feature a city view. At the accommodation the rooms are fitted with bed linen and towels.",
    images:
      "imgApartments/bod1.jpg, imgApartments/bod2.jpg,imgApartments/bod3.jpg,imgApartments/bod4.jpg,imgApartments/bod5.jpg,",
  },
  {
    name: "Lakeside Hotel Plitvice",
    price: 135,
    bedroom: "1",
    rating: "4.5",
    location: "Croatia",
    bio: "Sve hotelske sobe uključuju klima-uređaj, prostor za sjedenje, TV ravnog ekrana sa satelitskim programima, sef te vlastitu kupaonicu s besplatnim kozmetičkim priborom i sušilom za kosu. Sve sobe opremljene su električnim kuhalom, a pojedine imaju kuhinju s hladnjakom, perilicom posuđa i pećnicom. Svaka soba u okviru objekta Lakeside Hotel Plitvice opremljena je posteljinom i ručnicima.",
    images:
      "imgApartments/plit1.jpg, imgApartments/plit2.jpg,imgApartments/plit3.jpg,imgApartments/plit4.jpg,imgApartments/plit5.jpg,imgApartments/plit6.jpg,",
  },
];

export default function App() {
  //**For future modifications */
  const [items, setItems] = useState([]);
  function handleItems(e) {
    console.log(items);
    setItems(() => e);
  }

  return (
    <>
      <Navline></Navline>
      <Header></Header>
      <About></About>
      <Form onAddItem={handleItems}></Form>
      <FilteredItems
        location={items.location}
        bedroom={items.bedroom}
        price={items.price}
        rating={items.rating}
      ></FilteredItems>
      <SpecialOffers></SpecialOffers>
      <Footer></Footer>
    </>
  );
}

function Navline() {
  return (
    <div className="navline">
      <div className="container">
        <div className="navlineLogo">
          <img alt="#" src="img/house-search-svgrepo-com.svg"></img>
          <div className="logoText">
            <p>
              <b>Peace</b> Of
            </p>
            <p>Mind</p>
          </div>
        </div>
        <div className="navlineLinks">
          <a href="bravo">Home</a>
          <a href="basf">Rent a House</a>
          <a href="fsafsa">About</a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="backgroundImg">
        <img
          alt="#"
          src="img/—Pngtree—luxury house on night with_15583679.png"
        ></img>{" "}
        <div className="container">
          <div className="bio">
            <h1>Let's Find a Home That's Perfect For You.</h1>
            <p>
              Each property has it's own meaning and we are ready to you to get
              a property according to your taste.
            </p>
            <div className="alignCenter">
              <button className="findHome">Find a Home</button>
            </div>
          </div>
        </div>
        <div className="hero"></div>
      </div>
    </>
  );
}

function About() {
  return (
    <div className="about">
      <div className="container">
        <h2>What we do</h2>
        <div className="flexCard">
          {aboutInfo.map((item) => (
            <AboutCards item={item} key={item.title}></AboutCards>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutCards({ item }) {
  return (
    <div className="card">
      <img alt="#" src={item.img}></img>
      <h3>{item.title}</h3>
      <p>{item.info}</p>
    </div>
  );
}

//**VARIJABLA FORM INPUTA, USE STATE FOR SAVING MEMORY OF FORM*/

function Form({ onAddItem }) {
  const [location, setLocation] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const filterArray = { location, bedroom, price, rating };
    onAddItem(filterArray);
  }

  return (
    <div className="offersFilter">
      <div className="container">
        <div className="filterWindow">
          <h1>Search Your Dreams</h1>
          <form>
            <div className="filterOptions">
              <div className="row">
                <div>
                  <label>Select your location:</label>
                  <select onChange={(e) => setLocation(e.target.value)}>
                    <option></option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>England</option>
                    <option>Norway</option>
                    <option>Croatia</option>
                    <option>France</option>
                  </select>
                </div>
                <div>
                  <label>
                    Price:<span> {price}€</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    onChange={(e) => setPrice(e.target.value)}
                    step={20}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div>
                  <label>Bedroom:</label>
                  <select
                    onChange={(e) => setBedroom(e.target.value.split(" ")[0])}
                  >
                    <option></option>
                    <option>1 bedroom</option>
                    <option>2 bedroom</option>
                    <option>3 bedroom</option>
                    <option>4 bedroom</option>
                    <option>5 bedroom</option>
                  </select>
                </div>
                <div>
                  <label>Rating:</label>
                  <select onChange={(e) => setRating(e.target.value)}>
                    <option></option>
                    <option>1★</option>
                    <option>2★</option>
                    <option>3★</option>
                    <option>4★</option>
                    <option>5★</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row btnBox">
              <button onClick={handleSubmit}>Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

//**CREATED FILTERED ITEM */
function FilteredItems({ location, bedroom, price, rating }) {
  return (
    <div className="filteredItems">
      <div className="container">
        <div>
          {destination.map((destination) =>
            //case 1:
            !location &&
            bedroom === destination.bedroom &&
            Number(price) >= destination.price &&
            rating.split("")[0] ===
              Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 2:
            !location &&
              !bedroom &&
              Number(price) >= destination.price &&
              rating.split("")[0] ===
                Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 3:
            !location &&
              !bedroom &&
              !Number(price) &&
              rating &&
              rating.split("")[0] ===
                Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 4: početno stanje
            !location && !bedroom && !Number(price) && !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 5:
            location === destination.location &&
              bedroom === destination.bedroom &&
              Number(price) >= destination.price &&
              !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 6:
            location === destination.location &&
              bedroom === destination.bedroom &&
              !price &&
              !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 7:
            location === destination.location &&
              !bedroom &&
              !price &&
              !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 8:
            location === destination.location &&
              !bedroom &&
              Number(price) >= destination.price &&
              rating.split("")[0] ===
                Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 9:
            location === destination.location &&
              bedroom === destination.bedroom &&
              !price &&
              rating.split("")[0] ===
                Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 10:
            location === destination.location &&
              !bedroom &&
              !price &&
              rating.split("")[0] ===
                Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 11:
            !location &&
              bedroom === destination.bedroom &&
              Number(price) >= destination.price &&
              !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 12:
            !location &&
              bedroom === destination.bedroom &&
              !price &&
              !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 13
            !location &&
              !bedroom &&
              Number(price) >= destination.price &&
              !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 14:
            location === destination.location &&
              !bedroom &&
              Number(price) >= destination.price &&
              !rating ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 15:
            !location &&
              bedroom === destination.bedroom &&
              !price &&
              rating.split("")[0] ===
                Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : //case 16:
            location === destination.location &&
              bedroom === destination.bedroom &&
              Number(price) >= destination.price &&
              rating.split("")[0] ===
                Math.round(destination.rating).toString() ? (
              <Item destination={destination} key={destination.name}></Item>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Item({ destination }) {
  const [bio, setBio] = useState("");
  function openBio(element) {
    setBio(element);
  }

  function closeBio(e) {
    console.log(setBio([]));
  }
  return (
    <div className="item">
      <div className="imgEffect">
        <img
          alt="#"
          src={destination.images.split(",").map((e) => e.trim())[0]}
        ></img>
        <button className="moreImage" onClick={() => openBio(destination)}>
          +
        </button>
      </div>
      <h3>{destination.name}</h3>
      <div className="location">
        <img alt="#" src="img/location-pin-svgrepo-com.svg"></img>
        <span>{destination.location}</span>
      </div>
      <br></br>
      <span>Price:{destination.price}€</span>
      {bio && <Bio item={bio} onclose={closeBio}></Bio>}
    </div>
  );
}

function Bio({ item, onclose }) {
  const [step, setStep] = useState(0);

  if (item.length !== 0)
    return (
      <div className="overlayBio">
        <div className="overlayBtn">
          <button onClick={onclose}>
            Close <span>X</span>
          </button>
        </div>

        <div className="overlayMain">
          <div className="overlayImg">
            <button onClick={() => setStep((e) => (e === 0 ? (e = 0) : e - 1))}>
              ➖
            </button>
            <img
              alt="#"
              src={item.images.split(",").map((e) => e.trim())[step]}
            ></img>
            <button
              onClick={() => {
                const max = item.images.split(",").length - 1;
                console.log(max);
                setStep((e) => (e === max ? (e = 0) : e + 1));
              }}
            >
              ➕
            </button>
          </div>
          <div className="overlayText">
            <div className="itemNameRating">
              <h2>{item.name}</h2>
              <span className="itemRating">{item.rating}</span>
            </div>
            <div className="location">
              <img alt="#" src="img/location-pin-svgrepo-com.svg"></img>
              <p>{item.location}</p>
            </div>
            <h3>Price: {item.price}€ per night</h3>
            <p>{item.bio}</p>
          </div>
        </div>
      </div>
    );
}

//**SHOW MORE ITEM IMAGE */
function SpecialOffers() {
  return (
    <div className="specialOffers">
      <div className="container">
        <h1>Top Destination</h1>
        <div className="specialItems">
          {destination.slice(0, 3).map((e) => (
            <SpecialItem
              name={e.name}
              price={e.price}
              bedroom={e.bedroom}
              rating={e.rating}
              bio={e.bio}
              location={e.location}
              images={e.images.split(",").map((e) => e.trim())}
              key={e.name}
            ></SpecialItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpecialItem({ name, price, bedroom, rating, bio, location, images }) {
  return (
    <div className="specialItem">
      <img alt="#" src={images[0]}></img>
      <h3>{name}</h3>
      <div className="location">
        <img alt="#" src="img/location-pin-svgrepo-com.svg"></img>
        <span>{location}</span>
      </div>

      <br></br>
      <span>Price:{price}€</span>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contactUs">
          <form>
            <label>Name</label>
            <input></input>
            <label>Email</label>
            <input></input>
            <label>Message</label>
            <textarea></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="line"></div>
        <div className="icons">
          <div className="icon">
            <img
              onClick={() => window.alert("Coming soon...")}
              alt="#"
              src="imgIcons/facebook-round-svgrepo-com.svg"
            ></img>
          </div>
          <div className="icon">
            <img
              onClick={() => window.alert("Coming soon...")}
              alt="#"
              src="imgIcons/instagram-round-svgrepo-com.svg"
            ></img>
          </div>
          <div className="icon">
            <img
              onClick={() => window.alert("Coming soon...")}
              alt="#"
              src="imgIcons/linkedin-round-svgrepo-com.svg"
            ></img>
          </div>
          <div className="icon">
            <img
              onClick={() => window.alert("Coming soon...")}
              alt="#"
              src="imgIcons/twitter-2-svgrepo-com.svg"
            ></img>
          </div>
          <div className="icon">
            <img
              onClick={() => window.alert("Coming soon...")}
              alt="#"
              src="imgIcons/youtube-round-svgrepo-com.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
