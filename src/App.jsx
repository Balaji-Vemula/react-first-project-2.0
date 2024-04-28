import { Fragment} from "react";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Wrapper from "./Wrapper";

function App() {
  // -------- Different ways of omit unnecessary divs --------

  // First way is to list all the siblings in comma separated array
  // return (
  //   [
  //     <Header />,
  //     <main>
  //       <section id="core-concepts">
  //         <h2>Core Concepts</h2>
  //         <ul>
  //           {/* <CoreConcept
  //             title="Components"
  //             description="The core UI building block - compose the user interface by combining multiple components."
  //             image={componentsImg}
  //           />
  //           <CoreConcept
  //             title="JSX"
  //             description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
  //             image={jsxImg}
  //           />
  //           <CoreConcept
  //             title="Props"
  //             description="Make components configurable (and therefore reusable) by passing input data to them."
  //             image={propsImg}
  //           />
  //           <CoreConcept
  //             title="State"
  //             description="React-managed data which, when changed, causes the component to re-render & the UI to update."
  //             image={stateImg}
  //           /> */}

  //           {CORE_CONCEPTS.map((item) => {
  //             return (
  //               <CoreConcept
  //                 key={item.title}
  //                 title={item.title}
  //                 description={item.description}
  //                 image={item.image}
  //               />
  //             );
  //           })}
  //         </ul>
  //       </section>
  //       <section id="examples">
  //         <h2>Examples</h2>
  //         <menu>
  //           <TabButton
  //             isSelected={selectedTopic === "components"}
  //             onSelect={() => handleSelect("components")}
  //           >
  //             Components
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "jsx"}
  //             onSelect={() => handleSelect("jsx")}
  //           >
  //             JSX
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "props"}
  //             onSelect={() => handleSelect("props")}
  //           >
  //             Props
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "state"}
  //             onSelect={() => handleSelect("state")}
  //           >
  //             State
  //           </TabButton>
  //         </menu>
  //         {/* first way of rendering content conditionally using ternary operator */}
  //         {/* {!selectedTopic ? (
  //           <p>Please select a topic.</p>
  //         ) : (
  //           <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[selectedTopic].code}</code>
  //             </pre>
  //           </div>
  //         )} */}
  //         {/* Second way of rendering content conditionally using && */}
  //         {/* {!selectedTopic && <p>Please select a topic.</p>}
  //         {selectedTopic && (
  //           <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[selectedTopic].code}</code>
  //             </pre>
  //           </div>
  //         )} */}
  //         {/* Third way of rendering content conditionally using variable and
  //          a if block outside of return statement(scroll up) */}
  //         {tableContent}
  //       </section>
  //     </main>
  //   ]
  // );

  // Second way is to use a Dummy Component which just returns props.children
  // return (
  //   <Wrapper>
  //     <Header />
  //     <main>
  //       <section id="core-concepts">
  //         <h2>Core Concepts</h2>
  //         <ul>
  //           {/* <CoreConcept
  //             title="Components"
  //             description="The core UI building block - compose the user interface by combining multiple components."
  //             image={componentsImg}
  //           />
  //           <CoreConcept
  //             title="JSX"
  //             description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
  //             image={jsxImg}
  //           />
  //           <CoreConcept
  //             title="Props"
  //             description="Make components configurable (and therefore reusable) by passing input data to them."
  //             image={propsImg}
  //           />
  //           <CoreConcept
  //             title="State"
  //             description="React-managed data which, when changed, causes the component to re-render & the UI to update."
  //             image={stateImg}
  //           /> */}

  //           {CORE_CONCEPTS.map((item) => {
  //             return (
  //               <CoreConcept
  //                 key={item.title}
  //                 title={item.title}
  //                 description={item.description}
  //                 image={item.image}
  //               />
  //             );
  //           })}
  //         </ul>
  //       </section>
  //       <section id="examples">
  //         <h2>Examples</h2>
  //         <menu>
  //           <TabButton
  //             isSelected={selectedTopic === "components"}
  //             onSelect={() => handleSelect("components")}
  //           >
  //             Components
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "jsx"}
  //             onSelect={() => handleSelect("jsx")}
  //           >
  //             JSX
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "props"}
  //             onSelect={() => handleSelect("props")}
  //           >
  //             Props
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "state"}
  //             onSelect={() => handleSelect("state")}
  //           >
  //             State
  //           </TabButton>
  //         </menu>
  //         {/* first way of rendering content conditionally using ternary operator */}
  //         {/* {!selectedTopic ? (
  //           <p>Please select a topic.</p>
  //         ) : (
  //           <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[selectedTopic].code}</code>
  //             </pre>
  //           </div>
  //         )} */}
  //         {/* Second way of rendering content conditionally using && */}
  //         {/* {!selectedTopic && <p>Please select a topic.</p>}
  //         {selectedTopic && (
  //           <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[selectedTopic].code}</code>
  //             </pre>
  //           </div>
  //         )} */}
  //         {/* Third way of rendering content conditionally using variable and
  //          a if block outside of return statement(scroll up) */}
  //         {tableContent}
  //       </section>
  //     </main>
  //   </Wrapper>
  // );

  // Third way is to use a empty tag
  // return (
  //   <>
  //     <Header />
  //     <main>
  //       <section id="core-concepts">
  //         <h2>Core Concepts</h2>
  //         <ul>
  //           {/* <CoreConcept
  //             title="Components"
  //             description="The core UI building block - compose the user interface by combining multiple components."
  //             image={componentsImg}
  //           />
  //           <CoreConcept
  //             title="JSX"
  //             description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
  //             image={jsxImg}
  //           />
  //           <CoreConcept
  //             title="Props"
  //             description="Make components configurable (and therefore reusable) by passing input data to them."
  //             image={propsImg}
  //           />
  //           <CoreConcept
  //             title="State"
  //             description="React-managed data which, when changed, causes the component to re-render & the UI to update."
  //             image={stateImg}
  //           /> */}

  //           {CORE_CONCEPTS.map((item) => {
  //             return (
  //               <CoreConcept
  //                 key={item.title}
  //                 title={item.title}
  //                 description={item.description}
  //                 image={item.image}
  //               />
  //             );
  //           })}
  //         </ul>
  //       </section>
  //       <section id="examples">
  //         <h2>Examples</h2>
  //         <menu>
  //           <TabButton
  //             isSelected={selectedTopic === "components"}
  //             onSelect={() => handleSelect("components")}
  //           >
  //             Components
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "jsx"}
  //             onSelect={() => handleSelect("jsx")}
  //           >
  //             JSX
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "props"}
  //             onSelect={() => handleSelect("props")}
  //           >
  //             Props
  //           </TabButton>
  //           <TabButton
  //             isSelected={selectedTopic === "state"}
  //             onSelect={() => handleSelect("state")}
  //           >
  //             State
  //           </TabButton>
  //         </menu>
  //         {/* first way of rendering content conditionally using ternary operator */}
  //         {/* {!selectedTopic ? (
  //           <p>Please select a topic.</p>
  //         ) : (
  //           <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[selectedTopic].code}</code>
  //             </pre>
  //           </div>
  //         )} */}
  //         {/* Second way of rendering content conditionally using && */}
  //         {/* {!selectedTopic && <p>Please select a topic.</p>}
  //         {selectedTopic && (
  //           <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[selectedTopic].code}</code>
  //             </pre>
  //           </div>
  //         )} */}
  //         {/* Third way of rendering content conditionally using variable and
  //          a if block outside of return statement(scroll up) */}
  //         {tableContent}
  //       </section>
  //     </main>
  //   </>
  // );

  // Fourth way and most recommended way is to use Fragment component from the React library
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
