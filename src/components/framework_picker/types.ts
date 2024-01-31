export enum Languages {
  Rust = "rust",
  TypeScript = "typescript",
}

export interface Criteria {
  language?: Languages;
  isMetaFramework?: boolean;
  performance?: number;
}

export interface Framework {
  name: string;
  icon: string;
  slug: string;
  criteria: Criteria;
  mesh: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  > | null;
}

export interface QuestionOption {
  rationale: string;
  effect: Criteria;
}

export interface Question {
  title: string;
  description: string;
  criteria: Criteria;
  yes: QuestionOption;
  no: QuestionOption;
}
