import Head from "next/head";
import Button from "../components/Button";
import CounterCard from "../components/CounterCard";
import MembersCard from "../components/MembersCard";
import UpdatesCard from "../components/UpdatesCard";

export default function Home() {
  return (
    <div>
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - Home</title>
        <meta
          name="description"
          content="Engage and empower NU community, through technology, to develop their communities. IEEE NU | Visualize The Future"
        />
      </Head>
      {/* Hero Section */}
      <header className="hero">
        <div>
          <p className="gray-info">since 1963</p>
          <h1>Be A Part in One Of The Biggest Tech Communities!</h1>
          <p>
            If you are intrested in any tecnology Field, You are in the right
            place. Join IEEE @ Nile Universty Student Branch and Start the
            learning Journey!
          </p>
          <Button type="link" color="primary" href="#">
            Join Now
          </Button>
        </div>
        <div>
          <img src="#" />
        </div>
      </header>
      {/* Main Content */}
      <main>
        {/* Counters */}
        <section>
          <h3>We've Achieved</h3>
          <div>
            <CounterCard number="15" info="event" />
            <CounterCard number="500" info="Member" />
            <CounterCard number="10" info="Awards" />
          </div>
        </section>
        {/* Past Partners */}
        <section>
          <h3>Past Partners</h3>
          <img src="#" />
          <img src="#" />
          <img src="#" />
          <img src="#" />
          <img src="#" />
          <img src="#" />
        </section>
        <section>
          <h3>Branch Updates</h3>
          <div>
            <UpdatesCard
              title="Hosting of IEEE Egypt Section Closing Ceremony"
              date="25/12/2021"
            />
            <UpdatesCard
              title="Partnering with Nile Preneurs Explore Program"
              date="29/11/2022"
            />
            <UpdatesCard
              title="Opening 2022 Members Recruitment Application"
              date="27/10/2021"
            />
          </div>
        </section>
        <section>
          <h3>Excutive Officers</h3>
          <div>
            <MembersCard
              name="Youssef Nasser"
              position="Chairman"
              school="Faculty Of Engineering"
            />
            <MembersCard
              name="Yasmeen Yehia"
              position="Vice Chairman"
              school="Faculty Of Computer Science"
            />
            <MembersCard
              name="Omar Khaled"
              position="Technical Director"
              school="Faculty Of Engineering"
            />
          </div>
        </section>
        <section>
          <div>
            <h1>Subscribe to Our Monthly Newsletter!</h1>
            <input type="text" placeholder="Email" />
            <Button type="link" color="secondary" href="#">
              Subscribe
            </Button>
          </div>
          <div>
            <img src="#" />
          </div>
        </section>
      </main>
    </div>
  );
}
