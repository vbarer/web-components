const ThreeModule = require('./three-module.js');

import {MessageType} from "../custom-canvas/custom-canvas.model";

addEventListener('message', (msg) => {
  const data = msg.data;
  switch (data.type) {
    case MessageType.INIT:
      const canvas = data.canvas;
      ThreeModule.start(canvas);
      break;
    case MessageType.UPDATE:
      ThreeModule.changeLight();
      break;
  }

});

