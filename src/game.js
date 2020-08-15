class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //camera angel 75, ratio, neareat vew to furtheset

    this.renderer = new THREE.WebGLRenderer(); // create WebGLRenderer
    this.renderer.setSize(window.innerWidth, window.innerHeight); //set size to the window
    document.body.appendChild(this.renderer.domElement); // append the renderer to the dom

    const geometry = new THREE.BoxGeometry(1, 1, 1); // cube
    const light = new THREE.DirectionalLight(0xffffff); // white light
    light.position.set(0, 20, 10); // light position x, y, z
    const ambient = new THREE.AmbientLight(0x707070); // soft white light

    const material = new THREE.MeshPhongMaterial({ color: 0x00aaff, wireframe: true }); // blue, wireframe

    this.cube = new THREE.Mesh(geometry, material); // create the cube

    this.scene.add(this.cube); // add the cube to scene
    this.scene.add(light); // lights
    this.scene.add(ambient);

    this.camera.position.z = 3; //camera 3 away from center pivot in z

    this.animate(); // call animation function to animate the cube
  }

  animate() {
    const game = this;
    requestAnimationFrame(function () {
      //window method, updates 60 times a second
      game.animate();
    });

    // how much rotation to update every time
    this.cube.rotation.x += 0.05;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera); // make WebGl render the scene and camera
  }
}
