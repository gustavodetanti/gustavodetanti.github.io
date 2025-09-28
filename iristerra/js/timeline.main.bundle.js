(() => {
  // src/FullImage.js
  function FullImage(foto, index, closeFn) {
    let fullImageDiv = document.createElement("div");
    fullImageDiv.className = "FullImage";
    Object.assign(fullImageDiv.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      background: "#111111cc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
      cursor: "pointer"
    });
    const img = document.createElement("img");
    img.src = foto.img;
    Object.assign(img.style, {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    });
    const dateDiv = document.createElement("div");
    dateDiv.innerHTML = foto.date;
    dateDiv.classList.add("imageDate");
    fullImageDiv.appendChild(img);
    fullImageDiv.appendChild(dateDiv);
    fullImageDiv.addEventListener("click", () => {
      if (fullImageDiv == null)
        return;
      document.body.removeChild(fullImageDiv);
      fullImageDiv = null;
      if (closeFn)
        closeFn();
    });
    document.body.appendChild(fullImageDiv);
    img.addEventListener("click", (e) => {
      if (fullImageDiv == null)
        return;
      document.body.removeChild(fullImageDiv);
      fullImageDiv = null;
      if (closeFn)
        closeFn();
    });
  }

  // src/timeline/dragApp.js
  function clickApp(scale, snap = 1, div, datesXs, fn) {
    div.querySelectorAll("rect.plantaRect").forEach((el) => {
      let parentX = getParentX(el);
      let plantaId = el.getAttribute("data-planta-id");
      if (!isTouchDevice() || true) {
        el.addEventListener("dblclick", (e) => {
          e.preventDefault();
          e.stopPropagation();
          let finalX = e.clientX / scale;
          finalX = Math.round(finalX / snap) * snap;
          finalX = finalX < 0 ? 0 : finalX;
          onClicked(finalX + parentX * 0);
        });
      } else {
        el.addEventListener("touchend", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const touch = e.changedTouches[0];
          let finalX = touch.clientX / scale;
          finalX = Math.round(finalX / snap) * snap;
          finalX = finalX < 0 ? 0 : finalX;
          onClicked(finalX + parentX * 0);
        });
      }
      function onClicked(xpos) {
        console.log("clicked at:", xpos);
        if (datesXs) {
        } else
          return;
        let f = datesXs.filter((d2) => {
          return Math.abs(d2.x - Number(xpos + window.scrollX / scale)) < snap;
        });
        let d = null;
        if (f.length > 0) {
          d = f[0].date;
        }
        if (d) {
        } else
          return;
        if (fn)
          fn({ plantaId, d });
      }
    });
    function getParentX(el) {
      const tr = el.parentNode.getAttribute("transform");
      const match = /translate\(([-\d.]+),\s*([-\d.]+)\)/.exec(tr);
      let origX = match ? parseFloat(match[1]) : 0;
      return origX;
    }
  }
  function dragApp(scale, snap = 1, div, datesXs, fn) {
    function onPlaced(xpos, el) {
      console.log("Placed at:", xpos);
      if (datesXs) {
      } else
        return;
      let f = datesXs.filter((d2) => {
        return Math.abs(d2.x - Number(xpos)) < snap;
      });
      let d = null;
      if (f.length > 0) {
        d = f[0].date;
        console.log(d);
      }
      if (d) {
      } else
        return;
      let plantaId = el.parentNode.parentNode.getAttribute("data-planta-id");
      let eventIndex = el.getAttribute("data-event-index");
      el.querySelector("text.date").textContent = d;
      console.log({ plantaId, eventIndex, d });
      if (fn)
        fn({ plantaId, eventIndex, d });
    }
    if (div) {
    } else {
      div = document.querySelector("#timeline1");
    }
    function getParentX(el) {
      const tr = el.parentNode.parentNode.getAttribute("transform");
      const match = /translate\(([-\d.]+),\s*([-\d.]+)\)/.exec(tr);
      let origX = match ? parseFloat(match[1]) : 0;
      return origX;
    }
    div.querySelectorAll("g.eventlabel").forEach((el) => {
      let startX, origX, origY;
      let dragging = false;
      let parentX = getParentX(el);
      el.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        startX = e.clientX;
        const tr = el.getAttribute("transform");
        console.log("start", tr);
        const match = /translate\(([-\d.]+),\s*([-\d.]+)\)/.exec(tr);
        origX = match ? parseFloat(match[1]) : 0;
        origY = match ? parseFloat(match[2]) : 0;
        el.parentNode.appendChild(el);
      });
      window.addEventListener("mousemove", (e) => {
        if (!dragging)
          return;
        const dx = e.clientX - startX;
        let newX = origX + dx / scale;
        newX = newX < 0 ? 0 : newX;
        el.setAttribute("transform", `translate(${newX}, ${origY})`);
      });
      window.addEventListener("mouseup", () => {
        if (!dragging)
          return;
        dragging = false;
        const tr = el.getAttribute("transform");
        console.log("end", tr);
        const match = /translate\(([-\d.]+),\s*([-\d.]+)\)/.exec(tr);
        let finalX = match ? parseFloat(match[1]) : 0;
        const finalY = match ? parseFloat(match[2]) : 0;
        finalX = Math.round(finalX / snap) * snap;
        finalX = finalX < 0 ? 0 : finalX;
        el.setAttribute("transform", `translate(${finalX}, ${finalY})`);
        console.log({ finalX, parentX });
        onPlaced(finalX + parentX, el);
      });
    });
  }
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  // src/ImagesComp.js
  function ImagesComp(divElement, obj, saveFn) {
    if (!obj.fotos)
      obj.fotos = [];
    if (!obj.images)
      obj.images = [];
    const imagesContainer = document.createElement("div");
    imagesContainer.className = "images";
    const uploadBtn = document.createElement("button");
    uploadBtn.textContent = "subir foto";
    uploadBtn.className = "upload-btn";
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    function renderImages() {
      imagesContainer.innerHTML = "";
      obj.images.forEach((foto, index) => {
        const imgDiv = document.createElement("div");
        imgDiv.className = "image";
        const img = document.createElement("img");
        img.style.width = "100%";
        img.src = foto.img;
        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "&times;";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => deleteImage(index, foto));
        const imageDate = document.createElement("span");
        imageDate.innerHTML = foto.date;
        imageDate.className = "imageDate";
        img.style.cursor = "pointer";
        imgDiv.appendChild(img);
        imgDiv.appendChild(imageDate);
        imgDiv.appendChild(deleteBtn);
        imagesContainer.appendChild(imgDiv);
        img.addEventListener("click", () => FullImage(foto, index));
      });
    }
    function deleteImage(index, filetodel) {
      let con = confirm("borrar " + filetodel.img + " ???");
      if (!con)
        return;
      obj.fotos.splice(index, 1);
      obj.images.splice(index, 1);
      renderImages();
      if (saveFn)
        saveFn();
      if (filetodel)
        borrarArchivo(filetodel.img);
    }
    function borrarArchivo(filetodel) {
      const formData = new FormData();
      formData.append("filetodel", filetodel);
      fetch("upload.php", {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((jsn) => console.log(jsn)).catch((e) => console.log(e));
    }
    function handleFileSelect(e) {
      const file = e.target.files[0];
      if (!file)
        return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          console.log(img.naturalWidth, img.width);
          if (img.naturalWidth > 1e3) {
            resizeImage(img, file).then((resizedFile) => {
              createPreview(resizedFile, event.target.result);
            });
          } else {
            createPreview(file, event.target.result);
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
    function createPreview(file, imgSrc) {
      const previewContainer = document.createElement("div");
      previewContainer.className = "upload-preview";
      const previewImg = document.createElement("img");
      previewImg.src = imgSrc;
      const okBtn = document.createElement("button");
      okBtn.textContent = "subir esta imagen";
      okBtn.className = "confirm-upload";
      okBtn.addEventListener("click", () => {
        setLoading(true);
        setTimeout(() => {
          uploadImage(file);
        }, 400);
      });
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "cancelar";
      cancelBtn.className = "cancel-upload";
      cancelBtn.addEventListener("click", () => previewContainer.remove());
      previewContainer.appendChild(previewImg);
      previewContainer.appendChild(okBtn);
      previewContainer.appendChild(cancelBtn);
      divElement.appendChild(previewContainer);
    }
    function uploadImage(file) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("prefix", obj.name || "plant");
      fetch(PREFIXURL + "upload.php", {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          obj.images.push({ img: data.filePath, date: new Date().toDateString() });
          obj.fotos.push(data.filePath);
          renderImages();
          if (saveFn)
            saveFn();
          setLoading(false);
          document.querySelector(".upload-preview")?.remove();
        } else {
          alert("Error uploading image: " + data.error);
          setLoading(false);
        }
      }).catch((error) => {
        console.error("Error:", error);
        alert("Error uploading image");
        setLoading(false);
      });
    }
    uploadBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleFileSelect);
    renderImages();
    divElement.innerHTML = "";
    divElement.appendChild(imagesContainer);
    divElement.appendChild(uploadBtn);
    divElement.appendChild(fileInput);
    function resizeImage(img, originalFile) {
      return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const maxWidth = 1e3;
        const maxHeight = 1e3;
        let newWidth = img.width;
        let newHeight = img.height;
        if (img.width > maxWidth) {
          const ratio = maxWidth / img.width;
          newWidth = maxWidth;
          newHeight = img.height * ratio;
        }
        if (newHeight > maxHeight) {
          const ratio1 = maxHeight / newHeight;
          newHeight = maxHeight;
          newWidth = newWidth * ratio1;
        }
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob((blob) => {
          console.log(img, blob);
          const fileName = originalFile.name;
          const fileExt = fileName.split(".").pop();
          const resizedFileName = `resized_${Date.now()}.${fileExt}`;
          const resizedFile = new File([blob], resizedFileName, {
            type: originalFile.type,
            lastModified: Date.now()
          });
          resolve(resizedFile);
        }, originalFile.type, 0.7);
      });
    }
    return {
      refresh: renderImages,
      getImages: () => obj.fotos
    };
  }
  function setLoading(bol) {
    let ld = document.querySelector(".LOADING");
    if (ld) {
    } else {
      ld = document.createElement("div");
      ld.innerHTML = "<h2>loading...</h2>";
      ld.classList.add("LOADING");
      ld.style.zIndex = 9999999;
      ld.style.position = "fixed";
      ld.style.background = "#111111";
      ld.style.top = "0";
      ld.style.left = "0";
      ld.style.width = "100%";
      ld.style.height = "100%";
      document.body.appendChild(ld);
    }
    if (bol) {
      ld.style.display = "block";
    } else {
      ld.style.display = "none";
    }
  }

  // src/timeline/PlantEditor.js
  var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  var friendlyDate = (str) => {
    let arr = str.split("/");
    if (arr.length != 3)
      return str;
    return `${arr[0]} de ${months[Number(arr[1]) - 1]}, ${arr[2]}`;
  };
  function PlantEditor(obj, fn, setChangedState) {
    window.scrollTo(0, 0);
    let item = obj.plantaObj;
    let eventObj = obj.clickObj;
    let div = document.createElement("div");
    let container;
    div.classList.add("full");
    console.log("Plant editor");
    document.body.appendChild(div);
    div.innerHTML = `<div class='editor'>
        <h3>${item.name}</h3>
<div class='newEvent '>
<div style='background:#ffffff;margin:0px 18px 18px 0;padding:18px;'>

<p>Agregar acci\xF3n-nota para el d\xEDa: <b> ${friendlyDate(eventObj.d)}</b></p> 
 
<div class='inputs'>
    <div><input style='width:90%' type="text" value="${eventObj.d}"   placeholder='dd/mm/aaaa'></div>
    <div><input style='width:90%' type="text" value=""  placeholder='p.ej: siembra...'></div>
</div> 


<div>
    <button class='agregarEvento'>Guardar</button>
</div>

</div>

 <br>
<div style='background:#ffffff;margin:0px 18px 18px 0;padding:18px;'>
<p>Fotos</p> 
 
<div class='itemGallery'></div>
</div>
</div>

<br>
 
<br>
<h3>Editar info:</h3>


            <div>
          <div>
           <!--${item.id}--> 
            <div>
            Planta: <b contenteditable="true" data-field="name">${item.name}</b><br>
            Inicio: <b contenteditable="true" data-field="date_start">${item.date_start}</b><br>
            Final: <b contenteditable="true" data-field="date_end">${item.date_end}</b><br>
            Color: <b><input type="color" value="${item.color}"   data-field="color"></b>
            
            </div>
            
            <div>
            <textarea  cols='46' rows='3' data-field="info" placeholder='+info...'>${item.info ? item.info : ""}</textarea>
         </div>
            
            <div>
                
                <div class="labels-editor"  ></div>
            </div>
    
            <!--
            <button class='borrarPlanta' onclick="deleteItem(${item.id})">borrar</button>
            -->
   
            </div>
            <br>
        
            <hr>
            <br>
            <button class='salir'>guardar</button> <button class='volver'>volver</button>
            
            </div>
             `;
    ImagesComp(div.querySelector(".itemGallery"), item, saveImage);
    div.querySelectorAll("[contenteditable]").forEach((cell) => {
      cell.addEventListener("blur", chg);
    });
    div.querySelectorAll("[data-field='info']").forEach((cell) => {
      cell.addEventListener("blur", chgInput);
    });
    div.querySelectorAll("input[type=color]").forEach((input) => {
      input.addEventListener("input", chgCol);
    });
    div.querySelector(".agregarEvento").addEventListener("click", agregarEvento);
    div.querySelector(".salir").addEventListener("click", salir);
    div.querySelector(".volver").addEventListener("click", cancelar);
    container = div.querySelector(".labels-editor");
    renderLabelsEditor(container);
    function agregarEvento(e) {
      let inps = [...document.querySelectorAll(".newEvent .inputs input")];
      if (inps[0].value == "" || inps[0].value == "")
        return;
      item.labels.push({ date: inps[0].value, label: inps[1].value });
      setChangedState(true);
      salir();
    }
    function saveImage(o) {
      console.log(o);
      setChangedState(true);
    }
    function chgInput(e) {
      const field = e.target.getAttribute("data-field");
      item[field] = e.target.value;
      setChangedState(true);
    }
    function chg(e) {
      const field = e.target.getAttribute("data-field");
      item[field] = e.target.innerText.trim();
      setChangedState(true);
    }
    function chgCol(e) {
      item.color = e.target.value;
      setChangedState(true);
    }
    function salir() {
      removeEvents();
      document.body.removeChild(div);
      if (fn)
        fn(item);
    }
    function cancelar() {
      removeEvents();
      document.body.removeChild(div);
      window.location.href = "timeline.html";
    }
    function removeEvents() {
      div.querySelectorAll("[contenteditable]").forEach((cell) => {
        cell.removeEventListener("blur", chg);
      });
      div.querySelectorAll("input[type=color]").forEach((input) => {
        input.removeEventListener("input", chg);
      });
      div.querySelector(".salir").removeEventListener("click", salir);
    }
    function renderLabelsEditor(container2) {
      const labels = item.labels;
      container2.innerHTML = `
<br><br>
            <b>Acciones-notas</b>
            <br>
                <table class="labels-table">
              
                        ${labels.map((lbl, lblIndex) => `
                            <div>
                                <input type="text" value="${lbl.date}" data-lblindex="${lblIndex}" data-field="date" placeholder='dd/mm/aaaa'>
                                <input type="text" value="${lbl.label}" data-lblindex="${lblIndex}" data-field="label"  placeholder='p.ej: siembra...'>
                                <button onclick="deleteLabel(${lblIndex})">borrar</button>
                            </div>
                        `).join("")}
                
                </table>
                <button onclick="addLabel()" class='btn-add'>agregar acci\xF3n/nota</button>
            `;
      container2.querySelectorAll("input").forEach((inp) => {
        inp.addEventListener("input", (e) => {
          const lblIndex = +e.target.dataset.lblindex;
          const field = e.target.dataset.field;
          item.labels[lblIndex][field] = e.target.value;
          setChangedState(true);
        });
      });
    }
    function addLabel() {
      item.labels.push({ date: "", label: "" });
      renderLabelsEditor(container);
      setChangedState(true);
    }
    window.addLabel = addLabel;
    function deleteLabel(lblIndex) {
      item.labels.splice(lblIndex, 1);
      renderLabelsEditor(container);
      setChangedState(true);
    }
    window.deleteLabel = deleteLabel;
    function _deleteItem(index) {
      TIMELINE_DATA.splice(index, 1);
      renderTable();
      setChangedState(true);
    }
  }

  // src/timeline/SearchApp.js
  function SearchApp(fn, data) {
    let plantasNav = getNames(data);
    plantasNav.sort();
    document.querySelector(".plantasNav select#search").innerHTML = `
<option value='todos'>todos</option>
${plantasNav.map((f) => {
      return `<option value='${f}'>${f}</option>`;
    }).join("")}
`;
    document.querySelector(".plantasNav input#searchText").addEventListener("input", chg);
    document.querySelector(".plantasNav select#search").addEventListener("change", chg);
    function chg(e) {
      console.log(e.target.value);
      if (fn)
        fn(e.target.value);
    }
  }
  function getNames(ARR) {
    let plantasNav = [];
    ARR.forEach((a) => {
      let n = a.name.split(" ")[0];
      if (plantasNav.indexOf(n) == -1) {
        plantasNav.push(n);
      }
    });
    return plantasNav;
  }

  // src/timeline/timeline.main.src.js
  var today = new Date();
  var months2 = "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" ");
  var oneDay = 24 * 60 * 60 * 1e3;
  var EDITMODE = false;
  var datePositions = [];
  var TIMELINE_DATA2 = [];
  var ACTUALDATA;
  document.addEventListener("DOMContentLoaded", () => {
    TimelineApp();
  });
  function TimelineApp() {
    let TimelineAppDiv;
    let startX = 30;
    let spanWidth = 8;
    let MULT = 2;
    let h = 800;
    let firstDate = "10/07/2025";
    let posY = 40;
    let originalPosY = posY;
    let saveBut;
    let firstDateObj = parseDate(firstDate);
    const modeBtn = document.getElementById("modeBtn");
    modeBtn.checked = EDITMODE;
    modeBtn.addEventListener("change", function() {
      EDITMODE = modeBtn.checked;
      document.querySelector(".saveBut").style.display = EDITMODE ? "block" : "none";
      document.querySelector(".editBut").style.display = EDITMODE ? "block" : "none";
    });
    if (!EDITMODE) {
      document.querySelector(".saveBut").style.display = "none";
      document.querySelector(".editBut").style.display = "none";
    }
    loadTimeline();
    function loadTimeline() {
      fetch("timeline.json?r=" + Date.now().toString()).then((response) => response.json()).then((data) => {
        ACTUALDATA = sortByDateStart(data);
        TIMELINE_DATA2 = [...ACTUALDATA];
        filterBy("todos");
        SearchApp(filterBy, ACTUALDATA);
        saveBut = document.querySelector(".saveBut");
        saveBut.disabled = true;
        saveBut.addEventListener("click", save);
      }).catch((error) => {
        console.error("Error:", error);
        document.getElementById(".log").innerHTML = "<p>Error cargando  el archivo timeline.json?</p>";
      });
    }
    function sortByDateStart(items) {
      const mapped = items.map((item) => {
        const [day, month, year] = item.date_start.split("/");
        const paddedDay = day.padStart(2, "0");
        const paddedMonth = month.padStart(2, "0");
        const num = parseInt(year + paddedMonth + paddedDay, 10);
        return { item, num };
      });
      mapped.sort((a, b) => a.num - b.num);
      return mapped.map((entry) => entry.item);
    }
    function filterBy(str) {
      console.log("filterBy", str);
      if (str.length < 3) {
        return;
      }
      if (str == "todos") {
        TIMELINE_DATA2 = ACTUALDATA;
        console.log(TIMELINE_DATA2.length, str);
        init();
        return;
      }
      TIMELINE_DATA2 = ACTUALDATA.filter((item) => item.name.toLowerCase().includes(str.toLowerCase()));
      init();
    }
    function init() {
      posY = originalPosY;
      h = TIMELINE_DATA2.length * posY + posY;
      let div = document.querySelector(".TimelineApp");
      if (div) {
      } else {
        div = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add("TimelineApp");
      }
      TimelineAppDiv = div;
      div.innerHTML = timelineGraph(firstDate, "30/07/2026");
      let svg = div.querySelector("svg");
      let str = TIMELINE_DATA2.map((t, i) => {
        return timelineElement(t.date_start, t.date_end, t.labels, t.color, t.name, t.id, t);
      }).join("");
      svg.innerHTML += str;
      dragApp(2, spanWidth, div, datePositions, moved);
      clickApp(2, spanWidth, div, datePositions, plantClicked);
      clickImages(imageClicked);
    }
    function clickImages(fn) {
      [...TimelineAppDiv.querySelectorAll("svg g.plantImage image")].forEach((im) => {
        im.addEventListener("click", (e) => {
          imageClicked({ date: im.getAttribute("data-date"), img: im.getAttribute("href") });
          timelineVisible(false);
        });
      });
    }
    function imageClicked(obj) {
      FullImage(obj, null, () => {
        timelineVisible(true);
      });
    }
    function plantClicked(obj) {
      timelineVisible(false);
      let td = TIMELINE_DATA2.filter((p) => p.id == obj.plantaId)[0];
      console.log({ td, obj });
      PlantEditor({ plantaObj: td, clickObj: obj }, saveItemChange, setChangedState);
    }
    function saveItemChange(params) {
      posY = originalPosY;
      timelineVisible(true);
      init();
      setChangedState(true);
      save();
    }
    function timelineVisible(b) {
      TimelineAppDiv.style.display = b ? "block" : "none";
    }
    function moved(obj) {
      let td = TIMELINE_DATA2.filter((p) => p.id == obj.plantaId)[0];
      if (td.labels[obj.eventIndex].date != obj.d) {
        td.labels[obj.eventIndex].date = obj.d;
        saveBut.classList.add("active");
        saveBut.disabled = false;
      }
    }
    function save() {
      if (!EDITMODE)
        return;
      saveBut.disabled = true;
      saveBut.classList.remove("active");
      fetch("backend.php?file=timeline.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ACTUALDATA, false, 4)
      }).then((response) => {
        saveBut.disabled = false;
        if (!response.ok) {
          throw new Error("Save failed");
        }
        console.log("saved ok, refresh ");
      }).catch((error) => {
        console.error("Error:", error);
        alert("Error saving data");
        saveBut.disabled = false;
      });
    }
    function timelineGraph(date_start, date_end) {
      const start = parseDate(date_start);
      const end = parseDate(date_end);
      if (start > end)
        return "<g></g>";
      const totalDays = numberOfDays(start, end);
      let svgContent = "";
      let footSvgContent = "";
      let flag = true;
      let monthd;
      for (let i = 0; i < totalDays; i++) {
        const currentDate = new Date(start);
        currentDate.setDate(start.getDate() + i);
        let isToday = isDateToday(currentDate);
        monthd = currentDate.getMonth();
        const x = startX + i * spanWidth;
        const day = currentDate.getDate();
        const month = monthd + 1;
        const label = `${String(day).padStart(2, "0")}`;
        datePositions.push({ date: `${padNumber(day)}/${padNumber(monthd + 1)}/${currentDate.getFullYear()}`, x });
        if (isToday) {
          svgContent += `<rect x='${x}' y='15' width="${spanWidth}" height="${h}" fill="#aaccaa33" />`;
        }
        if (currentDate.getDay() == 6) {
          svgContent += `<rect x='${x}' y='15' width="${spanWidth * 2}" height="${h}" fill="#aaaacc11" />`;
        }
        svgContent += `<line x1="${x}" y1="15" x2="${x}" y2="${h}" stroke="${isToday ? "#eeeeee" : day == 1 ? "#777777" : "#eeeeee"}" stroke-width="0.5"/>`;
        svgContent += `<text x="${x}" y="${flag ? 10 : 10}" font-size="${isToday ? 5 : 3}" text-anchor="middle" fill="${isToday ? "green" : "black"}">${label}</text>`;
        footSvgContent += `<text x="${x}" y="${flag ? 5 : 5}" font-size="${isToday ? 5 : 3}" text-anchor="middle" fill="${isToday ? "green" : "black"}">${label}</text>`;
        if (day == 1) {
          svgContent += `<text x="${x}" y="${5}" font-size="6" text-anchor="left" fill="black">${months2[monthd]} ${currentDate.getFullYear()}</text>`;
          footSvgContent += `<text x="${x}" y="${12}" font-size="6" text-anchor="left" fill="black">${months2[monthd]} ${currentDate.getFullYear()}</text>`;
        }
        flag = !flag;
      }
      return `
                    <svg id='timeline1' width="${(totalDays * spanWidth + 100) * MULT}" height="${h * MULT}"  viewBox="0 0 ${(totalDays * spanWidth + 100) * 1} ${h * 1}" xmlns="http://www.w3.org/2000/svg">
                        <g>${svgContent}</g>
                     </svg>
    
                    <div class='foot'>
                    <svg id='timeline1Footer' style='background:#ffffff;' width="${(totalDays * spanWidth + 100) * MULT}" height="${20 * 2}"  viewBox="0 0 ${(totalDays * spanWidth + 100) * 1} ${20 * 1}" xmlns="http://www.w3.org/2000/svg">
                    <g>             
                    ${footSvgContent}
                    </g>
                    </svg></div>
                  
    
    
                    `;
    }
    function timelineElement(date_start, date_end, labels, color, name, elId, planta) {
      let y = posY;
      posY += 40;
      const start = parseDate(date_start);
      let sX = (numberOfDays(firstDateObj, start) - 1) * spanWidth + startX;
      const end = parseDate(date_end);
      const ndays = numberOfDays(start, end);
      const rect = `<rect class='plantaRect' width="${ndays * spanWidth}" height="${spanWidth}" fill="${color}cc" data-planta-id='${elId}'/>`;
      let labelElements = "";
      labels.forEach((item, ii) => {
        const labelDate = parseDate(item.date);
        const dayDiff = Math.round((labelDate - start) / oneDay);
        const xPos = dayDiff * spanWidth;
        labelElements += `<g class='eventlabel'  transform="translate(${xPos}, ${0})"  data-event-index='${ii}'>
                            <text x="${xPos - xPos}" y="-3" font-size="5" text-anchor="left">${item.label}</text>`;
        labelElements += `<text class='date' x="${xPos - xPos}" y="-10" font-size="5" text-anchor="left">${item.date}</text>`;
        labelElements += `<circle cx="${xPos - xPos + spanWidth / 2}" cy="${spanWidth * 0.5}" stroke="#000000" fill='#ffffff55' r='2'></circle>
                </g>`;
      });
      let imageElements = "";
      if (planta.images) {
      } else
        planta.images = [];
      planta.images.forEach((im, ii) => {
        const plantDate = parseImageDate(im.date);
        const dayDiff = Math.round((plantDate - start) / oneDay);
        const xPos = dayDiff * spanWidth;
        console.log({ plantDate, dayDiff, xPos });
        imageElements += `<g class='plantImage'  transform="translate(${xPos}, ${0})"  data-image-index='${ii}'>
                                <image x="${0}" y="5" href='${im.img}' data-date='${im.date}'  width='15' height='15'> 
                                </g>`;
      });
      const nameEl = `<text class='lineName' x="${0}" y="${spanWidth + 7}" font-size="7" text-anchor="left" fill='${"#666666"}'>${name}</text>`;
      return `<g transform="translate(${sX}, ${y})" data-planta-id='${elId}'>
        ${rect}
        ${nameEl}
        <g class="imagesG">
        ${imageElements}
        </g>
            <g class="events">
            ${labelElements}
            </g>
    </g>`;
    }
    function setChangedState(b) {
      if (b) {
        saveBut.classList.add("active");
        saveBut.disabled = false;
      } else {
        saveBut.classList.remove("active");
        saveBut.disabled = true;
      }
    }
  }
  var emonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function isDateToday(date) {
    let hoy = new Date();
    return date.getFullYear() === hoy.getFullYear() && date.getMonth() === hoy.getMonth() && date.getDate() === hoy.getDate();
  }
  function parseImageDate(dateStr) {
    const [_, month, day, year] = dateStr.split(" ");
    return new Date(Number(year), emonths.indexOf(month), Number(day));
  }
  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  }
  function numberOfDays(start, end) {
    const oneday = 24 * 60 * 60 * 1e3;
    return Math.round(Math.abs((end - start) / oneday)) + 1;
  }
  function padNumber(num) {
    return Number(num) < 10 ? `0${num}` : `${num}`;
  }
})();
