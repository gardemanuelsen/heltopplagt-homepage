/**
 * TypeScript types for the Concrete CMS 9.2+ REST API responses.
 * Based on https://documentation.concretecms.org/9-x/developers/rest-api/concrete-cms-rest-api-endpoints
 */

export interface ConcreteCustomAttribute {
  id: number;
  type: string;
  key: string;
  value: unknown;
}

export interface ConcreteBlock {
  id: number;
  /** Block type handle, e.g. "content", "image", "page_title" */
  type: string;
  /** Key/value object mirroring the block's edit form */
  value: Record<string, unknown>;
}

export interface ConcreteAreaContent {
  /** Rendered HTML for the area */
  content: string;
  raw: string;
}

export interface ConcreteArea {
  name: string;
  blocks: ConcreteBlock[];
  content?: ConcreteAreaContent;
}

export interface ConcreteFile {
  id: string;
  uuid: string;
  url: string;
  tracked_url: string;
  file_type: string;
  extension: string;
  title: string;
  description: string;
  tags: string;
  date_added: string;
  size: unknown;
  folder?: number;
  custom_attributes?: ConcreteCustomAttribute[];
}

export interface ConcretePageVersion {
  id: number;
  is_approved: string;
  date_created: string;
  date_approved: string;
  publish_end_date: string | null;
}

export interface ConcretePage {
  id: number;
  path: string;
  name: string;
  type: string;
  template: string;
  date_added: string;
  date_last_updated: string;
  locale: string;
  external_link_url: string | null;
  description: string;
  custom_attributes?: ConcreteCustomAttribute[];
  areas?: ConcreteArea[];
  files?: ConcreteFile[];
  content?: ConcreteAreaContent;
  version?: ConcretePageVersion;
}

export interface ConcreteSite {
  id: number;
  handle: string;
  name: string;
  home_page_id: number;
  default_locale: string;
  locales: {
    id: number;
    country: string;
    language: string;
    home_page_id: number;
  }[];
}
