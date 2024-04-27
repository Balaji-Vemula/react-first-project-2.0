import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

  function handleSelect() {
    console.log('handleSelect')
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentsImg}
            />
            <CoreConcept
              title="JSX"
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
              image={jsxImg}
            />
            <CoreConcept
              title="Props"
              description="Make components configurable (and therefore reusable) by passing input data to them."
              image={propsImg}
            />
            <CoreConcept
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
              image={stateImg}
            /> */}

            {CORE_CONCEPTS.map((item) => {
              return (
                <CoreConcept
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
