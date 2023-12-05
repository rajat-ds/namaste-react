// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React")
const root = ReactDOM.createRoot(document.getElementById("root"))

// //React Element( object)
// console.log(heading)

{/* <div id="parent">
  <div id="child1">
    <h1> I am h1 tag</h1>
    <h2> I am h2 tag</h2>
  </div>
  <div id="child2">
    <h1> I am h1 tag</h1>
    <h2> I am h2 tag</h2>
  </div>
</div>; */}



const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
]);

root.render(parent);
