(() => {
  // src/createGrid.js
  function createGrid(svg, cols, rows, size) {
    for (let x = 0; x <= cols * size; x += size) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      line.setAttribute("d", `M${x},0 L${x},${rows * size}`);
      line.setAttribute("stroke", "#11111155");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);
    }
    for (let y = 0; y <= rows * size; y += size) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      line.setAttribute("d", `M0,${y} L${cols * size},${y}`);
      line.setAttribute("stroke", "#11111155");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);
    }
  }

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
      fetch("upload.php", {
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

  // src/Messages.js
  var USER = localStorage.getItem("CSA_SO");
  if (USER) {
  } else {
    USER = "";
  }
  function Messages(div, obj, saveFn) {
    let messages = obj.msgs;
    if (messages) {
    } else {
      obj.msgs = [];
      messages = obj.msgs;
    }
    const container = document.createElement("div");
    const messagesContainer = document.createElement("div");
    const inputContainer = document.createElement("div");
    const input = document.createElement("textarea");
    const sendButton = document.createElement("button");
    let userInput = document.getElementById("username");
    userInput.value = USER;
    function init() {
      container.style.display = "flex";
      container.style.flexDirection = "column";
      container.style.height = "400px";
      container.style.border = "1px solid #000000";
      container.style.borderRadius = "8px";
      container.style.overflow = "hidden";
      messagesContainer.style.flex = "1";
      messagesContainer.style.padding = "10px";
      messagesContainer.style.overflowY = "auto";
      messagesContainer.style.backgroundColor = "#333333";
      messagesContainer.style.border = "1px solid #000000";
      inputContainer.style.display = "flex";
      inputContainer.style.padding = "10px";
      inputContainer.style.backgroundColor = "#333333";
      inputContainer.style.borderTop = "1px solid #000000";
      input.style.flex = "1";
      input.style.padding = "8px";
      input.style.border = "1px solid #ddd";
      input.style.borderRadius = "4px";
      input.style.marginRight = "8px";
      input.setAttribute("placeholder", "escribir ac\xE1...");
      sendButton.innerHTML = "&gt;";
      sendButton.style.padding = "8px 16px";
      sendButton.style.backgroundColor = "#007bff";
      sendButton.style.color = "white";
      sendButton.style.border = "none";
      sendButton.style.borderRadius = "4px";
      sendButton.style.cursor = "pointer";
      sendButton.addEventListener("click", handleSend);
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter")
          handleSend();
      });
      inputContainer.appendChild(input);
      inputContainer.appendChild(sendButton);
      container.appendChild(messagesContainer);
      container.appendChild(inputContainer);
      div.innerHTML = "";
      div.appendChild(container);
      renderMessages();
      userInput = document.getElementById("username");
    }
    function renderMessages() {
      messagesContainer.innerHTML = "";
      messages.forEach((msg, i) => {
        const messageElement = createMessageElement(msg, i);
        messagesContainer.appendChild(messageElement);
      });
      [...messagesContainer.querySelectorAll("span.removeMsg")].forEach((m) => {
        m.addEventListener("click", () => {
          let th = Number(m.getAttribute("data-id"));
          obj.msgs = messages.filter((mm, i) => {
            if (i == th) {
              console.log(th, "=", i);
            }
            return i != th;
          });
          messages = obj.msgs;
          renderMessages();
          if (saveFn)
            saveFn();
        });
      });
      scrollToBottom();
    }
    function deleteMsg(e) {
    }
    function createMessageElement(msg, ii) {
      const messageDiv = document.createElement("div");
      messageDiv.style.marginBottom = "10px";
      messageDiv.style.padding = "8px 12px";
      messageDiv.style.borderRadius = "4px";
      messageDiv.style.maxWidth = "80%";
      messageDiv.style.wordBreak = "break-word";
      messageDiv.style.position = "relative";
      const isCurrentUser = msg.user === USER;
      if (isCurrentUser) {
        messageDiv.style.marginLeft = "auto";
        messageDiv.style.backgroundColor = "#007bff";
        messageDiv.style.color = "white";
        messageDiv.innerHTML = `<span class="removeMsg" data-id='${ii}' style="position:absolute;top:2px;right:5px;color:#aaff88;font-wheight:600;cursor:pointer;">&times;</span>`;
      } else {
        messageDiv.style.marginRight = "auto";
        messageDiv.style.backgroundColor = "#e9e9e9";
        messageDiv.style.color = "#333";
      }
      const metaDiv = document.createElement("div");
      metaDiv.style.fontSize = "0.8em";
      metaDiv.style.marginBottom = "4px";
      metaDiv.style.opacity = "0.8";
      metaDiv.innerHTML = `<i>${msg.user}</i> \u2022 ${msg.date.split("/").join(" / ")}`;
      const contentDiv = document.createElement("div");
      contentDiv.textContent = msg.msg;
      messageDiv.appendChild(metaDiv);
      messageDiv.appendChild(contentDiv);
      return messageDiv;
    }
    function handleSend() {
      USER = userInput.value;
      if (USER == "") {
        alert("Falta el nombre de qui\xE9n escribe");
        userInput.style.border = "2px solid #77ff88";
        return;
      }
      userInput.style.border = "1px solid #666666";
      localStorage.setItem("CSA_SO", USER);
      const text = input.value.trim();
      if (text) {
        const newMessage = {
          user: USER,
          msg: text,
          date: new Date().toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          })
        };
        messages.push(newMessage);
        renderMessages();
        input.value = "";
        if (saveFn)
          saveFn();
      }
    }
    function scrollToBottom() {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    function setUser(name) {
      USER = name;
      return api;
    }
    function addMessage(message) {
      if (message && message.user && message.msg) {
        messages.push({
          ...message,
          date: message.date || new Date().toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          })
        });
        renderMessages();
      }
      return api;
    }
    function clearMessages() {
      messages = [];
      renderMessages();
      return api;
    }
    const api = {
      setUser,
      addMessage,
      clearMessages
    };
    init();
    return api;
  }

  // src/frutales.main.src.js
  var EDITMODE = true;
  var FULLSIZE = false;
  var MapSize = { w: 1518, h: 1420 };
  var MAP = {};
  var Plants = [];
  document.addEventListener("DOMContentLoaded", () => {
    const svgEl = document.getElementById("svgCanvas");
    let mapBut = document.querySelector(".showMapa");
    svgEl.classList.add("opened");
    mapBut.addEventListener("click", (e) => {
      if (e)
        e.preventDefault();
      if (svgEl.classList.contains("opened")) {
        svgEl.classList.remove("opened");
      } else {
        svgEl.classList.add("opened");
      }
    });
    APP();
  });
  function APP() {
    let file = "plants.json";
    const svg = document.getElementById("svgCanvas");
    const galeriaSteal = document.querySelector(".galeria-steal");
    let scale = window.innerWidth / MapSize.w;
    if (FULLSIZE) {
      svg.setAttribute("width", MapSize.w);
      svg.setAttribute("height", MapSize.h);
      scale = 1;
    }
    const editor = document.getElementById("editor");
    const closeBut = editor.querySelector(".closeBut");
    const editEspecie = document.getElementById("editEspecie");
    const editName = document.getElementById("editName");
    const editColor = document.getElementById("editColor");
    const editId = document.getElementById("editId");
    const editData = document.getElementById("editData");
    const saveBtn = document.getElementById("saveChanges");
    const modeBtn = document.getElementById("modeBtn");
    const plantGallery = editor.querySelector(".galeria");
    const msgs = editor.querySelector(".msgs");
    let selectedPlant = null;
    svg.setAttribute("viewBox", `0 0 ${MapSize.w} ${MapSize.h}`);
    window.addEventListener("resize", () => {
      scale = window.innerWidth / MapSize.w;
    });
    loadPlants();
    async function loadPlants() {
      let afile = file;
      const res = await fetch(afile + "?r=" + Math.random());
      MAP = await res.json();
      Plants = MAP.plants;
      renderPlants();
    }
    function renderPlants() {
      let especies = {};
      Plants.forEach((plant, index) => {
        if (especies[plant.especie]) {
          especies[plant.especie]++;
        } else {
          especies[plant.especie] = 1;
        }
      });
      console.log(JSON.stringify(especies, false, 4));
      svg.innerHTML = "";
      console.log(Plants.length, "plants loaded from plants.json");
      createGrid(svg, 16, 15, 200);
      Plants.forEach((plant, index) => {
        Plant(plant, index);
      });
    }
    function Plant(plant, index) {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${plant.x},${plant.y})`);
      g.setAttribute("class", "plant-group");
      g.setAttribute("data-index", index);
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", plant.size || 12);
      circle.setAttribute("fill", plant.color);
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("y", 20);
      text.setAttribute("text-anchor", "middle");
      text.textContent = plant.name;
      g.appendChild(circle);
      let PL = plant.img;
      if (PL) {
      } else {
        if (plant.fotos && plant.fotos.length) {
          PL = plant.fotos[0];
        }
      }
      if (PL) {
        const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle1.setAttribute("r", 5);
        circle1.setAttribute("cx", plant.size ? plant.size * 0.8 : -6);
        circle1.setAttribute("cy", plant.size ? -plant.size * 0.8 : -6);
        circle1.setAttribute("fill", "#aaffaa");
        g.appendChild(circle1);
      }
      g.appendChild(text);
      svg.appendChild(g);
      enableDrag(g);
      function enableDrag(g2) {
        let offsetX, offsetY, index2, plant2, sto;
        let isTouchDevice = "ontouchstart" in window;
        let circle2 = g2.querySelector("circle");
        if (!isTouchDevice) {
          g2.addEventListener("mousedown", (e) => {
            index2 = g2.getAttribute("data-index");
            plant2 = Plants[index2];
            offsetX = e.offsetX - plant2.x;
            offsetY = e.offsetY - plant2.y;
            let op = { x: plant2.x, y: plant2.y };
            function onMouseMove(e2) {
              plant2.x = e2.offsetX - offsetX;
              plant2.y = e2.offsetY - offsetY;
              g2.setAttribute("transform", `translate(${plant2.x},${plant2.y})`);
            }
            function onMouseUp() {
              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", onMouseUp);
              savePlants();
              if (plant2.x == op.x && plant2.y == op.y) {
                if (svg.querySelector("circle.selected")) {
                  svg.querySelector("circle.selected").setAttribute("class", "b");
                }
                circle2.setAttribute("class", "selected");
                selectPlant(index2);
              }
            }
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
          });
          return;
        }
        g2.addEventListener("touchstart", function(e) {
          e.preventDefault();
          index2 = g2.getAttribute("data-index");
          const touch = e.touches[0];
          plant2 = Plants[index2];
          offsetX = touch.clientX - plant2.x;
          offsetY = touch.clientY - plant2.y;
          let op = { x: plant2.x, y: plant2.y };
          document.addEventListener("touchmove", onTouchMove, { passive: false });
          document.addEventListener("touchend", onTouchEnd);
          function onTouchMove(e2) {
            e2.preventDefault();
            const touch2 = e2.touches[0];
            plant2.x = touch2.clientX - offsetX;
            plant2.y = touch2.clientY - offsetY;
            g2.setAttribute("transform", `translate(${plant2.x},${plant2.y})`);
          }
          function onTouchEnd() {
            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", onTouchEnd);
            savePlants();
            clearTimeout(sto);
            sto = setTimeout(() => {
              if (plant2.x == op.x && plant2.y == op.y) {
                if (svg.querySelector("circle.selected"))
                  svg.querySelector("circle.selected").setAttribute("class", "b");
                circle2.setAttribute("class", "selected");
                selectPlant(index2);
              }
            }, 600);
          }
        }, { passive: false });
      }
    }
    function selectPlant(index) {
      selectedPlant = Plants[index];
      editor.querySelector("small").innerHTML = `${selectedPlant.name} - ${selectedPlant.id} `;
      editName.value = selectedPlant.name;
      editEspecie.value = selectedPlant.especie;
      editId.value = selectedPlant.id;
      editColor.value = selectedPlant.color;
      editData.value = selectedPlant.data;
      plantGallery.innerHTML = ``;
      ImagesComp(plantGallery, selectedPlant, savePlants);
      if (selectedPlant.msgs) {
        Messages(msgs, selectedPlant, savePlants);
      } else {
        selectedPlant.msgs = [];
        Messages(msgs, selectedPlant, savePlants);
      }
      editor.style.display = "block";
      svg.classList.remove("opened");
      galeriaSteal.classList.remove("opened");
    }
    saveBtn.addEventListener("click", () => {
      if (selectedPlant) {
        selectedPlant.name = editName.value;
        selectedPlant.especie = editEspecie.value;
        selectedPlant.color = editColor.value;
        selectedPlant.id = editId.value;
        selectedPlant.data = editData.value;
        renderPlants();
        savePlants();
        editor.style.display = "none";
        editor.classList.remove("opened");
        svg.classList.add("opened");
        galeriaSteal.classList.add("opened");
      }
    });
    closeBut.addEventListener("click", () => {
      editor.style.display = "none";
      editor.classList.remove("opened");
      svg.classList.add("opened");
      galeriaSteal.classList.add("opened");
    });
    svg.addEventListener("dblclick", (e) => {
      const newPlant = { id: `${Date.now()}`, name: "nombre", x: e.offsetX, y: e.offsetY, color: "#22aa44", data: [], especie: "especie", fotos: [], images: [] };
      Plants.push(newPlant);
      renderPlants();
      savePlants();
    });
    modeBtn.checked = EDITMODE;
    modeBtn.addEventListener("change", function() {
      EDITMODE = modeBtn.checked;
    });
    function savePlants() {
      if (!EDITMODE)
        return;
      let afile = file;
      console.log("saving...");
      fetch("backend.php?filename=" + afile, {
        method: "POST",
        body: JSON.stringify(MAP, false, 4)
      }).then((d) => {
        console.log(d);
        d.json();
      }).then((txt) => {
        console.log(txt);
      }).catch((e) => console.error(e));
    }
  }
})();
