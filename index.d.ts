declare function detectIndent (content: string): detectIndent.Indent;

declare namespace detectIndent {
  export interface Indent {
    amount: number;
    type?: string;
    indent: string;
  }
}

export = detectIndent;
