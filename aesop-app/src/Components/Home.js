import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f5f5ee" }}>
      <div className="section">
        {/* div1 */}
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <div className="d-flex" style={{ backgroundColor: "#f5f5ee" }}>
                <div style={{ width: "50%", display: "flex" }}>
                  <div
                    style={{
                      width: "20%",
                      padding: "100px",
                      fontSize: "40px",
                      fontFamily: "serif",
                    }}
                  >
                    Aesop
                  </div>
                  <div
                    style={{
                      width: "35%",
                      paddingTop: "100px",
                      paddingLeft: "30px",
                    }}
                  >
                    <p style={{ fontSize: "15px" }}>Potent and peerless</p>
                    <p style={{ fontSize: "25px" }}>
                      B Triple C Facial Balancing Gel
                    </p>
                    <p style={{ fontSize: "15px" }}>
                      Rich in Vitamins B and C, this lightly hydrating gel with
                      a honey-like texture,replanishes,softness and balance the
                      skin
                    </p>
                    <input
                      placeholder="Discover formulation"
                      style={{ padding: "15px", backgroundColor: "#f5f5ee" }}
                    />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/3MBwyQNwPZDKq8hxzzLh1Q/7905dac84e46772f112be054e7e97404/Aesop_B_Triple_C_2024_Web_Homepage_Primary_1_Full_Bleed_Desktop_2880x1044px.jpg"
                    class="d-block w-100 "
                    height="500"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item " data-bs-interval="10000">
              <div className="d-flex" style={{ backgroundColor: "#f5f5ee" }}>
                <div style={{ width: "50%", display: "flex" }}>
                  <div
                    style={{
                      width: "20%",
                      padding: "100px",
                      fontSize: "40px",
                      fontFamily: "serif",
                    }}
                  >
                    Aesop
                  </div>
                  <div
                    style={{
                      width: "35%",
                      paddingTop: "100px",
                      paddingLeft: "30px",
                    }}
                  >
                    <p style={{ fontSize: "15px" }}>A Festive Gesture</p>
                    <p style={{ fontSize: "25px" }}>Joyous Gift Preparation</p>
                    <p style={{ fontSize: "15px" }}>
                      To celebrate the festive season, all gift orders will be
                      wrapped in a decorative sleeve perfect for sending
                      directly to recipients. Gift wrapping is available to add
                      to your order at checkout.
                    </p>
                    <input
                      placeholder="Browse the Gift Guide"
                      style={{ padding: "15px", backgroundColor: "#f5f5ee" }}
                    />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/4XCMY8ZujIXt46JzHuA8k7/a0eefda38b29a4cc18060cdf5b6836fa/Aesop_Lucent_2023_Web_Homepage_Primary_50-50_Desktop_1536x950px.jpg"
                    class="d-block w-100 "
                    height="500"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item " data-bs-interval="10000">
              <div className="d-flex" style={{ backgroundColor: "#f5f5ee" }}>
                <div style={{ width: "50%", display: "flex" }}>
                  <div
                    style={{
                      width: "20%",
                      padding: "100px",
                      fontSize: "40px",
                      fontFamily: "serif",
                    }}
                  >
                    Aesop
                  </div>
                  <div
                    style={{
                      width: "35%",
                      paddingTop: "100px",
                      paddingLeft: "30px",
                    }}
                  >
                    <p style={{ fontSize: "15px" }}>
                      A featherlight hydrating serum
                    </p>
                    <p style={{ fontSize: "25px" }}>
                      Lucent Facial Concentrate
                    </p>
                    <p style={{ fontSize: "15px" }}>
                      Explore the skin-supportive benefits of this lightweight
                      daily hydrator,replete with vitamins and botanicals.
                    </p>
                    <input
                      placeholder="Discover more"
                      style={{ padding: "15px", backgroundColor: "#f5f5ee" }}
                    />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/1Ehomdegy2vB6ERUwELzqz/a0617ec70337d07ef3c5250afb389900/Aesop_Festive_Sleeve_Asia_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
                    class="d-block w-100 "
                    height="500"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* div2 */}
        <div
          className="d-flex"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div style={{ width: "40%", padding: "60px" }}>
            <p style={{ fontSize: "15px" }}>Skin Care+</p>
            <p style={{ fontSize: "25px" }}>
              Intensive formulations for complex skin
            </p>
            <p style={{ fontSize: "15px" }}>
              Explore products formulated with mature skin and urban dwellers in
              mind, to provide daily hydration and the additional benefit of
              potent vitamins and anti-oxidants.
            </p>
            <input
              placeholder="Browse formulations"
              style={{ padding: "15px", backgroundColor: "#f5f5ee" }}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators" >
                <button
                style={{color:"black!important"}}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* div3 */}
        <div
          className="d-flex"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div style={{ flexGrow: 1 }}>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6P8C5RW1wmFCchDrWBshjp/b1cc91da2597bb9a613dac7a1b5a1636/Aesop_A_Guide_to_Caring_for_Dry_Skin_Web_Secondary_Mid_05_Desktop_2560x1440px.jpg"
              class="d-block "
              height="400"
              width="700px"
              alt="..."
            />
          </div>
          <div style={{ width: "40%", padding: "60px" }}>
            <p style={{ fontSize: "15px" }}>The Athenaenum</p>
            <p style={{ fontSize: "25px" }}>A guide to caring for dry skin</p>
            <p style={{ fontSize: "15px" }}>
              Exploring the causes behind parched skin and formulations to
              restore hydration.
            </p>
            <input
              placeholder="Read more"
              style={{ padding: "15px", backgroundColor: "#f5f5ee" }}
            />
          </div>
        </div>

        {/* div4 */}
        <div
          className="d-flex"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div style={{ width: "40%", padding: "60px" }}>
            <p style={{ fontSize: "15px" }}>Online only</p>
            <p style={{ fontSize: "25px" }}>
              Familiar fragrances, doubled in volume
            </p>
            <p style={{ fontSize: "15px" }}>
              For those who feel that 50 millilitres just fly by too quickly,
              these of our unorthodox Eaux de Parfum-Tacit, Hwyl and Marrakech
              Intense-are now available, exclusively online, in larger100ml
              bottles.
            </p>
            <input
              placeholder="Discover formulation"
              style={{
                padding: "15px",
                backgroundColor: "#f5f5ee",
                width: "370px",
              }}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/eyd7TwhtFoPcMMtmiYUYV/fcba6f1a9329b7cd9721e9b2c04feb71/Aesop_A_Guide_to_Fragrance_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg"
              class="d-block "
              height="400"
              width="770px"
              alt="..."
            />
          </div>
        </div>

        {/* div5 */}
        <div
          className="d-flex"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div style={{ flexGrow: 1 }}>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg"
              class="d-block "
              height="400"
              width="770px"
              alt="..."
            />
          </div>
          <div style={{ width: "40%", padding: "60px" }}>
            <p style={{ fontSize: "25px" }}>Efficacious pairings</p>
            <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
              Our consultants have long combined complementary formulations to
              effect additional benefits for the skin. Incorporate this
              time-honoured practice into your regimen with our recommended
              bundles.
            </p>
            <input
              placeholder="Browse Skin Care Bundles"
              style={{
                padding: "15px",
                backgroundColor: "#f5f5ee",
                width: "350px",
              }}
            />
          </div>
        </div>

        {/* div6 */}
        <div
          className="d-flex"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div style={{ width: "40%", padding: "60px" }}>
            <p style={{ fontSize: "15px" }}>Skin Care+</p>
            <p style={{ fontSize: "25px" }}>
              Intensive formulations for complex skin
            </p>
            <p style={{ fontSize: "15px" }}>
              Explore products formulated with mature skin and urban dwellers in
              mind, to provide daily hydration and the additional benefit of
              potent vitamins and anti-oxidants.
            </p>
            <input
              placeholder="Browse formulations"
              style={{ padding: "15px", backgroundColor: "#f5f5ee" }}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png"
                    class="d-block w-100"
                    style={{ width: "400px", height: "400px" }}
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* div7 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
            marginBottom: "80px",
          }}
        >
          <div style={{ width: "700px", padding: "60px" }}>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png"
              class="d-block "
              height="150"
              width="370px"
              alt="..."
            />
          </div>
          <div style={{ flexGrow: "1", width: "900px", padding: "70px" }}>
            <p style={{ fontSize: "25px" }}>Eminently suited to all</p>
            <p style={{ fontSize: "15px" }}>
              An Aesop Gift Card is the ideal gift for the fussy, the faraway
              and anyone in between—conveniently delivered with the click of a
              mouse to conceal last-minute selections.
            </p>
            <input
              placeholder="Purchase Now"
              style={{
                padding: "15px",
                backgroundColor: "#f5f5ee",
                width: "400px",
              }}
            />
          </div>
        </div>

        {/* div8 */}
        <div
          className="d-flex"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div style={{ width: "45%", padding: "100px" }}>
            <p style={{ fontSize: "30px" }}>Store Locator</p>
            <p style={{ fontSize: "17px" }}>
              Our consultants are available to host you in-store and provide
              tailored guidance on gift purchases.{" "}
            </p>

            <input
              placeholder="Find a near by Store"
              style={{
                padding: "12px",
                backgroundColor: "#f5f5ee",
                width: "280px",
              }}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/3qMKbyDUTGRWyBlMLWxsRu/24c4cbb32427080bbb48dca6d5161962/Aesop_Fashion_Walk_II_Hero_Bleed_Desktop_2880x1620px.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://www.aesop.com/u1nb1km7t5q7/42rFCFYAbY2eFFaqO5M7pf/b6964b6c5bb2c22a36f26b146132c9d3/Aesop_Harbour_City_II_Hero_Bleed_Desktop_2880x1620px.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* div9 */}
        <div
          className="d-flex"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div style={{ flexGrow: 1 }}>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
              class="d-block "
              height="400"
              width="770px"
              alt="..."
            />
          </div>
          <div style={{ width: "40%", padding: "60px" }}>
            <p style={{ fontSize: "15px" }}>Facial Appointments</p>
            <p style={{ fontSize: "25px" }}>
              Composure for the skin and senses
            </p>
            <p style={{ fontSize: "15px" }}>
              For a well-rounded skin care regimen, Aesop Facial Appointments
              offer a series of treatments tailored to balance, stimulate and
              intensely nourish the skin.
            </p>
            <input
              placeholder="Learn more"
              style={{
                padding: "15px",
                backgroundColor: "#f5f5ee",
                width: "350px",
              }}
            />
          </div>
        </div>

        {/* div10 */}
        <div className="paraContainer">
          <p className="para">
            ‘How bright the windows are, when the dear sun shineth.’
          </p>
        </div>

        {/* div11 */}
        <div class="container text-center" className="gridContainer">
          <div class="row">
            <div class="col">
              <p>Certified B Corp</p>
              <p>
                We meet the highest verified standards of social and
                environmental performance, transparency and accountability.
              </p>
            </div>
            <div class="col">
              <p>Leaping Bunny approved</p>
              <p>
                Our formulations are approved as cruelty free under the Cruelty
                Free International Leaping Bunny programme.
              </p>
            </div>
            <div class="col">
              <p>PETA recognition</p>
              <p>
                We appear on PETA's internationally recognised vegan and
                cruelty-free lists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
