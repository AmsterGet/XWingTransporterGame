/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// export const OPTIONS = {
//     GLSL_MODULES: {
//         sky_vertex: "varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}",
//         sky_fragment: "uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}"
//     }
//
// };

const GLSL_MODULES = {
    sky_vertex: "varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}",
    sky_fragment: "uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}"
};
/* harmony export (immutable) */ __webpack_exports__["e"] = GLSL_MODULES;


const WINDOW_OPTIONS = {
    gameWindowHeight: window.innerHeight,
    gameWindowWidth: window.innerWidth,
};
/* harmony export (immutable) */ __webpack_exports__["i"] = WINDOW_OPTIONS;


const GAMEFIELD_OPTIONS = {
    link: './src/images/DS.jpg',
    radius: 30,
    segmentsQuantity: 90,
    angleOfSlope: Math.PI/3,
    rotationSpeed: 0.006,
    increaseStep: 0.003,
    wholeCircle: 2*Math.PI
};
/* harmony export (immutable) */ __webpack_exports__["d"] = GAMEFIELD_OPTIONS;


const ENEMY_OPTIONS = {
    object: [],
    link: './src/JSON_Models/TIE_Fighter.json',
    rotationSpeed: 0.01,
    radius: 0.5,
    detail: 1,
    color: 0x5c3322
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ENEMY_OPTIONS;


const SKYBOX_OPTIONS = {
    link: './src/images/hubble-min.jpg',
    radius: 600,
    segmentsQuantity: 200,
    angleOfSlope: Math.PI/3,
    rotationSpeed: 0.0006,
    increaseStep: 0//0.0002
};
/* harmony export (immutable) */ __webpack_exports__["g"] = SKYBOX_OPTIONS;


const SPACESHIP_OPTIONS = {
    link: './src/JSON_Models/spaceship.json',
    inIntroCoordinates: {
        y: 88.3,
        z: 92.6
    },

    inGameCoordinates: {
        z: 3.6,//3.6
        y: 1.2//1
    },

    flyWidthBorder: WINDOW_OPTIONS.gameWindowWidth*0.002,
    flyHeightBorder: WINDOW_OPTIONS.gameWindowHeight*0.002,
    turningSpeed: 0.02,
    turningBackSpeed: 0.014,
    alignmentPosition:0
};
/* harmony export (immutable) */ __webpack_exports__["h"] = SPACESHIP_OPTIONS;


const FIGHTERSCONTAINER_OPTIONS = {
    flySpeed: 0.5,
    increaseStep: 0.04,
    distanceCoordinates: {
        y: -30,
        z: -120
    },
    maxZCoordinate: 14,
    coordinateZToPlaySound: -14
};
/* harmony export (immutable) */ __webpack_exports__["c"] = FIGHTERSCONTAINER_OPTIONS;


const SCENE3D_OPTIONS = {
    cameraOptions: {
        inIntroCoordinates: {
            y: 91,
            z: 96
        },

        inGameCoordinates: {
            z: 7,//6
            y: 1//1
        },

        verticalFieldOfView: 60,
        aspectRatio: WINDOW_OPTIONS.gameWindowWidth / WINDOW_OPTIONS.gameWindowHeight,
        nearPlane: 0.1,
        farPlane: 1000
    },

    rendererOptions: {
        pixelRatio: 7
    }

};
/* harmony export (immutable) */ __webpack_exports__["f"] = SCENE3D_OPTIONS;


const AUDIO_OPTIONS = {
    mainAudioLink: './sounds/MainSound.mp3',
    fightersFlyAudioLink: './sounds/FightersFly.mp3',
    failAudioLink: './sounds/R2D2.mp3',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = AUDIO_OPTIONS;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShapeCreator {
    constructor(){
        this.createMesh();
    }

    createMesh() {
        throw new Error("Not implemented!");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShapeCreator;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameProcess__ = __webpack_require__(3);


class XWingTransporterGame {
    constructor() {
        this.menu=document.querySelector("#menu");
        this.menuScreen = document.querySelector("#menu-screen");
        this.playButton=document.querySelector("#play");
        this.setPlayListener();
    }

    setPlayListener() {
        this.playButton.addEventListener("click", () => {
            this.addLoadingPanel();
            this.startLoading();
        });
    }

    addLoadingPanel() {
        this.menu.classList.add("hide");
        this.loading = document.createElement("div");
        this.loading.classList = "loading";
        this.menuScreen.appendChild(this.loading);
    }

    startLoading() {
        let percent = 3;
        const game=new __WEBPACK_IMPORTED_MODULE_0__GameProcess__["a" /* default */]();
        game.init();

        let id = setInterval(() => {
            if(percent === 103) {
                this.menuScreen.classList.add("hide");
                document.body.classList.add("hide-cursor");
                game.startIntro();
                clearInterval(id);
            }
            this.loading.innerText = `${percent}`+"%";
            percent += 5;
        }, 250);
        this.loading.innerText = `${percent}`+"%";
    }
}

new XWingTransporterGame();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene3D__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SkyBox__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameField__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spaceship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enemy__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Constants__ = __webpack_require__(0);








class GameProcess {
    constructor() {
        this.movingObjects=[];
        this.enemiesArray=[];
        this.lastSpaceshipPosition=0;
    };

    init() {
        this.scene3D = new __WEBPACK_IMPORTED_MODULE_0__Scene3D__["a" /* default */]();

         // let axis = new THREE.AxisHelper(500);//add temporary Axises
         // this.scene3D.scene.add(axis);

        this.skyBox = new __WEBPACK_IMPORTED_MODULE_1__SkyBox__["a" /* default */]();
        this.scene3D.scene.add(this.skyBox.mesh);
        this.movingObjects.push(this.skyBox);

        this.gameField = new __WEBPACK_IMPORTED_MODULE_2__GameField__["a" /* default */]();
        this.scene3D.scene.add(this.gameField.mesh);
        this.movingObjects.push(this.gameField);

        this.spaceship = new __WEBPACK_IMPORTED_MODULE_3__Spaceship__["a" /* default */]();
        this.scene3D.scene.add(this.spaceship.mesh);

        this.addEnemies();

    }

    startIntro() {
        this.animateIntro();
        this.scene3D.audio.playMainSound();
    }

    animateIntro() {
        this.introMovement();
        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        this.animationFrameId = requestAnimationFrame(()=>this.animateIntro());

        if (this.isIntroEnd()) {
            this.startGame();
        }
    }

    introMovement() {
        if (this.scene3D.camera.position.z > __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
            this.scene3D.camera.position.z--;
        }
        if (this.scene3D.camera.position.y > __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y) {
            this.scene3D.camera.position.y--;
        }

        //DEBUG IT
        if (this.spaceship.mesh.position.z > __WEBPACK_IMPORTED_MODULE_6__Constants__["h" /* SPACESHIP_OPTIONS */].inGameCoordinates.z) {
            this.spaceship.mesh.position.z--;
        }
        if (this.spaceship.mesh.position.y > __WEBPACK_IMPORTED_MODULE_6__Constants__["h" /* SPACESHIP_OPTIONS */].inGameCoordinates.y) {
            this.spaceship.mesh.position.y--;
        }
    }

    isIntroEnd() {
        if (this.scene3D.camera.position.y === __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y &&
            this.scene3D.camera.position.z === __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
            return true;
        }
    }

    startGame() {
        cancelAnimationFrame(this.animationFrameId);
        this.scene3D.scene.add(this.fightersContainer.mesh);
        this.spaceship.listenSpaceshipMove();
        this.enemyPosition = new THREE.Vector3();
        this.animateGameProcess();
    }

    addEnemies() {
        const enemiesQuantity=Math.floor(30+Math.random()*10);

        this.fightersContainer= new __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__["a" /* default */]();
        this.fightersContainer.setPrimaryPosition();
        this.movingObjects.push(this.fightersContainer);

        this.plane=new THREE.ObjectLoader();
        this.plane.load( __WEBPACK_IMPORTED_MODULE_6__Constants__["b" /* ENEMY_OPTIONS */].link, ( obj ) => {

            for(let i=0;i<enemiesQuantity+1;i++) {
                let copy=obj.clone();

                let enemy = new __WEBPACK_IMPORTED_MODULE_4__Enemy__["a" /* default */]();
                enemy.mesh.add(copy);
                enemy.setRandomPosition();

                if (i!==0) {//so the coordinates of each enemy don't match other enemies
                    while (this.enemiesArray.some(
                        (item) => {
                            return (item.mesh.position.x===enemy.mesh.position.x ||
                                item.mesh.position.y===enemy.mesh.position.y ||
                                item.mesh.position.z===enemy.mesh.position.z);
                        }
                    )) {
                        enemy.setRandomPosition();
                    }
                }

                this.enemiesArray.push(enemy);
                this.fightersContainer.mesh.add(enemy.mesh);
            }

        });
    }

    animateGameProcess() {
        this.movingObjects.forEach((item)=>{
            item.movement();
        });
        this.checkWholeCircle();
        this.checkFightersPosition();
        this.checkSpaceshipMovement();

        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        this.animationFrameId=requestAnimationFrame(this.animateGameProcess.bind(this));

        this.checkCollision();
    }

    checkWholeCircle() {
        if(this.gameField.isWholeCircle()) {
            this.movingObjects.forEach((item)=>{
                item.increaseMovementSpeed();
            });
        }
    }

    checkFightersPosition() {
        if (this.fightersContainer.isNearTheSpaceship()) {
            this.scene3D.audio.playFightersFly();
        }

        if (this.fightersContainer.isBehindCamera()) {
            this.fightersContainer.setPrimaryPosition();
            this.enemiesArray.forEach((item) => {
                item.setRandomPosition();
            })
        }
    }

    checkSpaceshipMovement() {
        this.lastSpaceshipPosition=this.spaceship.mesh.position.x;
        if (this.spaceship.isSpaceshipNotMove(this.lastSpaceshipPosition)) {
            this.spaceship.alignSpaceship();
        }
    }

    checkCollision() {
        this.enemiesArray.forEach(( enemy ) => {
            this.enemyPosition.setFromMatrixPosition( enemy.mesh.matrixWorld );
                if (this.enemyPosition.manhattanDistanceTo(this.spaceship.mesh.position)<=0.95) {
                    this.finishGame();
                }
        });
    }

    finishGame() {
        cancelAnimationFrame(this.animationFrameId );

        this.scene3D.createCommonLight();
        this.scene3D.createLights();
        this.scene3D.scene.remove(this.spaceship.mesh);

        this.addFireBall();
        this.animateGameFinish();
        this.scene3D.audio.playFailSound();
    }

    addFireBall() {
        let sphereGeometry = new THREE.DodecahedronGeometry( 2.7, 1);
        let sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xd33404 ,shading: THREE.FlatShading} );
        this.fireBall = new THREE.Mesh( sphereGeometry, sphereMaterial );

        this.fireBall.position.x=this.spaceship.mesh.position.x;
        this.fireBall.position.y=this.spaceship.mesh.position.y;
        this.fireBall.position.z=this.spaceship.mesh.position.z-2;

        this.scene3D.scene.add(this.fireBall);
    }

    animateGameFinish() {
        this.fireBall.rotation.y+=1;
        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        this.animationFrameId=requestAnimationFrame(this.animateGameFinish.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameProcess;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Audio__ = __webpack_require__(5);



class Scene3D {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.createScene();
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.createCamera();
        this.createRenderer();
        this.createCommonLight();
        this.createAudio();
        this.createControls();
    }

    createAudio() {
        this.audio=new __WEBPACK_IMPORTED_MODULE_1__Audio__["a" /* default */]();
        this.camera.add(this.audio.listener);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.verticalFieldOfView,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.aspectRatio,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.nearPlane,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.farPlane);

        this.camera.position.y = __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.y;
        this.camera.position.z = __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.z;
        this.scene.add(this.camera);
    }

    createCommonLight() {
        this.light = new THREE.AmbientLight();
        this.scene.add(this.light);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setPixelRatio(__WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].rendererOptions.pixelRatio);
    }

    createControls() {
        this.controls = new THREE.TrackballControls(this.camera, this.canvas);
        this.controls.zoomSpeed = 0.5;
    }

    createLights() {
        const pointLight = new THREE.PointLight(0xfff000, 1, 50);
        pointLight.position.set(0, 25, 1.2);
        this.scene.add(pointLight);

        const pointLightHelper = new THREE.PointLightHelper(pointLight, 4);
        this.scene.add(pointLightHelper);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene3D;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(0);


class Audio {
    constructor() {
        this.loadSounds();
    }

    loadSounds() {
        this.listener = new THREE.AudioListener();
        this.audioLoader = new THREE.AudioLoader();

        this.loadMainSound();
        this.loadFightersFly();
        this.loadFailSound();
    }

    loadMainSound() {
        this.mainSound = new THREE.Audio( this.listener );
        this.audioLoader.load( __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* AUDIO_OPTIONS */].mainAudioLink, ( buffer ) => {
            this.mainSound.setBuffer( buffer );
            this.mainSound.setLoop( true );
            this.mainSound.setVolume( 0.4 );
        });
    }

    loadFightersFly() {
        this.fightersFly = new THREE.Audio( this.listener );
        this.audioLoader.load( __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* AUDIO_OPTIONS */].fightersFlyAudioLink, ( buffer ) => {
            this.fightersFly.setBuffer( buffer );
            this.fightersFly.setLoop( false );
            this.fightersFly.setVolume( 0.55 );
        });
    }

    loadFailSound() {
        this.failSound = new THREE.Audio( this.listener );
        this.audioLoader.load( __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* AUDIO_OPTIONS */].failAudioLink, ( buffer ) => {
            this.failSound.setBuffer( buffer );
            this.failSound.setLoop( false );
            this.failSound.setVolume( 1 );
        });
    }

    playMainSound() {
        this.mainSound.play();
    }

    stopMainSound() {
        this.mainSound.stop();
    }

    playFightersFly() {
        this.fightersFly.play();
    }

    playFailSound() {
        this.failSound.play();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Audio;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class SkyBox extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */]  {

    constructor() {
        super();
        this.rotationSpeed=__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].rotationSpeed;
    }

    createMesh() {
        const uniforms = {
            texture: { type: 't', value: new THREE.TextureLoader().load(__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].link)}
        };

        const material = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:  __WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GLSL_MODULES */].sky_vertex,
            fragmentShader: __WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GLSL_MODULES */].sky_fragment
        });

        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].segmentsQuantity);
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.scale.set(-1, 1, 1);
        this.mesh.rotation.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].angleOfSlope;
        //this.skyBox.eulerOrder = 'XZY';
        //this.skyBox.renderDepth = 1000.0;
    }

    movement() {
        this.mesh.rotation.x+=this.rotationSpeed;
    }

    increaseMovementSpeed() {
        this.rotationSpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].increaseStep;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SkyBox;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);




