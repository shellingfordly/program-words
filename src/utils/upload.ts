export function uploadTxt(): Promise<string> {
  return new Promise((resole, reject) => {
    try {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", ".txt");
      input.click();
      input.onchange = function () {
        const event: any = this || window.event;
        const file = event.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (ev: any) => {
          resole(ev.target.result as string);
        };
      };
    } catch (error) {
      reject(error);
    }
  });
}
