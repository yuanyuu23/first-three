import * as THREE from 'three';
const plane = new THREE.PlaneGeometry(300,300,20,20);
const material = new THREE.MeshBasicMaterial({
    color:0xff0000,
    wireframe:true,
});

const planeMesh = new THREE.Mesh(plane,material);

const positions = geometry.attributes.position;
console.log('positions',positions);

for(leti = 0; i<positions.length; i++){
    console.log(positions[i]);
}

console.log(planeMesh);
planeMesh.rotateX(Math.PI/2);
export default planeMesh;