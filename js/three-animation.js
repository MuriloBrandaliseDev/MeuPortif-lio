// Configuração da cena Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('hero-canvas'),
    alpha: true
});

// Ajusta o tamanho do canvas
function resizeCanvas() {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    
    if (needResize) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    // Ajusta a posição da câmera baseado no tamanho da tela
    if (window.innerWidth <= 576) {
        camera.position.z = 2.2;
    } else {
        camera.position.z = 3;
    }
}

// Cria a geometria do objeto 3D
const geometry = new THREE.IcosahedronGeometry(1, 1);
const material = new THREE.MeshPhongMaterial({
    color: 0x3498db,
    wireframe: true,
    wireframeLinewidth: 2
});
const shape = new THREE.Mesh(geometry, material);

// Adiciona luz
const light = new THREE.DirectionalLight(0xe74c3c, 1);
light.position.set(2, 2, 2);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Adiciona o objeto à cena
scene.add(shape);

// Animação
function animate() {
    requestAnimationFrame(animate);
    resizeCanvas();
    
    shape.rotation.x += 0.005;
    shape.rotation.y += 0.005;
    
    renderer.render(scene, camera);
}

// Adiciona listener para redimensionamento da janela
window.addEventListener('resize', resizeCanvas);

// Inicia a animação
animate(); 