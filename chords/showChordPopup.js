import {drawTuneChords} from "./drawTuneChords.js";
export function showChordPopup(chordName){

    // ==========================================
    // REMOVE OLD
    // ==========================================

    const old =
        document.querySelector(".chordPopup");

    if(old){
        old.remove();
    }



    // ==========================================
    // OVERLAY
    // ==========================================

    const overlay =
        document.createElement("div");

    overlay.className = "chordPopup";

    overlay.style.position = "fixed";

    overlay.style.top = "0";
    overlay.style.left = "0";

    overlay.style.width = "100vw";
    overlay.style.height = "100vh";

    overlay.style.background =
        "rgba(0,0,0,0.45)";

    overlay.style.display = "flex";

    overlay.style.alignItems = "center";

    overlay.style.justifyContent = "center";

    overlay.style.zIndex = "99999";



    // ==========================================
    // CARD
    // ==========================================

    const card =
        document.createElement("div");

    card.style.background = "white";

    card.style.padding = "20px";

    card.style.borderRadius = "12px";

    card.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.25)";



    // ==========================================
    // CLOSE
    // ==========================================

    overlay.addEventListener("click",e=>{

        if(e.target === overlay){

            overlay.remove();
        }

    });



    // ==========================================
    // DRAW CHORD
    // reutiliza tu función existente
    // ==========================================

    const fakeTune = {

        score:[
            {
                chords:[chordName]
            }
        ]
    };



    const chordView =
        drawTuneChords(fakeTune);



    card.appendChild(chordView);

    overlay.appendChild(card);

    document.body.appendChild(overlay);

}