class GameField extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
        this.rotationSpeed=__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].rotationSpeed;
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( __WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].link );
        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].segmentsQuantity);
        const material = new THREE.MeshStandardMaterial({map: texture});
        // material.transparent=true;
        // material.opacity=0;
        this.mesh = new THREE.Mesh( geometry, material );
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.y=-31;//-30.5
        this.mesh.rotation.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].angleOfSlope;
    }

    movement() {
        this.mesh.rotation.x += this.rotationSpeed;
    }

    increaseMovementSpeed() {
        this.mesh.rotation.x=0;
        this.rotationSpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].increaseStep;
    }

    isWholeCircle() {
        return this.mesh.rotation.x>__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GAMEFIELD_OPTIONS */].wholeCircle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameField;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Spaceship extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
        this.lastTurnCoordinateX=0;
    }

    createMesh() {
        this.mesh = new THREE.Object3D();
        this.plane = new THREE.ObjectLoader();
        this.plane.load( __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].link, ( obj ) => {
            this.mesh.add(obj);
        });
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.z = __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].inIntroCoordinates.z;
        this.mesh.position.y = __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].inIntroCoordinates.y;
    }

    listenSpaceshipMove() {
        document.addEventListener('mousemove', this.setMouseMoveListener.bind(this));
    }

    setMouseMoveListener(event) {
        let tx = -1 + (event.clientX / __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* WINDOW_OPTIONS */].gameWindowWidth)*2;
        let ty = 1 - (event.clientY / __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* WINDOW_OPTIONS */].gameWindowHeight)*2;

        const currentX = this.normalizePosition(tx, -1, 1, -__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].flyWidthBorder, __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].flyWidthBorder);
        const currentY = this.normalizePosition(ty, -1, 1, -0.85, 2);//-0.47, 1.6//-SPACESHIP_OPTIONS.flyHeightBorder+1,SPACESHIP_OPTIONS.flyHeightBorder+0.5);

        this.mesh.position.x = currentX;
        this.mesh.position.y = currentY;

        this.turning(currentX);
    }

    turning(currentX) {
        if (currentX>this.lastTurnCoordinateX) {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        else {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        this.lastTurnCoordinateX = currentX;
    }

    isSpaceshipNotMove(lastSpaceshipPosition) {
        return (lastSpaceshipPosition===this.lastTurnCoordinateX) ||
            (this.mesh.rotation.z!==0);
    }

    alignSpaceship() {
        if (this.mesh.rotation.z > __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].alignmentPosition) {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningBackSpeed;
        }
        else {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningBackSpeed;
        }
    }

    normalizePosition(v,vmin,vmax,tmin,tmax) {
        let nv = Math.max(Math.min(v,vmax), vmin);
        let dv = vmax-vmin;
        let pc = (nv-vmin)/dv;
        let dt = tmax-tmin;
        return tmin + (pc*dt);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Spaceship;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Enemy extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        //this.mesh.add(temp);
        // const plane=new THREE.ObjectLoader();
        // plane.load( ENEMY_OPTIONS.link, ( obj ) => {
        //     this.mesh.add(obj);
        // });

    }

    setRandomPosition() {
        let xpos = -13+Math.random()*(26);//-3.4+Math.random()*(6.8);
        let ypos = 29.5+Math.random()*(6);//31+Math.random()*(1.5);
        let zpos = -10.5+Math.random()*(20);//-5.5+Math.random()*(5.5);

        this.mesh.position.x = xpos;//2
        this.mesh.position.y = ypos;//31
        this.mesh.position.z = zpos;//2
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Enemy;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class EnemiesContainer extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */]{
    constructor() {
        super();
        this.flySpeed=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].flySpeed;
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setPrimaryPosition() {
        this.mesh.position.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].distanceCoordinates.z;
        this.mesh.position.y=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].distanceCoordinates.y;
    }

    isBehindCamera() {
        return this.mesh.position.z>__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].maxZCoordinate;
    }

    isNearTheSpaceship() {
        return this.mesh.position.z>__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].coordinateZToPlaySound;
    }

    movement() {
        this.mesh.position.z+=this.flySpeed;
    }

    increaseMovementSpeed() {
        this.flySpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].increaseStep;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnemiesContainer;



/***/ })
/******/ ]);
//# sourceMappingURL=Build.js.map