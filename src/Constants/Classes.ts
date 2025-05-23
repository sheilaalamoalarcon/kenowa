import { StylesTypes, type AlertType } from "./Enumerations";
export interface CMessage {
  id: string;
  text: string;
  title: string;
  subtitle: string;
  proprietary: string; //proprietary id
  proprietary_name: string;
  created_at: string;
  html_content: string;
}
export interface IAlert {
  type: AlertType;
  message: string;
}
export interface Saved {
  id: string;
  user_id: string;
  message_id: string;
  created_at: Date;
}
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    status: number;
  };
}

export function ApiRes<T>(options: {
  success: boolean;
  data?: T;
  status?: number;
  message?: string;
  code?: string;
}) {
  const response = {
    success: options.success,
    data: options.data,
    ...(options.message && {
      error: {
        code: options.code || "ERROR",
        message: options.message,
        status: options.status || 400,
      },
    }),
  };

  return new Response(JSON.stringify(response), {
    status: options.status || (options.success ? 200 : 400),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const ErrorHandler = {
  AUTH: (message = "No autorizado") =>
    ApiRes({
      success: false,
      message,
      status: 401,
      code: "AUTH_ERROR",
    }),
  VALIDATION: (message: string) =>
    ApiRes({
      success: false,
      message,
      status: 400,
      code: "VALIDATION_ERROR",
    }),
  RATE_LIMIT: () =>
    ApiRes({
      success: false,
      message: "Demasiadas peticiones",
      status: 429,
      code: "RATE_LIMIT_ERROR",
    }),
};

//class components
export class DialogManager {
  private dialog!: HTMLDialogElement;
  private openBtn: HTMLElement | null = null;
  private closeBtn: HTMLElement | null = null;

  constructor() {
    this.dialog = document.getElementById("form-dialog") as HTMLDialogElement;
    this.openBtn = document.getElementById("open");
    this.closeBtn = document.getElementById("close");
    this.init();
  }

  private init(): void {
    this.openBtn?.addEventListener("click", () => {
      this.dialog?.showModal();
    });
    this.closeBtn?.addEventListener("click", () => this.dialog?.close());

    this.dialog.addEventListener("keydown", (e) => {
      //close dialog with keyboard
      if (e.key === "Escape") {
        this.dialog.close();
      }
    });
  }
}
export class EditorManager {
  private editor!: HTMLDivElement;
  private hiddenInput: HTMLInputElement | null = null;
  private selectedStyle: StylesTypes;
  private currentSelection: Selection | null = null;

  constructor(editorID: string, hiddenInputID: string) {
    this.editor = document.getElementById(editorID) as HTMLDivElement;
    this.hiddenInput = document.getElementById(
      hiddenInputID
    ) as HTMLInputElement;
    this.selectedStyle = StylesTypes.ITALIC;
    this.currentSelection = null;

    this.init();
  }

  private init(): void {
    this.setEventListener();
  }

  private createWrapper(text: string | null, desiredStyle: StylesTypes) {
    switch (desiredStyle) {
      case StylesTypes.ITALIC:
        const em = document.createElement("em");
        em.id = `italic-wrapper`;

        em.className = "regular-text";
        em.textContent = text ?? "there isn't text";
        return em;
      case StylesTypes.BOLD:
        const strong = document.createElement("strong");
        strong.id = `strong-wrapper`;

        strong.className = "regular-text";
        strong.textContent = text ?? "there isn't text";
        return strong;
      case StylesTypes.UNDERLINE:
        const wrapper = document.createElement("p");
        wrapper.id = `underlined-wrapper`;

        wrapper.textContent = text ?? "there isn't text";
        wrapper.classList.add("regular-text", "underline");
        return wrapper;

      default: //!Regular text
        const textWrapper = document.createElement("p");
        textWrapper.id = `paragraph-wrapper`;

        textWrapper.className = "regular-text";
        textWrapper.textContent = text ?? "there isn't text";
        textWrapper.classList.replace("underline", "no-underline");
        return textWrapper;
    }
  }
  private deleteWrapper(wrapper: HTMLElement) {
    wrapper.remove();
  }
  private handleInput(): void {
    if (!this.hiddenInput || !this.editor) return;
    this.hiddenInput.value = this.editor.innerHTML;
  }
  private saveSelection(): void {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      this.currentSelection = selection;
    }
  }
  private handleSection(): void {
    const selection = window.getSelection();
    if (!selection?.toString()) return;

    const range = selection.getRangeAt(0);
    const wrapper = this.createWrapper(
      selection.toString(),
      this.selectedStyle
    );

    range.deleteContents();
    range.insertNode(wrapper);
  }
  private setEventListener(): void {
    this.editor.addEventListener("input", this.handleInput.bind(this));

    this.editor.addEventListener("mouseup", this.saveSelection.bind(this));
    this.editor.addEventListener("keyup", this.saveSelection.bind(this));

    document.addEventListener("astro:before-swap", () => {
      this.editor.removeEventListener("input", this.handleInput.bind(this));

      this.editor.addEventListener("mouseup", this.saveSelection.bind(this));
      this.editor.addEventListener("keyup", this.saveSelection.bind(this));
    });
  }

  setStyle(selected: StylesTypes) {
    this.selectedStyle = selected;
  }
  toggleStyle(selected: StylesTypes) {
    this.selectedStyle =
      this.selectedStyle === selected ? StylesTypes.ITALIC : selected;
  }
}
