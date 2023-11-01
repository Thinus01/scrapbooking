// Home to all CSS styling fun
import Con1 from "../sub/CSS/con1/con1";
import Con2 from "../sub/CSS/con2/con2";

export function CSS() {
  return <>
      <h1 class="CSSIntro offset-4">CSS Interesting Concepts</h1>
      <section class="CSSStyles offset-1 col-10">
        <Con1 />
        <Con2 />
      </section>
  </>
}