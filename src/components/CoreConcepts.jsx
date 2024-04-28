import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {CORE_CONCEPTS.map((item) => {
        return (
          <CoreConcept
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </ul>
  </section>
  )
}
