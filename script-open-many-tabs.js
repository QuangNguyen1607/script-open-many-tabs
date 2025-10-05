(() => {
  const ID = "bulk-url-param-mapper-v3";
  const exist = document.getElementById(ID);
  if (exist) { exist.style.display = "block"; exist.focus(); return; }

  // ---------- UI ----------
  const box = document.createElement("div");
  box.id = ID;
  box.style.cssText = `
    all: initial; position: fixed; top: 24px; right: 24px; z-index: 2147483647;
    width: 1400px; max-width: 95vw; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color:#111; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.2);
  `;
  const head = document.createElement("div");
  head.style.cssText = `background:#0b57d0;color:#fff;padding:12px 16px;font-weight:600;display:flex;justify-content:space-between;align-items:center;cursor:move;user-select:none;`;
  head.innerHTML = `<span>Tool Facebook QN | Open Many Tabs</span>`;
  const x = document.createElement("button");
  x.textContent = "✕";
  x.style.cssText = `all:unset;cursor:pointer;padding:4px 8px;border-radius:6px;font-weight:700;`;
  x.onmouseenter = () => (x.style.background = "rgba(255,255,255,.2)");
  x.onmouseleave = () => (x.style.background = "transparent");
  x.onclick = () => box.remove();
  head.appendChild(x);

  // Main content with two columns
  const mainContent = document.createElement("div");
  mainContent.style.cssText = `display:grid;grid-template-columns:1fr 1fr;gap:16px;min-height:500px;`;

  // Left column - Configuration
  const leftColumn = document.createElement("div");
  leftColumn.style.cssText = `padding:16px;border-right:1px solid #e5e7eb;overflow-y:auto;max-height:80vh;`;

  // Right column - Results
  const rightColumn = document.createElement("div");
  rightColumn.style.cssText = `padding:16px;overflow-y:auto;max-height:80vh;display:flex;flex-direction:column;`;

  // Left Column Content
  // Base URL Section
  const urlSection = document.createElement("div");
  urlSection.style.cssText = `margin-bottom:20px;`;
  const urlTitle = document.createElement("h3");
  urlTitle.textContent = "1. URL Configuration";
  urlTitle.style.cssText = `margin:0 0 12px 0;font-size:16px;color:#0b57d0;`;
  const baseLbl = document.createElement("label");
  baseLbl.textContent = "Base URL (will be parsed):";
  baseLbl.style.cssText = `display:block;font-size:13px;opacity:.8;margin-bottom:6px;`;
  const baseIn = document.createElement("input");
  baseIn.type = "text";
  baseIn.placeholder = "https://business.facebook.com/business-support-home/contact-support?selectedAsset=814429991130494&selectedIssue=7124078524279431";
  baseIn.style.cssText = `width:100%;box-sizing:border-box;font:13px/1.4 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;border:1px solid #d0d7de;border-radius:8px;padding:10px;outline:none;transition:border-color 0.2s;margin-bottom:10px;`;
  baseIn.onfocus = () => (baseIn.style.borderColor = "#0b57d0");
  baseIn.onblur  = () => (baseIn.style.borderColor = "#d0d7de");
  const parseBtn = document.createElement("button");
  parseBtn.textContent = "Parse URL";
  parseBtn.style.cssText = `margin-top:4px;all:unset;background:#0b57d0;color:#fff;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;transition:background 0.2s;`;
  parseBtn.onmouseenter = () => (parseBtn.style.background = "#0a47ac");
  parseBtn.onmouseleave = () => (parseBtn.style.background = "#0b57d0");
  urlSection.append(urlTitle, baseLbl, baseIn, parseBtn);

  // Parameters Section
  const paramsSection = document.createElement("div");
  paramsSection.style.cssText = `margin-bottom:20px;`;
  const paramsTitle = document.createElement("h3");
  paramsTitle.textContent = "2. Query Parameters";
  paramsTitle.style.cssText = `margin:0 0 12px 0;font-size:16px;color:#0b57d0;`;
  const paramsSubTitle = document.createElement("div");
  paramsSubTitle.textContent = "Query parameters (editable):";
  paramsSubTitle.style.cssText = `font-size:13px;opacity:.8;margin-bottom:8px;`;
  const paramsGrid = document.createElement("div");
  paramsGrid.style.cssText = `display:grid;grid-template-columns:140px 1fr;gap:6px 8px;align-items:center;`;
  paramsSection.append(paramsTitle, paramsSubTitle, paramsGrid);

  // Mapping Section
  const mapSection = document.createElement("div");
  mapSection.style.cssText = `margin-bottom:20px;`;
  const mapTitle = document.createElement("h3");
  mapTitle.textContent = "3. Parameter Mapping";
  mapTitle.style.cssText = `margin:0 0 12px 0;font-size:16px;color:#0b57d0;`;
  const mapLbl = document.createElement("label");
  mapLbl.textContent = "Map table rows to this parameter:";
  mapLbl.style.cssText = `display:block;font-size:13px;opacity:.8;margin-bottom:6px;`;
  const mapSel = document.createElement("select");
  mapSel.style.cssText = `width:100%;font:13px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;border:1px solid #d0d7de;border-radius:8px;padding:8px;outline:none;`;
  mapSection.append(mapTitle, mapLbl, mapSel);

  // Batch Size Section
  const batchSection = document.createElement("div");
  batchSection.style.cssText = `margin-bottom:20px;`;
  const batchTitle = document.createElement("h3");
  batchTitle.textContent = "4. Batch Settings";
  batchTitle.style.cssText = `margin:0 0 12px 0;font-size:16px;color:#0b57d0;`;
  const batchLbl = document.createElement("label");
  batchLbl.textContent = "Number of tabs to open at once:";
  batchLbl.style.cssText = `display:block;font-size:13px;opacity:.8;margin-bottom:6px;`;
  const batchIn = document.createElement("input");
  batchIn.type = "number";
  batchIn.value = "10";
  batchIn.min = "1";
  batchIn.max = "100";
  batchIn.style.cssText = `width:100px;font:13px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;border:1px solid #d0d7de;border-radius:8px;padding:8px;outline:none;`;
  batchSection.append(batchTitle, batchLbl, batchIn);

  // ID Input Section
  const inputSection = document.createElement("div");
  inputSection.style.cssText = `margin-bottom:20px;`;
  const inputTitle = document.createElement("h3");
  inputTitle.textContent = "5. Add IDs";
  inputTitle.style.cssText = `margin:0 0 12px 0;font-size:16px;color:#0b57d0;`;
  const taLbl = document.createElement("label");
  taLbl.textContent = "List of values (one per line):";
  taLbl.style.cssText = `display:block;font-size:13px;opacity:.8;margin-bottom:6px;`;
  const ta = document.createElement("textarea");
  ta.rows = 8;
  ta.placeholder = "533021949528571\n533021949528572\n533021949528573\n533021949528574";
  ta.style.cssText = `width:100%;box-sizing:border-box;resize:vertical;font:12px/1.4 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;border:1px solid #d0d7de;border-radius:8px;padding:10px;outline:none;transition:border-color 0.2s;`;
  ta.onfocus = () => (ta.style.borderColor = "#0b57d0");
  ta.onblur  = () => (ta.style.borderColor = "#d0d7de");
  const addListBtn = document.createElement("button");
  addListBtn.textContent = "Add List ID";
  addListBtn.style.cssText = `margin-top:4px;all:unset;background:#0b57d0;color:#fff;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;transition:background 0.2s;`;
  addListBtn.onmouseenter = () => (addListBtn.style.background = "#0a47ac");
  addListBtn.onmouseleave = () => (addListBtn.style.background = "#0b57d0");
  inputSection.append(inputTitle, taLbl, ta, addListBtn);

  leftColumn.append(urlSection, paramsSection, mapSection, batchSection, inputSection);

  // Right Column Content
  // Table Section
  const tableSection = document.createElement("div");
  tableSection.style.cssText = `flex:1;display:flex;flex-direction:column;`;
  const tableTitle = document.createElement("h3");
  tableTitle.textContent = "ID List & Status";
  tableTitle.style.cssText = `margin:0 0 12px 0;font-size:16px;color:#0b57d0;`;
  
  // Saved IDs counter
  const savedCounter = document.createElement("div");
  savedCounter.id = "savedCounter";
  savedCounter.style.cssText = `margin-bottom:12px;font-size:14px;color:#374151;background:#f3f4f6;padding:8px 12px;border-radius:6px;display:flex;align-items:center;gap:6px;`;
  savedCounter.innerHTML = `<span style="font-weight:600;">Saved IDs:</span> <span id="savedCount" style="color:#0b57d0;font-weight:600;">0</span>`;
  
  // Action buttons container (initially hidden)
  const actionButtonsContainer = document.createElement("div");
  actionButtonsContainer.style.cssText = `display:none;margin-bottom:12px;`;
  const exportBtn = document.createElement("button");
  exportBtn.textContent = "Export Saved IDs";
  exportBtn.style.cssText = `all:unset;background:#0b57d0;color:#fff;padding:6px 12px;border-radius:6px;cursor:pointer;font-weight:600;margin-right:8px;transition:background 0.2s;`;
  exportBtn.onmouseenter = () => (exportBtn.style.background = "#0a47ac");
  exportBtn.onmouseleave = () => (exportBtn.style.background = "#0b57d0");
  const clearAllBtn = document.createElement("button");
  clearAllBtn.textContent = "Clear All";
  clearAllBtn.style.cssText = `all:unset;background:#0b57d0;color:#fff;padding:6px 12px;border-radius:6px;cursor:pointer;font-weight:600;transition:background 0.2s;`;
  clearAllBtn.onmouseenter = () => (clearAllBtn.style.background = "#0a47ac");
  clearAllBtn.onmouseleave = () => (clearAllBtn.style.background = "#0b57d0");
  actionButtonsContainer.append(exportBtn, clearAllBtn);

  // Table for ID list
  const tableContainer = document.createElement("div");
  tableContainer.style.cssText = `flex:1;border:1px solid #d0d7de;border-radius:8px;overflow:hidden;min-height:200px;`;
  const table = document.createElement("table");
  table.style.cssText = `width:100%;border-collapse:collapse;`;
  table.innerHTML = `
    <thead style="position:sticky;top:0;background:#f8fafc;z-index:1;">
      <tr>
        <th style="padding:10px;text-align:left;border-bottom:1px solid #d0d7de;font-size:13px;font-weight:600;width:50px;">Order</th>
        <th style="padding:10px;text-align:left;border-bottom:1px solid #d0d7de;font-size:13px;font-weight:600;">SelectedAsset</th>
        <th style="padding:10px;text-align:left;border-bottom:1px solid #d0d7de;font-size:13px;font-weight:600;">Status</th>
        <th style="padding:10px;text-align:left;border-bottom:1px solid #d0d7de;font-size:13px;font-weight:600;">Save</th>
      </tr>
    </thead>
    <tbody id="idTableBody"></tbody>
  `;
  tableContainer.appendChild(table);
  tableSection.append(tableTitle, savedCounter, actionButtonsContainer, tableContainer);

  // Action buttons
  const actionSection = document.createElement("div");
  actionSection.style.cssText = `margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb;`;
  const checkBtn = document.createElement("button");
  checkBtn.textContent = "Check pop-up permission";
  checkBtn.style.cssText = `all:unset;background:#0b57d0;color:#fff;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;margin-right:8px;transition:background 0.2s;`;
  checkBtn.onmouseenter = () => (checkBtn.style.background = "#0a47ac");
  checkBtn.onmouseleave = () => (checkBtn.style.background = "#0b57d0");
  const openBtn  = document.createElement("button");
  openBtn.textContent = "Open tabs";
  openBtn.style.cssText = `all:unset;background:#0b57d0;color:#fff;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;transition:background 0.2s;`;
  openBtn.onmouseenter = () => (openBtn.style.background = "#0a47ac");
  openBtn.onmouseleave = () => (openBtn.style.background = "#0b57d0");
  actionSection.append(checkBtn, openBtn);

  // Status/help
  const status = document.createElement("div");
  status.style.cssText = `margin-top:12px;font-size:13px;min-height:20px;opacity:.95;`;
  const help = document.createElement("div");
  help.style.cssText = `margin-top:8px;font-size:12px;color:#6b7280;background:#f9fafb;padding:8px;border-radius:6px;`;
  help.innerHTML = `💡 <strong>Workflow:</strong> Parse URL → Select parameter → Add IDs → Open tabs in batches`;

  rightColumn.append(tableSection, actionSection, status, help);

  mainContent.appendChild(leftColumn);
  mainContent.appendChild(rightColumn);
  box.append(head, mainContent);
  document.body.appendChild(box);

  // ---------- Drag ----------
  (function drag() {
    let sx=0,sy=0,ox=0,oy=0,drag=false;
    head.addEventListener("mousedown", e => {
      drag = true; sx=e.clientX; sy=e.clientY;
      const r = box.getBoundingClientRect(); ox=r.left; oy=r.top;
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
      e.preventDefault();
    });
    function move(e){ if(!drag) return;
      const nx = ox + (e.clientX - sx); const ny = oy + (e.clientY - sy);
      box.style.left = nx + "px"; box.style.top = ny + "px"; box.style.right = "auto"; box.style.bottom = "auto";
    }
    function up(){ drag=false; document.removeEventListener("mousemove", move); document.removeEventListener("mouseup", up); }
  })();

  // ---------- State ----------
  let baseUrlNormalized = "";
  // Map<paramName, inputEl>
  const paramControls = new Map();
  // ID list data
  let idList = [];
  // Saved IDs from storage
  let savedIds = JSON.parse(localStorage.getItem('savedIds') || '[]');

  // ---------- Helpers ----------
  const normalizeUrl = (raw) => {
    let u = (raw||"").trim(); if (!u) return null;
    if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(u)) u = "https://" + u;
    try { new URL(u); return u; } catch { return null; }
  };

  function addParamRow(name, value) {
    const nameLbl = document.createElement("div");
    nameLbl.textContent = name;
    nameLbl.style.cssText = `font:12px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; opacity:.9;`;

    const valIn = document.createElement("input");
    valIn.type = "text"; valIn.value = value ?? "";
    valIn.style.cssText = `width:100%;box-sizing:border-box;font:12px/1.4 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;border:1px solid #d0d7de;border-radius:8px;padding:6px 8px;outline:none;transition:border-color 0.2s;`;
    valIn.onfocus = () => (valIn.style.borderColor = "#0b57d0");
    valIn.onblur  = () => (valIn.style.borderColor = "#d0d7de");

    paramsGrid.append(nameLbl, valIn);
    paramControls.set(name, valIn);
  }

  function rebuildParamGridFrom(urlStr) {
    // Clear params + select
    paramsGrid.innerHTML = "";
    paramControls.clear();
    mapSel.innerHTML = "";

    const url = new URL(urlStr);
    const qp = url.searchParams;
    const names = [];
    qp.forEach((v,k) => { if (!names.includes(k)) names.push(k); });

    if (!names.length) {
      addParamRow("param", "");
    } else {
      names.forEach(n => addParamRow(n, qp.get(n) ?? ""));
    }

    // Fill select **exactly once** from the current paramControls
    for (const key of paramControls.keys()) {
      const opt = document.createElement("option");
      opt.value = key; opt.textContent = key;
      mapSel.appendChild(opt);
    }

    // Default mapped param
    const defaultName = paramControls.has("selectedAsset")
      ? "selectedAsset"
      : [...paramControls.keys()][0] || "";
    if (defaultName) mapSel.value = defaultName;

    updateMappedDisabled(); // ensure the mapped field is disabled
  }

  function updateMappedDisabled() {
    const chosen = mapSel.value;
    for (const [name, input] of paramControls.entries()) {
      if (name === chosen) {
        input.disabled = true;
        input.style.background = "#f9fafb";
        input.style.color = "#6b7280";
        input.title = "Disabled because this parameter is mapped from the ID list.";
      } else {
        input.disabled = false;
        input.style.background = "#fff";
        input.style.color = "#111";
        input.title = "";
      }
    }
  }

  function updateSavedCounter() {
    const savedCountEl = document.getElementById("savedCount");
    if (savedCountEl) {
      savedCountEl.textContent = savedIds.length;
    }
  }

  function renderIdTable() {
    const tbody = document.getElementById("idTableBody");
    tbody.innerHTML = "";
    
    if (idList.length === 0) {
      const emptyRow = document.createElement("tr");
      const emptyCell = document.createElement("td");
      emptyCell.colSpan = 4;
      emptyCell.style.cssText = `padding:20px;text-align:center;color:#9ca3af;font-style:italic;`;
      emptyCell.textContent = "No IDs added yet. Add IDs using the form on the left.";
      emptyRow.appendChild(emptyCell);
      tbody.appendChild(emptyRow);
    } else {
      idList.forEach((item, index) => {
        const row = document.createElement("tr");
        row.style.cssText = `border-bottom:1px solid #f3f4f6;transition:background 0.2s;`;
        row.onmouseenter = () => (row.style.background = "#f9fafb");
        row.onmouseleave = () => (row.style.background = "transparent");
        
        // Order cell
        const orderCell = document.createElement("td");
        orderCell.style.cssText = `padding:10px;font-size:13px;font-weight:600;color:#6b7280;text-align:center;`;
        orderCell.textContent = index + 1;
        
        // ID cell
        const idCell = document.createElement("td");
        idCell.style.cssText = `padding:10px;font-size:13px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;`;
        idCell.textContent = item.id;
        
        // Status cell
        const statusCell = document.createElement("td");
        statusCell.style.cssText = `padding:10px;font-size:13px;`;
        const statusBadge = document.createElement("span");
        statusBadge.textContent = item.opened ? "Đã mở" : "Chưa mở tab";
        statusBadge.style.cssText = `display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;background:${item.opened ? "#dcfce7" : "#fee2e2"};color:${item.opened ? "#166534" : "#991b1b"};`;
        statusCell.appendChild(statusBadge);
        
        // Save cell
        const saveCell = document.createElement("td");
        saveCell.style.cssText = `padding:10px;`;
        const saveBtn = document.createElement("button");
        saveBtn.textContent = item.saved ? "✓ Đã lưu" : "Lưu ID";
        saveBtn.style.cssText = `all:unset;background:${item.saved ? "#dcfce7" : "#eef2ff"};color:${item.saved ? "#166534" : "#0b57d0"};padding:4px 10px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;border:1px solid ${item.saved ? "#bbf7d0" : "#c7d2fe"};transition:all 0.2s;`;
        saveBtn.onmouseenter = () => {
          if (!item.saved) saveBtn.style.background = "#dbeafe";
        };
        saveBtn.onmouseleave = () => {
          if (!item.saved) saveBtn.style.background = "#eef2ff";
        };
        saveBtn.onclick = () => toggleSaveId(index);
        saveCell.appendChild(saveBtn);
        
        row.appendChild(orderCell);
        row.appendChild(idCell);
        row.appendChild(statusCell);
        row.appendChild(saveCell);
        tbody.appendChild(row);
      });
    }
    
    // Show/hide action buttons based on table content
    if (idList.length > 0) {
      actionButtonsContainer.style.display = "block";
    } else {
      actionButtonsContainer.style.display = "none";
    }
    
    // Update saved counter
    updateSavedCounter();
  }

  function toggleSaveId(index) {
    const item = idList[index];
    item.saved = !item.saved;
    
    if (item.saved) {
      if (!savedIds.includes(item.id)) {
        savedIds.push(item.id);
        localStorage.setItem('savedIds', JSON.stringify(savedIds));
      }
    } else {
      const savedIndex = savedIds.indexOf(item.id);
      if (savedIndex > -1) {
        savedIds.splice(savedIndex, 1);
        localStorage.setItem('savedIds', JSON.stringify(savedIds));
      }
    }
    
    renderIdTable();
  }

  function buildUrlsFromIds(ids) {
    const urls = [];
    const chosen = mapSel.value;
    
    for (const id of ids) {
      const u = new URL(baseUrlNormalized);
      for (const [pname, input] of paramControls.entries()) {
        // Use current inputs for every param except the mapped one
        if (pname !== chosen) u.searchParams.set(pname, input.value);
      }
      // Override mapped param with the ID
      if (chosen) u.searchParams.set(chosen, id);

      urls.push(u.toString());
    }
    return urls;
  }

  // Pop-up probe (off-screen, auto-closes)
  function probePopupPermission() {
    const test = window.open("about:blank", "_blank", "popup,width=80,height=60,left=-10000,top=-10000,toolbar=no,menubar=no,location=no,status=no");
    if (!test) return false;
    [50, 150, 500, 1200].forEach(ms => setTimeout(() => { try { test.close(); } catch {} }, ms));
    return true;
  }
  function showGrantSteps() {
    const host = location.host || location.origin || "this site";
    status.style.color = "#dc2626"; status.style.fontWeight = "600";
    status.innerHTML = `
      ⚠️ Pop-ups are <b>blocked</b>. Allow for <b>${host}</b>:
      <ol style="margin:6px 0 0 18px;padding:0;">
        <li>Click the pop-up blocked icon in the address bar</li>
        <li>Choose "Always allow pop-ups and redirects from ${host}"</li>
        <li>Click "Done", then press "Open tabs" again</li>
      </ol>`;
  }
  function openMany(urls) {
    const wins = []; let blocked = 0;
    for (let i = 0; i < urls.length; i++) {
      const w = window.open("about:blank", "_blank");
      if (w) { try { w.opener = null; } catch {} wins.push(w); } else { blocked++; }
    }
    if (!wins.length) { showGrantSteps(); return; }

    let opened = 0, failed = blocked;
    wins.forEach((w, i) => {
      try { w.location.href = urls[i]; opened++; }
      catch (e) { try { w.close(); } catch {} failed++; }
    });
    status.style.color = "#059669"; status.style.fontWeight = "600";
    status.textContent = `✅ Opened ${opened} tabs${failed ? ` (${failed} blocked)` : ""}.`;
  }

  // ---------- Events ----------
  parseBtn.addEventListener("click", () => {
    const norm = normalizeUrl(baseIn.value);
    if (!norm) {
      status.style.color = "#dc2626"; status.style.fontWeight = "600";
      status.textContent = "❌ Invalid URL. Include protocol or I'll assume https://";
      return;
    }
    baseUrlNormalized = norm;
    rebuildParamGridFrom(norm);
    status.style.color = "#059669"; status.style.fontWeight = "600";
    status.textContent = "✅ URL parsed successfully. Configure parameters and add IDs.";
  });

  mapSel.addEventListener("change", updateMappedDisabled);

  addListBtn.addEventListener("click", () => {
    const lines = ta.value.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    
    if (!lines.length) {
      status.style.color = "#dc2626"; status.style.fontWeight = "600";
      status.textContent = "❌ No IDs found. Please enter IDs (one per line).";
      return;
    }
    
    // Add new IDs to the list
    let addedCount = 0;
    let duplicateCount = 0;
    lines.forEach(id => {
      // Check if ID already exists
      const existingIndex = idList.findIndex(item => item.id === id);
      if (existingIndex === -1) {
        // Check if it was previously saved
        const isSaved = savedIds.includes(id);
        idList.push({
          id: id,
          opened: false,
          saved: isSaved
        });
        addedCount++;
      } else {
        duplicateCount++;
      }
    });
    
    renderIdTable();
    
    // Clear textarea after adding
    ta.value = "";
    
    let message = `✅ Added ${addedCount} new IDs to the list.`;
    if (duplicateCount > 0) {
      message += ` (${duplicateCount} duplicates skipped)`;
    }
    status.style.color = "#059669"; status.style.fontWeight = "600";
    status.textContent = message;
  });

  exportBtn.addEventListener("click", () => {
    if (savedIds.length === 0) {
      status.style.color = "#dc2626"; status.style.fontWeight = "600";
      status.textContent = "❌ No saved IDs to export.";
      return;
    }
    
    const dataStr = JSON.stringify(savedIds, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'saved_ids.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    status.style.color = "#059669"; status.style.fontWeight = "600";
    status.textContent = `✅ Exported ${savedIds.length} saved IDs.`;
  });

  clearAllBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all IDs from the list? This won't affect saved IDs.")) {
      idList = [];
      renderIdTable();
      
      status.style.color = "#059669"; status.style.fontWeight = "600";
      status.textContent = "✅ Cleared all IDs from the list.";
    }
  });

  checkBtn.addEventListener("click", () => {
    if (probePopupPermission()) {
      status.style.color = "#059669"; status.style.fontWeight = "600";
      status.textContent = "✅ Pop-up permission is OK — you can open multiple tabs.";
    } else {
      showGrantSteps();
    }
  });

  openBtn.addEventListener("click", () => {
    if (!baseUrlNormalized) {
      status.style.color = "#dc2626"; status.style.fontWeight = "600";
      status.textContent = "❌ Please parse a URL first.";
      return;
    }
    if (!probePopupPermission()) { showGrantSteps(); return; }
    
    // Get unopened IDs
    const unopenedIds = idList.filter(item => !item.opened);
    
    if (!unopenedIds.length) {
      status.style.color = "#dc2626"; status.style.fontWeight = "600";
      status.textContent = "❌ All IDs have been opened. Add more IDs to continue.";
      return;
    }
    
    // Get batch size
    const batchSize = parseInt(batchIn.value) || 10;
    
    // Get IDs to open (limited by batch size)
    const idsToOpen = unopenedIds.slice(0, batchSize).map(item => item.id);
    
    // Build URLs and open tabs
    const urls = buildUrlsFromIds(idsToOpen);
    openMany(urls);
    
    // Mark these IDs as opened
    idList.forEach(item => {
      if (idsToOpen.includes(item.id)) {
        item.opened = true;
      }
    });
    
    renderIdTable();
    
    // Update status
    const remainingCount = unopenedIds.length - idsToOpen.length;
    status.style.color = "#059669"; status.style.fontWeight = "600";
    status.textContent = `✅ Opened ${idsToOpen.length} tabs. ${remainingCount} remaining.`;
  });

  // Initialize saved counter on load
  updateSavedCounter();
})();