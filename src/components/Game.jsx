import { Rnd } from 'react-rnd';

const Game = () => {
  return (
    <div>
      {/* Estos 3 Rnd estarán fijos: no se pueden mover ni redimensionar */}
      <Rnd
        default={{ x: 0, y: 0, width: 100, height: 100 }}
        disableDragging
        enableResizing={false}
      >
        <div className="bg-white border-2 border-dotted">
          Hi
        </div>
      </Rnd>

      <Rnd
        default={{ x: 40, y: 40, width: 100, height: 100 }}
        disableDragging
        enableResizing={false}
      >
        <div className="bg-white border-2 border-solid">
          Hi
        </div>
      </Rnd>

      <Rnd
        default={{ x: 100, y: 100, width: 100, height: 100 }}
        disableDragging
        enableResizing={false}
      >
        <div className="bg-white border-2 border-solid">
          Hi
        </div>
      </Rnd>

      {/* Los siguientes Rnd quedan con comportamiento normal (se pueden mover y redimensionar) */}
      <Rnd
        default={{ x: 0, y: 150, width: 100, height: 100 }}
        /* Este Rnd sí es draggable y resizable */
      >
        <div className="bg-white border-2 border-solid">
          Hi
        </div>
      </Rnd>

      <Rnd
        default={{ x: 0, y: 170, width: 100, height: 100 }}
      >
        <div className="bg-white border-2 border-solid">
          Hi
        </div>
      </Rnd>

      <Rnd
        default={{ x: 0, y: 190, width: 100, height: 100 }}
      >
        <div className="bg-white border-2 border-solid">
          Hi
        </div>
      </Rnd>
    </div>
  );
};

export default Game;