import {chords} from "./chords.js";
export function drawTuneChords(tune,dv){

    // ==========================================
    // CONFIG
    // ==========================================
    
    const STRING_SPACING = 20;
    const FRET_SPACING = 50;
    
    const SVG_WIDTH = 170;
    const SVG_HEIGHT = 340;
    
    const START_X = 30;
    const START_Y = 40;
    
    const STRINGS = 6;
    const FRETS = 6;
    
    const svgNS = "http://www.w3.org/2000/svg";
    
    
    
    // ==========================================
    // EXTRAER ACORDES ÚNICOS DEL TUNE
    // ==========================================
    
    const usedChords = new Set();
    
    tune.score.forEach(measure=>{
    
        measure.chords.forEach(chord=>{
            usedChords.add(chord);
        });
    
    });
    
    
    
    // ==========================================
    // PARSE CHORD NAME
    // Em/D -> {nota:"E",type:"m",bass:"D"}
    // C#Maj7 -> {nota:"C#",type:"Maj7"}
    // ==========================================
    
     const parseChordName = chordName => {
    
    // ==========================================
    // SPLIT BASS
    // ==========================================
    
    let bass;
    
    if(chordName.includes("/")){
    
        const parts = chordName.split("/");
    
        chordName = parts[0];
    
        bass = parts[1];
    }
    
    
    
    // ==========================================
    // MAIN CHORD
    // ==========================================
    
    const match =
        chordName.match(
            /^([A-G](?:#|b)?)(.*)$/
        );
    
    if(!match){
        return null;
    }
    
    
    
    // ==========================================
    // RESULT
    // ==========================================
    
    return {
    
        nota: match[1],
    
        type: match[2],
    
        bass
    };
    };
    
    
    
    
    
    
    // ==========================================
    // ROOT
    // ==========================================
    
    const root = document.createElement("div");
    
    root.className = "tune-chords";
    
    root.style.display = "flex";
    root.style.flexWrap = "wrap";
    root.style.gap = "20px";
    root.style.transform = "scale(0.75)";
    
    
    
    // ==========================================
    // SVG HELPERS
    // ==========================================
    
    const line = (
        svg,
        x1,
        y1,
        x2,
        y2,
        w=2
    )=>{
    
        const l =
            document.createElementNS(svgNS,"line");
    
        l.setAttribute("x1",x1);
        l.setAttribute("y1",y1);
    
        l.setAttribute("x2",x2);
        l.setAttribute("y2",y2);
    
        l.setAttribute("stroke","black");
        l.setAttribute("stroke-width",w);
    
        svg.appendChild(l);
    
        return l;
    };
    
    
    
    const circle = (
        svg,
        x,
        y,
        r=5,
        fill="black"
    )=>{
    
        const c =
            document.createElementNS(svgNS,"circle");
    
        c.setAttribute("cx",x);
        c.setAttribute("cy",y);
    
        c.setAttribute("r",r);
    
        c.setAttribute("fill",fill);
    
        svg.appendChild(c);
    
        return c;
    };
    
    
    
    const text = (
        svg,
        str,
        x,
        y,
        size=16,
        anchor="middle"
    )=>{
    
        const t =
            document.createElementNS(svgNS,"text");
    
        t.setAttribute("x",x);
        t.setAttribute("y",y);
    
        t.setAttribute("font-size",size);
    
        t.setAttribute("font-family","Arial");
    
        t.setAttribute("text-anchor",anchor);
    
        t.textContent = str;
    
        svg.appendChild(t);
    
        return t;
    };
    
    
    
    // ==========================================
    // DIBUJAR ACORDES
    // ==========================================
    
    [...usedChords].forEach(chordName=>{
    
        const parsed =
            parseChordName(chordName);
    
        if(!parsed) return;
    
    
    
        // buscar acorde real
        const chord =
            chords.find(c=>
                c.nota === parsed.nota &&
                c.type === parsed.type && 
                c.bass===parsed.bass
            );
    
        if(!chord) return;
    
    
    
        // ======================================
        // CARD
        // ======================================
    
        const wrap =
            document.createElement("div");
    
        wrap.style.width = "190px";
    
        wrap.style.padding = "10px";
    
        wrap.style.border = "1px solid #ccc";
    
        wrap.style.borderRadius = "10px";
    
        wrap.style.background = "white";
    
    
    
        const title =
            document.createElement("div");
    
        title.textContent =
            `${chord.nota}${chord.type}${chord.bass?`/${chord.bass}`:``}`;
    
        title.style.fontSize = "24px";
    
        title.style.fontWeight = "bold";
    
        title.style.textAlign = "center";
    
        title.style.marginBottom = "10px";
    
        wrap.appendChild(title);
    
    
    
        // ======================================
        // SVG
        // ======================================
    
        const svg =
            document.createElementNS(svgNS,"svg");
    
        svg.setAttribute("width",SVG_WIDTH);
    
        svg.setAttribute("height",SVG_HEIGHT);
    
    
    
        // ======================================
        // STRINGS
        // ======================================
    
        for(let i=0;i<STRINGS;i++){
    
            const x =
                START_X +
                (i * STRING_SPACING);
    
            line(
                svg,
                x,
                START_Y,
                x,
                START_Y +
                ((FRETS-1) * FRET_SPACING),
                1.5
            );
        }
    
    
    
        // ======================================
        // FRETS
        // ======================================
    
        for(let i=0;i<FRETS;i++){
    
            const y =
                START_Y +
                (i * FRET_SPACING);
    
            line(
                svg,
                START_X,
                y,
    
                START_X +
                ((STRINGS-1) * STRING_SPACING),
    
                y,
    
                (
                    i === 0 &&
                    chord.fret === 0
                )
                ? 4
                : 1.5
            );
        }
    
    
    
        // ======================================
        // CEJILLA
        // ======================================
    
        if (
            chord.cejilla &&
            chord.cejilla > 0
        ){
    
            let startString = 6;
            let endString = 1;
    
            if (
                chord.cejillaPos &&
                chord.cejillaPos !== 0 &&
                chord.cejillaPos !== "full"
            ){
    
                const parts =
                    chord.cejillaPos.split("-");
    
                startString =
                    parseInt(parts[0]);
    
                endString =
                    parseInt(parts[1]);
            }
    
            const startIndex =
                6 - startString;
    
            const endIndex =
                6 - endString;
    
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
                (FRET_SPACING * 0.5);
    
            line(svg,x1,y,x2,y,10);
        }
    
    
    
        // ======================================
        // NOTES
        // ======================================
    
        const stringData =
            chord.strings.split(" ");
    
    
    
        stringData.forEach(item=>{
    
            const [stringNumber,fretValue] =
                item.split("-");
    
            const stringIndex =
                6 - parseInt(stringNumber);
    
            const x =
                START_X +
                (stringIndex * STRING_SPACING);
    
    
    
            // apagada
            if(fretValue === "x"){
    
                text(
                    svg,
                    "X",
                    x,
                    START_Y - 12,
                    14
                );
    
                return;
            }
    
    
    
            // mute alternativa
            if(fretValue === "n"){
    
                return;
            }
    
    
    
            const fret =
                parseInt(fretValue);
    
    
    
            // abierta
            if(fret === 0){
    
                circle(
                    svg,
                    x,
                    START_Y - 12,
                    5,
                    "white"
                );
    
                const outline =
                    document.createElementNS(svgNS,"circle");
    
                outline.setAttribute("cx",x);
                outline.setAttribute("cy",START_Y - 12);
    
                outline.setAttribute("r",5);
    
                outline.setAttribute("fill","none");
    
                outline.setAttribute("stroke","black");
    
                outline.setAttribute("stroke-width","1.5");
    
                svg.appendChild(outline);
    
                return;
            }
    
    
    
            const y =
                START_Y +
                ((fret - 1) * FRET_SPACING) +
                (FRET_SPACING * 0.5);
    
            circle(svg,x,y,6);
        });
    
    
    
        // ======================================
        // FRET NUMBER
        // ======================================
    
        if(chord.fret > 1){
    
            const pos =
                chord.fretPos || 1;
    
            const y =
                START_Y +
                ((pos - 1) * FRET_SPACING) +
                (FRET_SPACING * 0.5) +
                5;
    
            text(
                svg,
                chord.fret,
                START_X - 20,
                y,
                16
            );
        }
    
    
    
        wrap.appendChild(svg);
    
        root.appendChild(wrap);
    
    });
    
    
    if(dv)dv.appendChild(root);
     return root;
    }
    