// import React from "react";
// import Matter from "matter-js";
// import World from "matter-js";


// class Scene extends React.Component {

//     constructor(props) {
//         super(props)
//     }
//     componentDidMount() {
//         var Engine = Matter.Engine,
//             Render = Matter.Render,
//             Runner = Matter.Runner,
//             Bodies = Matter.Bodies,
//             Composite = Matter.Composite,
//             Constraint = Matter.Constraint,
//             Mouse = Matter.Mouse,
//             MouseConstraint = Matter.MouseConstraint;
//         var engine = Engine.create({
//             gravity: { scale: 0 },
//         });
//         var world = engine.world;
//         var render = Render.create({
//             element: this.refs.scene,
//             engine: engine,
//             options: {
//                 wireframes: false,
//                 background: 'blue'
//             },
//         });

//         Render.run(render); // run the renderer
//         var runner = Runner.create(); // create runner
//         Runner.run(runner, engine); // run the engine

//         const chicken = Bodies.rectangle(150, 400, 20, 20, {
//             label:"chicken",
//             isSleeping: true,

//         } )

//         const hat = Bodies.circle(400, 400, 20, {
//             label:"hat",
//             isSleeping: true,
//             // render: {
//             //     sprite: {
//             //       texture: "./assets/yicken.png"
//             //     }
//             //   }
//         }) 

//         Composite.add(world,chicken)
//         Composite.add(world,hat)

//         console.log(chicken)
        

//        var constOptions = {
//         bodyA: chicken,
//         bodyB: hat,
//         length: 50,
//         stiffness: 1,
//         render: {
//             visible: false
//         },
//         vector: { x: 100, y: 100 }
//     }

//         Composite.add(World,Constraint.create(constOptions))














//     }

//     render(){
//         return(
//             <>
//             <div ref="scene" id="world"/>           
//             </>
//         )
//     }
// }

// export default Scene