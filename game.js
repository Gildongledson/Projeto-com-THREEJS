//variaveis da cena
var camera, scene, renderer, material, maior=0.1, menor= -0.1;
init();

function init() {
    // Renderizador.
    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Adicionando redenrizador na tela
    document.body.appendChild(renderer.domElement);

    // Criando a camera.
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    
    camera.position.z = 300;
    camera.position.y = 50;
    
    // criando a cena.
    scene = new THREE.Scene();

    // Criando o material
    material = new THREE.MeshPhongMaterial();

    //criando a primeira peça.
    var geometry = new THREE.BoxGeometry(20, 70, 20);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    this.mesh = mesh;

    mesh.position.x = 0;
		mesh.position.y = 0;
		mesh.position.z = 0;


    
    //criando a segunda peça
    var geometryy = new THREE.BoxGeometry(80, 10, 10);
    const meshh = new THREE.Mesh(geometryy, material);
    scene.add(meshh);
    this.meshh = meshh;

    meshh.position.x = 40;
		meshh.position.y = 0;
		meshh.position.z = 0;

    //criando a terceira peça
    var geomet= new THREE.BoxGeometry(10, 40, 10);
    const braco03 = new THREE.Mesh(geomet, material);
    scene.add(braco03);
    this.braco03 = braco03;

    braco03.position.x = 0;
		braco03.position.y = -20;
		braco03.position.z = 0;

    //criando junta
    const geometrry = new THREE.CylinderGeometry(10, 10, 10);
    const junta01 = new THREE.Mesh( geometrry, material );
    scene.add( junta01 );
    this.junta01 = junta01;

    junta01.position.x = 0;
		junta01.position.y = 40;
		junta01.position.z = 0;

    //criando junta
    const junta02 = new THREE.Mesh( geometrry, material );
    scene.add( junta02 );
    this.junta02 = junta02;

    junta02.position.x = 40;
		junta02.position.y = 0;
		junta02.position.z = 0;

    //criando junta
    const formaovo = new THREE.SphereGeometry(10, 10, 10);
    const mao = new THREE.Mesh( formaovo, material );
    scene.add( mao);
    this.mao = mao;

    mao.position.x = 0;
    mao.position.y = -20;
    mao.position.z = 0;

    //criando a ligação

    mesh.add(junta01);
    junta01.add(meshh);
    meshh.add(junta02);
    junta02.add(braco03);
    braco03.add(mao);

 
    // Criando luz na cena.
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    //direcionando a luz na cena.
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Adicionando o listener.
    window.addEventListener('resize', onWindowResize, false);
    
    // Adicionando listener para o telcado
    document.body.addEventListener('keydown', keyPressed, false);


    
    render();

}
    //funcoes do teclado
function keyPressed(e){
  
  switch(e.key) {
    case 'ArrowUp':
    	junta01.rotateZ(0.1);
    	break;
    case 'ArrowDown':
    	junta01.rotateZ(-0.1);
      break;
    case '1':
      junta01.rotateY(-0.1);
      break;
    case '3':
      junta01.rotateY(0.1);
      break;
    case '8':
      junta02.rotateZ(0.1);
      break;
    case '2':
      junta02.rotateZ(-0.1);
      break;
    case '4':
      junta02.rotateY(-0.1);
      break;
    case '6':
      junta02.rotateY(0.1);
      break;
    case 'ArrowLeft':
      mesh.rotateY(-0.1);
      break;
    case 'ArrowRight':
      mesh.rotateY(0.1);
      break;
    
  }
  e.preventDefault();
  render();
}


//função rederizar
function render(){
	renderer.render(scene, camera);
}
//funçao redimencionar
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}