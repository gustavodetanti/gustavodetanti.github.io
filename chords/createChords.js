const STRING_SPACING = 20;
const FRET_SPACING = 50;

// 6 cuerdas = 5 espacios de 20px = 100px
// + márgenes laterales

const SVG_WIDTH = 170;

// 6 trastes = 5 espacios de 50px = 250px
// + espacio superior/inferior

const SVG_HEIGHT = 340;

const START_X = 20;
const START_Y = 20;

const STRINGS = 6;
const FRETS = 6;

export function createChordSVG(chord){

    const svgNS = "http://www.w3.org/2000/svg";

    const wrapper = document.createElement("div");
    wrapper.className = "chord";

    const title = document.createElement("div");
    title.className = "chord-name";
    title.textContent =     `${chord.nota}${chord.type}${chord.bass?`/${chord.bass}`:``}`;
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", SVG_WIDTH);
    svg.setAttribute("height", SVG_HEIGHT);

    // ===== CUERDAS (verticales) =====

    for(let i=0;i<STRINGS;i++){

        const x = START_X + i * STRING_SPACING;

        const line = document.createElementNS(svgNS,"line");

        line.setAttribute("x1", x);
        line.setAttribute("y1", START_Y);

        line.setAttribute("x2", x);
        line.setAttribute("y2", START_Y + (FRETS-1) * FRET_SPACING);

        line.setAttribute("stroke", "black");
        line.setAttribute("stroke-width", "1.5");

        svg.appendChild(line);
    }

    // ===== TRASTES (horizontales) =====

    for(let i=0;i<FRETS;i++){

        const y = START_Y + i * FRET_SPACING;

        const line = document.createElementNS(svgNS,"line");

        line.setAttribute("x1", START_X);
        line.setAttribute("y1", y);

        line.setAttribute("x2", START_X + (STRINGS-1) * STRING_SPACING);
        line.setAttribute("y2", y);

        line.setAttribute("stroke", "black");

        // cejuela doble si fret = 0
        if(i === 0 && chord.fret === 0){
            line.setAttribute("stroke-width", "4");
        }else{
            line.setAttribute("stroke-width", "1.5");
        }

        svg.appendChild(line);
    }

    // ===== POSICIONES =====

    const stringData = chord.strings.split(" ");

    stringData.forEach(item => {

        const [stringNumber, fretValue] = item.split("-");

        const stringIndex = 6 - parseInt(stringNumber);

        const x = START_X + stringIndex * STRING_SPACING;



 // cuerda sin punto
 if(fretValue === "n"){

 
return;
}


        // cuerda apagada
        if(fretValue === "x"){

            const text = document.createElementNS(svgNS,"text");

            text.setAttribute("x", x);
            text.setAttribute("y", START_Y - 10);

            text.setAttribute("text-anchor","middle");
            text.setAttribute("font-size","14");

            text.textContent = "X";

            svg.appendChild(text);

            return;
        }

        const fret = parseInt(fretValue);

        // cuerda abierta
        if(fret === 0){

            const circle = document.createElementNS(svgNS,"circle");

            circle.setAttribute("cx", x);
            circle.setAttribute("cy", START_Y - 10);

            circle.setAttribute("r", 4);

            circle.setAttribute("fill","white");
            circle.setAttribute("stroke","black");
            circle.setAttribute("stroke-width","1.5");

            svg.appendChild(circle);

            return;
        }






        

        // nota pisada

        const y =
            START_Y +
            ((fret - 1) * FRET_SPACING) +
            (FRET_SPACING / 2);

        const circle = document.createElementNS(svgNS,"circle");

        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);

        circle.setAttribute("r", 10);

        circle.setAttribute("fill","black");

        svg.appendChild(circle);

    });

    
    
    
    
    
    
    
    if (chord.cejilla && chord.cejilla > 0) {

let startString = 6;
let endString = 1;

// media cejilla
if (
    chord.cejillaPos &&
    chord.cejillaPos !== 0 &&
    chord.cejillaPos !== "full"
) {

    const parts = chord.cejillaPos.split("-");

    startString = parseInt(parts[0]);
    endString = parseInt(parts[1]);
}

// convertir cuerda -> índice visual
const startIndex = 6 - startString;
const endIndex = 6 - endString;

const x1 =
    START_X +
    (startIndex * STRING_SPACING) -
    8;

const x2 =
    START_X +
    (endIndex * STRING_SPACING) +
    8;

const y =
    START_Y +
    ((chord.cejilla - 1) * FRET_SPACING) +
    (FRET_SPACING / 2);

const barre = document.createElementNS(svgNS, "line");

barre.setAttribute("x1", x1);
barre.setAttribute("y1", y);

barre.setAttribute("x2", x2);
barre.setAttribute("y2", y);

barre.setAttribute("stroke", "black");
barre.setAttribute("stroke-width", "10");
barre.setAttribute("stroke-linecap", "round");

svg.appendChild(barre);
}
  
    
    
    
    
    // ===== NUMERO DE TRASTE =====


 

    if (chord.fret > 1) {

const pos = chord.fretPos || 1;

const y =
    START_Y +
    ((pos - 1) * FRET_SPACING) +
    (FRET_SPACING / 2) +
    5;

const fretText =
    document.createElementNS(svgNS,"text");

fretText.setAttribute("x", START_X - 20);

fretText.setAttribute("y", y);

fretText.setAttribute("font-size","14");

fretText.setAttribute("text-anchor","middle");

fretText.textContent = chord.fret;

svg.appendChild(fretText);
}


    wrapper.appendChild(title);
    wrapper.appendChild(svg);

    return wrapper;
}
