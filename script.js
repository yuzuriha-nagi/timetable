const timeSlots = [
    { start: "14:00", end: "14:15" },
];
//時間//

const defaultData = [
    { Name: "登壇者名", theme: "登壇テーマ" },

    { Name: "", theme: "" }
];

const tbody = document.querySelector("#timetable tbody");

timeSlots.forEach((slot, rowIndex) => {
    const row = document.createElement("tr");

    const startCell = document.createElement("th");
    startCell.textContent = slot.start;
    row.appendChild(startCell);
  // 開始時刻//

    const endCell = document.createElement("th");
    endCell.textContent = slot.end;
    row.appendChild(endCell);
  // 終了時刻//

    const NameCell = document.createElement("td");
    const NameId = `plan-${rowIndex}`;
    const storedName = localStorage.getItem(NameId);
    NameCell.textContent = storedName !== null ? storedName : defaultData[rowIndex].Name;

    HNCell.addEventListener("click", () => {
    const newValue = prompt(`${slot.start} 登壇者名を入力:`, HNCell.textContent);
    if (newValue !== null) {
        HNCell.textContent = newValue;
        localStorage.setItem(HNId, newValue);
    }
    });
    row.appendChild(HNCell);
  // 登壇者名//

    const themeCell = document.createElement("td");
    const themeId = `memo-${rowIndex}`;
    const storedtheme = localStorage.getItem(themeId);
    themeCell.textContent = storedtheme !== null ? storedtheme : defaultData[rowIndex].theme;

    themeCell.addEventListener("click", () => {
    const newValue = prompt(`${slot.start} の登壇テーマを入力:`, themeCell.textContent);
    if (newValue !== null) {
        themeCell.textContent = newValue;
        localStorage.setItem(themeId, newValue);
    }
    });
    row.appendChild(themeCell);
  // 登壇テーマ//

    tbody.appendChild(row);
});

document.getElementById("reloadBtn").addEventListener("click", () => {
    location.reload();
});
//更新ボタン//